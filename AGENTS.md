# Proje Bağlamı — Kuaför Randevu Sitesi

> Bu dosya projenin sabit kurallarını tanımlar. Her görevde bu dosyadaki
> isimlendirmelere ve kısıtlara uy.

---

## Şu Anki Aşama: SADECE TASARIM VE ARAYÜZ

**Faz 1 (şu an):** Görsel tasarım, sayfa yapısı, bileşenler, akış. Veriler sahte.
**Faz 2 (sonra):** Supabase bağlantısı, randevu sistemi, yönetici paneli.

### Şimdi YAPMA

- Supabase kurma, `@supabase/*` paketi kurma, veritabanı çağrısı yazma.
- `.env` dosyası, API anahtarı, auth, middleware, oturum yönetimi ekleme.
- Yönetici paneli sayfaları yazma (`/admin/*`). Faz 2'de gerçek veriyle yapılacak.
- Bu dosyadaki alan adlarını "daha iyi" diye değiştirme.

### Şimdi YAP

- Müşteri tarafı sayfa ve bileşenleri, mobil öncelikli.
- Tüm veriyi `lib/data.ts` üzerinden al (aşağıdaki sözleşmeye birebir uy).
- Tipleri `types/db.ts` içinde tut, alan adları aşağıdaki tablolarla aynı olsun.
- Yükleniyor (loading), boş (empty) ve hata (error) durumlarını baştan tasarla.

---

## Değişmez İş Kuralları

1. **Fiyat hiçbir yerde gösterilmez.** Ücret salonda yüz yüze belirlenir.
2. **İşlem süresi hesaplanmaz.** Saç yapısı süreyi değiştirdiği için sistem
   süre tutmaz. Takvim, kuaförün belirlediği **sabit seans başlangıç saatleri**
   üzerinden çalışır (örn. 10:00 / 13:00 / 16:00).
3. **Randevu anında kesinleşmez.** Müşterinin bıraktığı kayıt "talep"tir.
   Salon sahibi telefonla arayıp saçın durumunu sorar, sonra onaylar.
   Arayüzde bu durum açıkça yazılmalı, "Randevunuz oluşturuldu" denmemeli.
4. Bir seans saati tek müşteriye aittir. Dolu saat listede hiç görünmez.
5. Müşteri sadece boş saatleri görür; başka müşterilerin bilgisi asla gösterilmez.

---

## Veri Sözlüğü

Alan adları Türkçe ve snake_case. Faz 2'de veritabanı tam olarak bu isimlerle
kurulacak — arayüzde farklı isim kullanma.

### Hizmet (`hizmetler`)
| Alan | Tip | Not |
|---|---|---|
| `id` | uuid | |
| `ad` | text | Ombre, Mikro Kaynak, Kesim, Renklendirme |
| `aciklama` | text \| null | kısa açıklama |
| `sira` | number | listeleme sırası |
| `aktif` | boolean | pasifler gösterilmez |

**Fiyat alanı yoktur, eklemeyin.**

### Uzman (`uzmanlar`)
| Alan | Tip | Not |
|---|---|---|
| `id` | uuid | |
| `ad` | text | |
| `unvan` | text \| null | "Renk Uzmanı" gibi |
| `bio` | text \| null | kısa tanıtım |
| `foto_url` | text \| null | profil fotoğrafı |
| `galeri` | string[] | portfolyo görselleri |
| `seans_saatleri` | Record<string, string[]> | `{"1":["10:00","13:00"]}` — anahtar haftanın günü, 0=Pazar |
| `aktif` | boolean | |
| `sira` | number | |

### Randevu (`randevular`)
| Alan | Tip | Not |
|---|---|---|
| `id` | uuid | |
| `uzman_id` | uuid | |
| `hizmet_id` | uuid | |
| `musteri_ad` | text | |
| `telefon` | text | |
| `tarih` | string | `YYYY-MM-DD` — Date nesnesi veya ISO timestamp KULLANMA |
| `saat` | string | `HH:MM` |
| `durum` | `'bekliyor' \| 'onaylandi' \| 'iptal' \| 'tamamlandi'` | |
| `musteri_notu` | text \| null | |
| `yonetici_notu` | text \| null | müşteriye gösterilmez |

### Kapalı Saat (`kapali_saatler`) — Faz 2
| Alan | Tip | Not |
|---|---|---|
| `id` | uuid | |
| `uzman_id` | uuid | |
| `tarih` | string | `YYYY-MM-DD` |
| `saat` | string \| null | null = o gün tamamen izinli |
| `sebep` | text \| null | |

