# Kuaför Randevu Sistemi — Uygulama Rehberi

Fiyatsız / süresiz, seans saati bazlı randevu sistemi.
Hedef: müşteri 3 adımda talep bırakır, salon sahibi telefonda teyit edip onaylar.

---

## 1. Teknoloji Seçimi

| Katman | Öneri | Neden |
|---|---|---|
| Frontend | Next.js (App Router) + Tailwind | Antigravity bu stack'te en temiz üretiyor |
| Veritabanı + Auth | Supabase (Postgres) | SQL'i hazır yapıştırırsın, auth ve güvenlik kuralları içinde |
| Hosting | Vercel | GitHub'a push → otomatik yayın |

> Başka bir stack kullanıyorsan (PHP/Laravel, Node+MySQL) aşağıdaki tablo yapısı ve
> kurallar aynen geçerli; sadece RLS yerine kendi API katmanında yetki kontrolü yaparsın.

---

## 2. Veritabanı Şeması

Supabase → SQL Editor → aşağıdakini tek seferde çalıştır.

```sql
-- ============ 1. HİZMETLER (fiyatsız) ============
create table hizmetler (
  id          uuid primary key default gen_random_uuid(),
  ad          text not null,              -- Ombre, Mikro Kaynak, Kesim, Renklendirme
  aciklama    text,
  sira        int default 0,
  aktif       boolean default true,
  created_at  timestamptz default now()
);

-- ============ 2. UZMANLAR ============
create table uzmanlar (
  id             uuid primary key default gen_random_uuid(),
  ad             text not null,
  unvan          text,                      -- "Renk Uzmanı", "Kaynak Uzmanı"
  bio            text,
  foto_url       text,
  galeri         jsonb default '[]'::jsonb, -- ["url1","url2",...] portfolyo
  -- Haftalık seans şablonu. Anahtar = haftanın günü (0=Pazar ... 6=Cumartesi)
  -- Örnek: {"1":["10:00","13:00","16:00"],"2":["10:00","13:00","16:00"]}
  seans_saatleri jsonb default '{}'::jsonb,
  aktif          boolean default true,
  sira           int default 0,
  created_at     timestamptz default now()
);

-- ============ 3. RANDEVULAR ============
create type randevu_durum as enum ('bekliyor','onaylandi','iptal','tamamlandi');

create table randevular (
  id            uuid primary key default gen_random_uuid(),
  uzman_id      uuid not null references uzmanlar(id) on delete restrict,
  hizmet_id     uuid not null references hizmetler(id) on delete restrict,
  musteri_ad    text not null,
  telefon       text not null,
  tarih         date not null,   -- timestamptz KULLANMA
  saat          time not null,
  durum         randevu_durum not null default 'bekliyor',
  musteri_notu  text,
  yonetici_notu text,            -- "saç çok yıpranmış, 3 saat sürer"
  created_at    timestamptz default now(),
  updated_at    timestamptz default now()
);

-- ÇAKIŞMA KORUMASI: aynı uzman + tarih + saat ikinci kez yazılamaz.
-- İptal edilen randevu saati otomatik serbest kalır.
create unique index randevu_slot_tekil
  on randevular (uzman_id, tarih, saat)
  where durum in ('bekliyor','onaylandi');

create index randevu_tarih_idx on randevular (tarih, uzman_id);
create index randevu_durum_idx on randevular (durum, tarih);

-- ============ 4. KAPALI SAATLER (mola / izin) ============
create table kapali_saatler (
  id         uuid primary key default gen_random_uuid(),
  uzman_id   uuid not null references uzmanlar(id) on delete cascade,
  tarih      date not null,
  saat       time,          -- NULL = o gün tamamen izinli
  sebep      text,
  created_at timestamptz default now()
);

create unique index kapali_tekil
  on kapali_saatler (uzman_id, tarih, saat) nulls not distinct;
```

---

## 3. Boş Saat Hesaplama Fonksiyonu

Müşteri randevu tablosunu **hiç okumaz**. Sadece bu fonksiyonu çağırır ve boş saatleri alır.