---

## Veri Katmanı Sözleşmesi

Sayfalar ve bileşenler veriye **yalnızca** `lib/data.ts` üzerinden erişir.
Bileşen içinde sabit dizi tanımlama, veriyi prop olarak elden ele taşıma.

Faz 2'de bu dosyanın sadece içi Supabase çağrılarıyla değişecek; imzalar aynı kalacak.

```ts
// lib/data.ts — Faz 1'de içi sahte veri, imzalar kalıcı

export async function getHizmetler(): Promise<Hizmet[]>

export async function getUzmanlar(): Promise<Uzman[]>

export async function getUzman(id: string): Promise<Uzman | null>

/** Dönen değer: ["10:00","13:00"] — sadece boş saatler. Dolu/kapalı saat listeye girmez. */
export async function getMusaitSaatler(uzmanId: string, tarih: string): Promise<string[]>

/** Başarılıysa randevu id'si döner. */
export async function randevuOlustur(girdi: {
  uzman_id: string
  hizmet_id: string
  musteri_ad: string
  telefon: string
  tarih: string        // YYYY-MM-DD
  saat: string         // HH:MM
  musteri_notu?: string
}): Promise<string>
```

### Sahte veri kuralları

- Her fonksiyon **async** olacak ve 300–600 ms yapay gecikme içerecek.
- `getMusaitSaatler` bazı günler **boş dizi** döndürsün (izin günü senaryosu).
- `getMusaitSaatler` geçmiş tarih ve bugünün geçmiş saatleri için boş dönsün.
- `randevuOlustur` belirli bir saatte `new Error("SLOT_DOLU")` fırlatsın ki
  "bu saat az önce doldu" ekranı baştan tasarlansın.
- En az 4 hizmet, 3 uzman, uzman başına galeri görselleri olsun.

---

## Müşteri Akışı (Faz 1'de tasarlanacak)

Tek sayfa, 3 adımlı sihirbaz. Adımlar arası seçimler korunur, geri gidilebilir.
Üstte ilerleme göstergesi bulunur.

**Adım 1 — İşlem seçimi**
Aktif hizmetler kart olarak listelenir, biri seçilir.
Altta not: *"Ücret saç yapınıza göre salonda belirlenir."*

**Adım 2 — Uzman seçimi**
Uzman kartları: fotoğraf, ad, unvan, kısa bio, galeri küçük görselleri.
Galeriye tıklanınca büyük görünüm açılır.

**Adım 3 — Tarih ve saat**
Bugünden itibaren 30 günlük takvim; geçmiş günler pasif.
Gün seçilince `getMusaitSaatler` çağrılır, dönen saatler buton olarak listelenir.
Boş dizi gelirse: *"Bu gün için uygun saat bulunmuyor."*

**Onay formu**
Ad, telefon, isteğe bağlı not, KVKK onay kutusu.
Onay metni: *"Ad ve telefon bilginiz yalnızca randevu teyidi için kullanılır."*

**Sonuç ekranı**
*"Talebiniz alındı. Saç yapınıza göre süreyi netleştirmek için sizi arayacağız."*
Randevunun henüz kesinleşmediği net biçimde belirtilir.

**Hata durumu**
`SLOT_DOLU` yakalanırsa: *"Bu saat az önce doldu, lütfen başka bir saat seçin."*
Kullanıcı 3. adıma döner ve saat listesi yenilenir.

---

## Teknik Kısıtlar

- Next.js App Router + TypeScript + Tailwind.
- Tarih ve saat **her zaman string** (`YYYY-MM-DD`, `HH:MM`). `Date` nesnesini
  state'te tutma, saat dilimi kaymasına yol açıyor. Saat dilimi: Europe/Istanbul.
- Mobil öncelikli. Dokunma hedefleri en az 44px.
- Erişilebilirlik: form alanlarında label, butonlarda görünür odak halkası.

---

## Faz 2'de Eklenecekler (şimdi yazma, sadece yer bırak)

- Supabase: 4 tablo, `musait_saatler` ve `randevu_olustur` fonksiyonları, RLS kuralları.
- Çakışma koruması veritabanı seviyesinde benzersiz index ile sağlanacak.
  Arayüzdeki kontrol yeterli değil, buna güvenen mantık kurma.
- Yönetici paneli: bekleyen/onaylanan listeleri, telefonla teyit, saat kaydırma,
  uzman takviminde mola ve izin günü kapatma.
- Yönetici girişi (tek hesap, kayıt ekranı yok) ve `/admin` koruması.
- Yeni talep bildirimi.