```sql
create or replace function musait_saatler(p_uzman_id uuid, p_tarih date)
returns table (saat time)
language plpgsql
security definer
set search_path = public
as $$
declare
  v_gun text;
  v_simdi timestamp := now() at time zone 'Europe/Istanbul';
begin
  -- Uzman o gün tamamen izinli mi?
  if exists (
    select 1 from kapali_saatler k
    where k.uzman_id = p_uzman_id and k.tarih = p_tarih and k.saat is null
  ) then
    return;
  end if;

  v_gun := extract(dow from p_tarih)::text;

  return query
  select (s.value #>> '{}')::time
  from uzmanlar u,
       jsonb_array_elements(coalesce(u.seans_saatleri -> v_gun, '[]'::jsonb)) s
  where u.id = p_uzman_id
    and u.aktif
    -- dolu randevular
    and not exists (
      select 1 from randevular r
      where r.uzman_id = p_uzman_id
        and r.tarih = p_tarih
        and r.saat = (s.value #>> '{}')::time
        and r.durum in ('bekliyor','onaylandi')
    )
    -- yöneticinin kapattığı saatler
    and not exists (
      select 1 from kapali_saatler k
      where k.uzman_id = p_uzman_id
        and k.tarih = p_tarih
        and k.saat = (s.value #>> '{}')::time
    )
    -- geçmiş saatler görünmesin
    and (p_tarih > v_simdi::date
         or (s.value #>> '{}')::time > v_simdi::time)
  order by 1;
end;
$$;
```

### Randevu oluşturma fonksiyonu

Son anda tekrar kontrol eder, dolmuşsa anlaşılır hata döner.

```sql
create or replace function randevu_olustur(
  p_uzman_id  uuid,
  p_hizmet_id uuid,
  p_ad        text,
  p_telefon   text,
  p_tarih     date,
  p_saat      time,
  p_not       text default null
) returns uuid
language plpgsql
security definer
set search_path = public
as $$
declare v_id uuid;
begin
  if length(trim(p_ad)) < 2 then raise exception 'GECERSIZ_AD'; end if;
  if length(regexp_replace(p_telefon,'\D','','g')) < 10 then raise exception 'GECERSIZ_TELEFON'; end if;

  if not exists (
    select 1 from musait_saatler(p_uzman_id, p_tarih) m where m.saat = p_saat
  ) then
    raise exception 'SLOT_DOLU';
  end if;

  -- spam koruması: aynı numaradan 3'ten fazla bekleyen talep olamaz
  if (select count(*) from randevular r
      where r.telefon = p_telefon and r.durum = 'bekliyor') >= 3 then
    raise exception 'COK_FAZLA_TALEP';
  end if;

  insert into randevular (uzman_id, hizmet_id, musteri_ad, telefon, tarih, saat, musteri_notu)
  values (p_uzman_id, p_hizmet_id, trim(p_ad), p_telefon, p_tarih, p_saat, p_not)
  returning id into v_id;

  return v_id;
exception
  when unique_violation then raise exception 'SLOT_DOLU';
end;
$$;
```

---

## 4. Güvenlik Kuralları (RLS)

Bu bölümü atlarsan salonun bütün müşteri telefonları internete açık olur.

```sql
alter table hizmetler      enable row level security;
alter table uzmanlar       enable row level security;
alter table randevular     enable row level security;
alter table kapali_saatler enable row level security;

-- Herkes aktif hizmet ve uzmanları görebilir
create policy hizmet_oku on hizmetler
  for select to anon, authenticated using (aktif);
create policy uzman_oku on uzmanlar
  for select to anon, authenticated using (aktif);

-- Giriş yapmış yönetici her şeyi yönetir
create policy hizmet_yonet on hizmetler
  for all to authenticated using (true) with check (true);
create policy uzman_yonet on uzmanlar
  for all to authenticated using (true) with check (true);
create policy randevu_yonet on randevular
  for all to authenticated using (true) with check (true);
create policy kapali_yonet on kapali_saatler
  for all to authenticated using (true) with check (true);

-- randevular ve kapali_saatler için anon'a HİÇBİR policy yok.
-- Müşteri bu tablolara sadece yukarıdaki iki fonksiyon üzerinden dokunur.
grant execute on function musait_saatler(uuid, date)  to anon, authenticated;
grant execute on function randevu_olustur(uuid, uuid, text, text, date, time, text) to anon, authenticated;
```

**Yönetici hesabı:** Supabase → Authentication → Users → salon sahibi için tek bir
e-posta/şifre hesabı aç. Kayıt (sign-up) ekranı yapma, sadece giriş ekranı olsun.

---

## 5. Ekran Akışları

### Müşteri tarafı (3 adım, tek sayfa wizard)

1. **İşlem seç** — `hizmetler` listesi, fiyat gösterilmez. Altına not: *"Ücret saç yapınıza göre salonda belirlenir."*
2. **Uzman seç** — kart görünümü: foto, unvan, kısa bio, galeri (lightbox).
3. **Tarih & saat seç** — takvim (geçmiş günler ve tamamen kapalı günler pasif) → gün seçilince `musait_saatler()` çağrılır → boş saatler buton olarak listelenir.
4. **Onay formu** — ad, telefon, isteğe bağlı not, KVKK onay kutusu → `randevu_olustur()`.
5. **Sonuç ekranı** — *"Talebiniz alındı. Saç yapınıza göre süreyi netleştirmek için sizi arayacağız."* Randevunun **onaylanmadığını** açıkça yaz.

### Yönetici paneli (`/admin`, giriş zorunlu)

- **Bekleyenler** — kırmızı rozet + sayı. Her kartta: müşteri adı, tıklanabilir telefon (`tel:` linki), işlem, uzman, tarih/saat, not. Butonlar: **Onayla** / **Saati Değiştir** / **İptal**.
- **Onaylananlar** — gün/hafta filtreli liste.
- **Takvim** — uzman seç + hafta görünümü. Boş bir saate tıkla → "Bu saati kapat" (mola). Gün başlığına tıkla → "Tüm günü kapat" (izin).
- **Ayarlar** — hizmet ekle/sil, uzman ekle/düzenle, her uzman için haftalık seans saatleri.

**Saati değiştirme:** yönetici yeni saati seçtiğinde aynı benzersizlik kuralı çalışır;
dolu saate kaydırmaya çalışırsa uyarı gösterilir.

---

## 6. Antigravity'ye Verilecek Promptlar

Hepsini tek seferde isteme. Her adımdan sonra çalıştığını test et ve git commit at.

### Adım 1 — Kurulum
```
Next.js 15 App Router + TypeScript + Tailwind ile bir kuaför randevu sitesi kuruyoruz.
Supabase kullanacağız (@supabase/supabase-js ve @supabase/ssr).
Şunları oluştur:
- Proje iskeleti ve klasör yapısı
- lib/supabase/client.ts (tarayıcı) ve lib/supabase/server.ts (sunucu)
- .env.local.example dosyası: NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY
- types/db.ts içine hizmetler, uzmanlar, randevular, kapali_saatler tiplerini yaz
SERVICE_ROLE anahtarını hiçbir yerde kullanma.
Henüz sayfa yazma, sadece altyapıyı kur.
```

### Adım 2 — Müşteri akışı
```
Ana sayfada 3 adımlı bir randevu sihirbazı yap (tek sayfa, adımlar arası state korunsun):

Adım 1: hizmetler tablosundan aktif kayıtları çek, kart olarak listele, biri seçilir.
        FİYAT GÖSTERME. Altına "Ücret saç yapınıza göre salonda belirlenir" notu koy.
Adım 2: uzmanlar tablosundan aktif kayıtları çek. Her kartta foto_url, ad, unvan, bio
        ve galeri (jsonb dizi) küçük resimler halinde, tıklanınca büyüsün.
Adım 3: Bir takvim göster (bugünden itibaren 30 gün). Gün seçilince
        supabase.rpc('musait_saatler', { p_uzman_id, p_tarih }) çağır ve dönen
        saatleri buton listesi olarak göster. Boşsa "Bu gün için uygun saat yok" yaz.
Son adım: ad, telefon, not, KVKK onay kutusu.
        supabase.rpc('randevu_olustur', {...}) ile kaydet.
        Hata 'SLOT_DOLU' ise "Bu saat az önce doldu, lütfen başka bir saat seçin"
        göster ve saat listesini yenile.

Mobil öncelikli tasarla. Butonlar büyük olsun.
```

### Adım 3 — Yönetici girişi
```
/admin altındaki tüm sayfaları koruyan bir middleware yaz.
Oturum yoksa /admin/giris sayfasına yönlendir.
/admin/giris: sadece e-posta + şifre ile signInWithPassword. Kayıt olma linki OLMASIN.
/admin/cikis: signOut edip girişe döner.
```

### Adım 4 — Panel
```
/admin sayfasında iki sekme yap:
- "Bekleyenler": durum='bekliyor' randevular, tarih/saat sırasında.
  Her kartta müşteri adı, telefon (tel: linki olarak tıklanabilir), hizmet adı,
  uzman adı, tarih, saat, müşteri notu.
  Butonlar: Onayla (durum='onaylandi'), Saati Değiştir (modal: yeni tarih+saat,
  seçenekler musait_saatler'den gelsin), İptal (durum='iptal').
  Yönetici notu alanı düzenlenebilir olsun.
- "Onaylananlar": durum='onaylandi', tarih filtresiyle.
Sekme başlıklarında sayı rozeti göster. İşlem sonrası listeyi yenile.
```

### Adım 5 — Takvim ve kapatma
```
/admin/takvim sayfası:
- Üstte uzman seçici, altında haftalık ızgara (günler sütun, seans saatleri satır).
- Her hücrenin durumu: boş / dolu (müşteri adı yazsın) / kapalı.
- Boş hücreye tıkla → kapali_saatler'e kayıt ekle (mola).
- Kapalı hücreye tıkla → kaydı sil.
- Gün başlığında "Tüm günü kapat" butonu → saat=null kayıt ekle (izin günü).
- Haftalar arası ileri/geri gezinme.
```

### Adım 6 — Ayarlar
```
/admin/ayarlar sayfası:
- Hizmet ekle / düzenle / pasifleştir.
- Uzman ekle / düzenle: ad, unvan, bio, foto ve galeri yükleme
  (Supabase Storage 'uzmanlar' bucket'ı, public read).
- Her uzman için haftalık seans saatleri düzenleyicisi: 7 gün, her güne
  saat ekle/çıkar. seans_saatleri jsonb kolonuna {"0":[...],"1":[...]} formatında yaz.
```

---

## 7. Bildirim (opsiyonel ama tavsiye)

Salon sahibi paneli sürekli açık tutmasın diye yeni talepte haber gitsin.

En kolay yol **Telegram bot**: BotFather'dan token al, salon sahibi bota `/start` desin,
`randevu_olustur` sonrası sunucu tarafından basit bir `fetch` ile mesaj gönder.
Alternatif: Resend ile e-posta. WhatsApp Business API'yi ilk sürümde deneme, onay süreci uzun.

---

## 8. Sık Yapılan Hatalar

- **`SUPABASE_SERVICE_ROLE_KEY` istemci kodunda.** Bu anahtar tüm RLS kurallarını deler. Sadece sunucu tarafında (server action / route handler) kullan, `NEXT_PUBLIC_` öneki asla verme.
- **Saati "seçince" kilitlemek.** Sadece onayda kaydet. İstersen 10 dakikalık geçici rezerv ekle, ama ilk sürümde gerekmez — `SLOT_DOLU` hatasını düzgün göstermek yeterli.
- **Sadece arayüzde dolu kontrolü.** Benzersiz index olmadan iki kişi aynı saniyede aynı saati alır. Test et: iki farklı tarayıcıda aynı saati aç, ikisinde de onayla.
- **`timestamptz` kullanmak.** `date` + `time` ayrı tut, yoksa saat dilimi yüzünden randevular kayar.
- **Müşteri ekranında telefon/isim sızıntısı.** `musait_saatler` sadece saat döndürür, isim döndürmez. Kendi sorgunu yazarken bunu bozma.
- **KVKK:** onay kutusu + kısa aydınlatma metni ekle ("Ad ve telefon bilginiz yalnızca randevu teyidi için kullanılır"). Panelde eski randevuları silmek için bir "6 aydan eski kayıtları temizle" butonu iyi olur.
- **Antigravity'ye tek promptta her şeyi yaptırmak.** Adım adım ilerle, her çalışan halde commit at; bozulursa geri dönecek bir noktan olsun.

---

## 9. Test Listesi

- [ ] Müşteri 3 adımı tamamlayıp kayıt bırakabiliyor
- [ ] Alınan saat başka bir tarayıcıda listede görünmüyor
- [ ] Aynı anda iki onay → ikincisi anlaşılır hata alıyor
- [ ] Yönetici onaylayınca randevu "Onaylananlar"a geçiyor
- [ ] İptal edilen saat tekrar boşa düşüyor
- [ ] Kapatılan saat müşteride görünmüyor
- [ ] Tüm gün izinde o gün hiç saat çıkmıyor
- [ ] Giriş yapmadan /admin açılmıyor
- [ ] Çıkış yapıp `randevular` tablosunu API'den çekmeye çalış → boş dönmeli
- [ ] Bugünün geçmiş saatleri listede yok
- [ ] Mobilde tüm akış rahat kullanılıyor
