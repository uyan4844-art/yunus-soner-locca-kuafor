/**
 * LOCCA Hair Studio — Multi-Language Support (i18n)
 * Languages: TR (Turkish), EN (English), DE (German), RU (Russian), FR (French)
 * 
 * Rules:
 * - Brand names ('LOCCA', 'Yunus Soner', 'LOCCA HAIR STUDIO') are NEVER translated.
 * - Address & phone number are NEVER modified.
 * - Selected language is persisted in localStorage ('selected_lang').
 * - WhatsApp booking URLs dynamically update to reflect the chosen language.
 */

const translations = {
  tr: {
    // Localized Reels
    "reel_1_badge": "Mikro Kaynak",
    "reel_1_cat": "Canlı Seans",
    "reel_1_title": "Ultra Doğal Mikro Kaynak Seansı",
    "reel_1_num": "01 • Mikro Kaynak",
    "reel_2_badge": "Kristal Sarı",
    "reel_2_cat": "İmza Renk",
    "reel_2_title": "Locca Sarısı & Kristal Işıltı",
    "reel_2_num": "02 • Buz Sarısı",
    "reel_3_badge": "Highlight",
    "reel_3_cat": "Özel Açma",
    "reel_3_title": "Kademeli Highlight & Dalga",
    "reel_3_num": "03 • Highlight",
    "reel_4_badge": "Kesim & Renk",
    "reel_4_cat": "Stüdyo Tasarımı",
    "reel_4_title": "Kişiye Özel Form & Canlı Doku",
    "reel_4_num": "04 • Özel Kesim",
    "reel_5_badge": "Bright Blonde",
    "reel_5_cat": "Açma & Tonlama",
    "reel_5_title": "Bright Highlights & Ombre",
    "reel_5_num": "05 • Bright Blonde",
    "reel_6_badge": "Stüdyo İmzası",
    "reel_6_cat": "Atmosfer",
    "reel_6_title": "Locca Hair Studio Deneyimi",
    "reel_6_num": "06 • Stüdyo",
    "reel_7_badge": "Final Görünüm",
    "reel_7_cat": "Kusursuz Akış",
    "reel_7_title": "Locca İmzalı Saç Akışı & Bitiş",
    "reel_7_num": "07 • Final Dokunuş",
    // Localized Reviews
    "time_1m_ago": "1 ay önce",
    "time_2m_ago": "2 ay önce",
    "time_3m_ago": "3 ay önce",
    "rev_1_text": "\"Yıllardır saçlarımı ve kaynaklarımı gönül rahatlığıyla emanet ediyorum. Kaynak saç uygulaması o kadar profesyonel yapılıyor ki ne ağırlık hissediyorum ne de baş ağrısı yaşıyorum. Kendi saçımla o kadar doğal bütünleşiyor ki kullandığımı çoğu kişi anlamıyor. Renk konusunda da hiçbir zaman sürpriz yaşamıyorum. Önceden ne konuşuyorsak sonuç tam olarak o oluyor. İşine hâkim, titiz ve gerçekten deneyimli biri. Tüm bu kaliteye rağmen hâlâ mütevazı fiyatlarla hizmet vermesi de en güzel yanı. Güvenerek tavsiye edebileceğim, iyi ki tanımışım dediğim bir kuaför. 🌸\"",
    "rev_1_reply": "\"İyi günlerde kullanın efendim memnuniyetiniz bizleri çok mutlu etti 🙏🏼😊\"",
    "rev_1_role": "Postür Uzmanı & Pilates Eğitmeni",
    "rev_2_text": "\"Sağlık sorunları nedeniyle saçlarımın büyük bir kısmını kaybetmiştim ve bu durum beni gerçekten çok mutsuz ediyordu. Yunus sayesinde kendimi yeniden eski halime kavuşmuş gibi hissediyorum. Yaptığı saç kaynakları inanılmaz doğal görünüyor ve hiç belli olmuyor.\"",
    "rev_2_reply": "\"Memnuniyetiniz bizleri çok mutlu etti, iyi günlerde kullanmanız dileğiyle hoşçakalın 🙏🏼\"",
    "rev_2_role": "Mikro Kaynak & Dönüşüm",
    "rev_3_text": "\"Bugün ombre yaptırdım ve o kadar emek harcayarak sabırla yaptılar ki anlatamam. İşinin hakkını veren profesyonel bir yer 🌸 Çalışanları hoşsohbet ve güler yüzlü 💐 Bundan sonra Manavgat'ta uğrayacağım daimi kuaför burasıdır 🙏\"",
    "rev_3_reply": "\"Memnuniyetiniz bizleri çok mutlu etti efendim iyi günlerde kullanmanız dileğiyle hoşçakalın görüşmek üzere 🙏🏼😊\"",
    "rev_3_role": "Ombre & Özel Renklendirme",
    "rev_4_text": "\"Yaklaşık 5 yıldır saç boyatma işlemi için buraya geliyorum, 3 defa yaptırdım, her seferinde çok memnun kaldım. Saçıma doğal ışıltı rengi yaptırıyorum, gösterdiğim ve istediğim gibi en doğal tonlarda ve saçı yormadan yapıyorlar. İstanbul’daki vs yüksek fiyatlı popüler kuaförlerin işlemlerine eşdeğer nitelikte. Teşekkür ederim ilginiz ve emeğiniz için, hayırlı işleriniz bereketli kazançlarınız olsun.\"",
    "rev_4_reply": "\"Çok teşekkür ederim iyi günlerde kullanın tekrar bekleriz hoşçakalın 🙏🏼😊\"",
    "rev_4_role": "Doğal Işıltı (5 Yıllık Müşteri)",
    "rev_5_text": "\"Saçlarıma neredeyse 2 yıldır bakım yaptıramıyordum hem çok uzamıştı hem de yıpranmıştı. Ama keratin bakımıyla ve kesimiyle saçlarım inanılmaz değişti. İpek gibi yumuşacık oldu. İlk defa gittim ve başta tereddüt ettim ama yorumlara güvenerek geldim. Ben son derece memnun kaldım. Herkese de öneririm. Emeklerinize sağlık :)\"",
    "rev_5_reply": "\"Memnuniyetiniz bizleri çok mutlu etti efendim iyi günler dileriz hoşçakalın tekrar bekleriz 🙏🏼😊\"",
    "rev_5_role": "Keratin Bakımı & Kesim",
    "rev_6_text": "\"Gerçekten işini severek yapan bir kuaför ve sonuç muhteşem oldu. Saç rengi ve kesimin uyumu harika, ışıldadım resmen😊 Kendim de Google üzerinden denk geldim ve gerçekten memnun kaldım. Çok da güzel ilgilendiler. Antalya'ya yolu düşen için doğru adres, tavsiye ediyorum pişman olmazsınız.\"",
    "rev_6_reply": "\"İyi günlerde kullanın tekrar bekleriz 🙏🏼😊\"",
    "rev_6_role": "Saç Rengi & Kesim",
    "rev_7_text": "\"Loca Kuaför’de yaşadığım deneyim beklentilerimin çok üzerindeydi. İlk andan itibaren çalışanların güler yüzlü, ilgili ve profesyonel yaklaşımı kendimi rahat hissetmemi sağladı. Saçımla ilgili ne istediğimi dikkatle dinlediler, bana en uygun ve zarif sonucu sundular.\"",
    "rev_7_reply": "\"Memnuniyetiniz için çok teşekkür ederim bizleri güzel yorumunuzla çok mutlu ettiniz tekrar görüşmek dileğiyle hoşçakalın iyi günlerde kullanın efendim 🙏🏼🙏🏼😊\"",
    "rev_7_role": "Danışmanlık & Saç Tasarımı",
    "rev_8_text": "\"Kaliteli hizmet... Çalışanların hepsi güler yüzlü ve ilgili. Saçlarım çok seyrek ve yıllardır Furkan’a mikro kaynak yaptırıyorum. Hem saçıma uygun kaliteli saçlar seçiyor hem de mükemmel titizlikle uyguluyor.\"",
    "rev_8_reply": "\"Memnuniyetiniz bizleri çok mutlu etti efendim iyi günlerde kullanmanız dileğiyle hoşçakalın sevgiler saygılar 🙏🏼😊\"",
    "rev_8_role": "Mikro Kaynak (Furkan)",
    "rev_9_text": "\"İlk kez saç kesimi için gelmiştim ve aldığım profesyonel hizmetten çok memnun kaldım; bu yüzden manikür için tekrar tercih ettim. Özellikle hijyen ve temizliğe çok önem veriyorlar. İşini titizlikle yapan, güler yüzlü ve kaliteli hizmet sunan bir ekip. Gönül rahatlığıyla tavsiye ederim, kesinlikle düzenli geleceğim bir yer oldu.\"",
    "rev_9_reply": "\"Memnuniyetiniz bizi çok mutlu etti teşekkür ederiz efendim iyi günlerde kullanmanız dileğiyle tekrar görüşmek ümidiyle hoşçakalın 🙏🏼😊\"",
    "rev_9_role": "Kesim, Manikür & Hijyen",
    "rev_10_text": "\"Bugün bu kuaföre ilk kez geldim ve gerçekten çok memnun kaldım. Çalışanların hepsi inanılmaz güler yüzlü, ilgili ve samimiydi. Daha içeri girer girmez kendimi çok rahat hissettim. Benimle tek tek ilgilenip ne istediğimi dikkatle dinlediler ve ortaya tam hayal ettiğimden bile güzel bir sonuç çıkardılar. İşlerini özenle ve severek yaptıkları o kadar belli ki insan kendini özel hissediyor. Hem hizmet kalitesi hem de sıcak ortamı sayesinde kesinlikle tekrar geleceğim. Emeği geçen herkese çok teşekkür ederim, gönül rahatlığıyla herkese tavsiye ederim ❤️\"",
    "rev_10_reply": "\"Memnuniyetiniz bizleri çok mutlu etti efendim, iyi günlerde kullanın tekrar görüşmek dileğiyle hoşça kalın🙏🏼😊\"",
    "rev_10_role": "Özel Saç Deneyimi & Memnuniyet",
    // Navigation
    "nav_home": "Ana Sayfa",
    "nav_services": "Hizmetler",
    "nav_about": "Hakkımızda",
    "nav_reviews": "Yorumlar",
    "nav_faq": "SSS",
    "btn_book": "Randevu Al",
    "btn_whatsapp_consult": "WhatsApp Danışma",
    "floating_wa": "WhatsApp Randevu",

    // Hero Section
    "hero_subtitle": "İMZANIZ OLACAK",
    "hero_title": "Kusursuz Dönüşüm",
    "hero_quote": "\"Saç sağlığından ödün vermeden, yüz anatominize özel tasarlanan mikro kaynak ve renklendirme sanatı.\"",
    "hero_btn_services": "Hizmetler",
    "chip_mikro": "Mikro Kaynak",
    "chip_sombre": "Buz Sarısı",
    "chip_info": "İncele & Bilgi Al →",
    "hero_card_mikro_title": "MİKRO KAYNAK",
    "hero_card_mikro_desc": "Ağırlık yapmayan, doğal saçla uyumlu kaynak uygulaması.",
    "hero_card_sombre_title": "OMBRE & SOMBRE",
    "hero_card_sombre_desc": "Saç sağlığını koruyarak yapılan doğal sarı ton geçişleri.",

    // Bento / Signature Transformations
    "sec_signature_sub": "USTALIKLA SEÇİLMİŞ",
    "sec_signature_title": "İmza Dönüşümler",
    "bento_1_title": "Ultra Görünmez Mikro Kaynak",
    "bento_1_badge": "Nano Teknoloji",
    "bento_2_title": "Buz Sarısı & Kristal Soğuk Sombre",
    "bento_2_badge": "Kademeli Açma",
    "bento_3_title": "Gelin Başı & Özel Gün Tasarımı",
    "bento_3_badge": "Zarif & Kalıcı",
    "bento_4_title": "Doğal Kahve & Işıltılı Babylights",
    "bento_4_badge": "Doğal Tonlar",
    "bento_examine": "Detayları Gör",

    // Philosophy / Studio Section
    "sec_philosophy_sub": "MANAVGAT'TA BİR SAÇ DURAĞI",
    "sec_philosophy_title": "LOCCA Hair Studio",
    "sec_philosophy_desc": "\"Aşağı Hisar Mahallesi'nde, kendi yerimizde samimi ve profesyonel bir ortamda hizmet veriyoruz. Saçınızı yıpratmadan uzatmak, doğal tonlarda renklendirmek ve hak ettiğiniz özeni göstermek için buradayız.\"",
    "btn_about_locca": "LOCCA KUAFÖR HAKKINDA",

    // 4 Main Services Grid
    "sec_services_sub": "AYRICALIKLI DOKUNUŞLAR",
    "sec_services_title": "Uzmanlık Alanlarımız",
    "srv_1_title": "MİKRO KAYNAK",
    "srv_1_desc": "Hissedilmeyen nano kapsül ve doğal yoğun hacim",
    "srv_2_title": "BUZ SARISI",
    "srv_2_desc": "Kademeli açma ve yıpranmayan soğuk sarı tonlar",
    "srv_3_title": "DOĞAL IŞILTI",
    "srv_3_desc": "Güneşten açılmış gibi incecik babylights geçişleri",
    "srv_4_title": "KERATİN TERAPİ",
    "srv_4_desc": "Keratin botoks ve aynamsı parlaklık veren nem kürü",

    // Reviews Section
    "sec_reviews_sub": "GERÇEK DENEYİMLER",
    "sec_reviews_title": "Müşteri Yorumları",
    "reviews_rating_note": "Google'da doğrulanmış 370+ misafir deneyimi",
    "review_verified": "Doğrulandı",
    "review_owner_reply": "İşletme Sahibinin Yanıtı",

    // LOCCA Ritüeli (3 Steps)
    "ritual_sub": "NASIL ÇALIŞIYORUZ",
    "ritual_title": "Kusursuzluğa Giden 3 Adım",
    "ritual_1_title": "SAÇ ANALİZİ & KONSÜLTASYON",
    "ritual_1_desc": "\"Yüz anatominize, saç yoğunluğunuza ve geçmiş boya geçmişinize özel planlama.\"",
    "ritual_2_title": "KORUYUCU VE ÖZENLİ UYGULAMA",
    "ritual_2_desc": "\"Saç bağlarını koruyan özel açıcılar ve hissedilmeyen mikro kapsül teknolojisi.\"",
    "ritual_3_title": "İMZA DOKUNUŞ & TAKİP",
    "ritual_3_desc": "\"Aylarca formunu koruyan pürüzsüz saçlar ve evde bakım tavsiyeleri.\"",

    // Instagram Reels Section
    "reels_live_badge": "Canlı Stüdyo Çekimleri",
    "reels_sub": "CANLI DÖNÜŞÜMLER & REELS",
    "reels_title": "Instagram'da LOCCA",
    "reels_desc": "@yunus_soner_loca_hairdesing • Canlı stüdyo seanslarımızı, mikro kaynak montajlarını ve kristal sarı dönüşüm anlarını kaydırarak keşfedin.",
    "reels_more_btn": "Daha Fazla Reels İçin Instagram",
    "reels_mute_off": "Ses Kapalı",
    "reels_mute_on": "Ses Açık",

    // FAQ Section
    "sec_faq_sub": "MERAK EDİLENLER",
    "sec_faq_title": "Sıkça Sorulan Sorular",
    "sec_faq_desc": "LOCCA salonumuzdaki hizmetler, saç analizi ve randevu süreci hakkında en çok sorulan sorular.",
    "faq_q1": "Mikro kaynak saçlarıma zarar verir mi ve ne kadar süre kullanılır?",
    "faq_a1": "\"Hayır, kesinlikle zarar vermez. İtalyan nano keratin kapsüllerimiz saç teline ağırlık yapmaz ve hava almasını engellemez. Düzenli kullanımla saçınızın uzama hızına bağlı olarak 3-4 ay boyunca konforla kullanabilirsiniz.\"",
    "faq_q2": "Açma ve sarışınlık işlemlerinde saçım yıpranır mı?",
    "faq_a2": "\"Asla yıpranmaz. Tek seansta saçı yakarak açmak yerine, bağ koruyucu özel solüsyonlar (bond-builder) ve kademeli açma protokolü uyguluyoruz. Saç telinizin elastikiyetini koruyarak parlak ve kristal sarı tonlara ulaşıyoruz.\"",
    "faq_q3": "İşlem öncesinde saç analizi ve ön görüşme yapıyor musunuz?",
    "faq_a3": "\"Evet, her misafirimiz için randevu öncesinde detaylı saç analizi ve yüz anatomisine özel konsültasyon yapıyoruz. Saç geçmişinizi ve yıpranma durumunu değerlendirerek en dürüst ve doğru planlamayı birlikte oluşturuyoruz.\"",
    "faq_q4": "Randevuya gelmeden önce saçımı yıkamalı mıyım?",
    "faq_a4": "\"Özellikle renklendirme ve açma işlemlerinden önce saçınızı aynı gün yıkamamanızı, saç derisinin doğal yağ dengesini koruması için 1 gün önceden temiz bırakmanızı tavsiye ediyoruz. Kaynak ve diğer işlemler için salonumuzda profesyonel arındırıcı yıkama yapmaktayız.\"",

    // CTA / Footer
    "cta_sub": "randevunuzu planlayın",
    "cta_title": "HAYALİNİZDEKİ SAÇA İLK ADIMI ATIN",
    "cta_desc": "Yunus Soner ve uzman ekibimizle yüz anatominize en uygun tasarımı belirlemek için hemen WhatsApp üzerinden iletişime geçin.",
    "footer_address_title": "Adres & İletişim",
    "footer_directions": "Yol Tarifi Al",
    "footer_hours_title": "Çalışma Saatleri",
    "footer_hours_desc": "Salı - Pazar (Pazartesi Kapalı)<br>10:00 - 19:30 (Randevu İle)",
    "footer_satisfaction_title": "Müşteri Memnuniyeti",
    "footer_reviews_count": "(374 Google Yorumu)",
    "footer_rights": "© LOCCA Hair Studio. Tüm hakları saklıdır.",
    
    // Modal
    "modal_expertise_label": "LOCCA Hair Studio • İmza Uzmanlık",
    "modal_advantages": "Öne Çıkan Ayrıcalıklar",
    "modal_btn_book": "Bu İşlem İçin Randevu Al",
    "modal_notice": "* 0507 199 34 24 WhatsApp hattımıza doğrudan randevu talebiniz iletilir.",

    // ===== HIZMETLER PAGE =====
    "hp_sub": "USTALIK VE SAMİMİ ÖZENLE",
    "hp_title": "Uzmanlık Alanlarımız ve Tekniklerimiz",
    "hp_desc": "Her kadının saç anatomisi, yoğunluğu ve geçmiş boya tecrübesi kendine hastır. LOCCA stüdyosunda standart reçeteler değil, kişiye özel saç mimarisi uygulanır.",
    "hp_price_note": "Fiyatlarımız saç yapınız ve kullanılacak gramaja göre salonda yüz yüze belirlenmektedir.",
    // Service 1
    "hp_s1_label": "01 / İMZA UZMANLIK",
    "hp_s1_badge": "İmza Uzmanlık",
    "hp_s1_title": "Ultra Görünmez Mikro Saç Kaynak",
    "hp_s1_how_title": "Nasıl Yapıyoruz?",
    "hp_s1_how_desc": "Saçınızın yapısına, yoğunluğuna ve rengine en uygun %100 doğal saçları seçiyoruz. İtalyan nano keratin kapsüllerle saç diplerinize çok ince tutamlar halinde uyguluyoruz. Bağlantı noktaları hissedilmeyecek kadar küçük olduğu için saçınızı topladığınızda veya atkuyruğu yaptığınızda asla görünmez.",
    "hp_s1_approach_title": "Locca Kuaför Yaklaşımı",
    "hp_s1_approach_desc": "Piyasadaki ağır ve saçı koparan kaynakların aksine, kendi saçınızın nefes almasını ve sağlıklı uzamasını sağlıyoruz. Çıkarma işleminde de saça zarar vermeyen özel solüsyonlar kullanıyoruz.",
    "hp_book_this": "Bu İşlem İçin Randevu Al",
    // Service 2
    "hp_s2_label": "02 / ÖZEL RENKLENDİRME",
    "hp_s2_badge": "Kristal Soğuk Tonlar",
    "hp_s2_title": "Buz Sarısı & Sombre",
    "hp_s2_how_desc": "Tek seansta saçı yakarak açmak yerine, kademeli açma protokolü uyguluyoruz. Bağ koruyucu (bond builder) bakım açıcılar kullanarak saç telinin elastikiyetini koruyoruz. Dipten uca çizgisiz ve doğal geçişli sarı tonları yakalıyoruz.",
    "hp_s2_approach_desc": "Sarı saç yapmak kolaydır, ancak saçı yakmadan ve canlılığını kaybettirmeden açmak ustalık gerektirir. Turunculaşmayan, ipeksi ve kristal soğuk tonlar için her saçın geçmiş işlem durumuna göre özel formül hazırlıyoruz.",
    // Service 3
    "hp_s3_label": "03 / DOĞAL AYDINLATMA",
    "hp_s3_badge": "Zahmetsiz Doğallık",
    "hp_s3_title": "Doğal Kahve & Işıltı (Babylights)",
    "hp_s3_how_desc": "Saçın kendi ana zeminini ve doğallığını bozmadan, güneşten açılmış gibi incecik ışıltılar kazandırıyoruz. Klasik röfle gibi belirgin çizgiler yerine, saçın akışıyla bütünleşen mikro tutamlar (babylights) uyguluyoruz.",
    "hp_s3_approach_desc": "Dip boyası mecburiyeti olmayan, saç uzadıkça doğal duruşunu kaybetmeyen ve bakım gereksinimi düşük renklendirmeler tasarlıyoruz.",
    // Service 4
    "hp_s4_label": "04 / DERİN ONARIM & BAKIM",
    "hp_s4_badge": "İpeksi Onarım",
    "hp_s4_title": "Saç Terapisi & Keratin Botoks",
    "hp_s4_how_desc": "Isı ve kimyasallardan yıpranmış, nemini kaybetmiş saç tellerine keratin ve amino asit yüklemesi yapıyoruz. Saç pulcuklarını kapatarak pürüzsüz, elektriklenmeyen ve ışığı yansıtan ipeksi bir doku elde ediyoruz.",
    "hp_s4_approach_desc": "Kalıcı düzleştiriciler gibi saçı yapaylaştırmadan, saçın kendi doğal hareketini ve dalgasını koruyarak sağlıklı, dolgun ve parlak bir görünüm kazandırıyoruz.",
    // Hizmetler CTA
    "hp_cta_sub": "SAÇINIZIN HİKAYESİ BURADA BAŞLAR",
    "hp_cta_title": "Hayalinizdeki Saç İçin Bize Danışın",
    "hp_cta_desc": "Size en uygun seansı belirlemek için salon sahibimiz Yunus Soner ile yüz yüze veya telefonla görüşebilirsiniz.",
    "hp_cta_book": "Hemen Randevu Al",
    "hp_cta_consult": "WhatsApp İle Danışın",

    // ===== HAKKIMIZDA PAGE =====
    "ap_sub": "HİKAYEMİZ VE FELSEFEMİZ",
    "ap_title": "Yunus Soner & LOCCA Kuaför",
    "ap_location_label": "MANAVGAT AŞAĞI HİSAR",
    "ap_who_title": "Biz Kimiz & Ne Zamandır Buradayız?",
    "ap_who_p1": "\"Manavgat Aşağı Hisar'da uzun yıllara dayanan kuaförlük tecrübemizle, kadınların saç sağlığını merkeze alan bir anlayışla çalışıyoruz. Locca Kuaför, her müşterinin koltuktan mutlu ve kendine güvenerek kalkmasını amaçlayan bir saç stüdyosudur.\"",
    "ap_who_p2": "Klişe ve fabrikasyon salon anlayışının dışına çıkarak; her misafirimize vakit ayıran, saçın anatomik yapısını dinleyen ve samimi bir iletişim kuran bir hizmet sunuyoruz.",
    "ap_rating": "5.0 Puan",
    "ap_reviews_text": "370+ Doğrulanmış Google Yorumu",
    "ap_location_sub": "KONUM & ULAŞIM",
    "ap_location_title": "STÜDYO ADRESİ & ULAŞIM",
    "ap_parking": "Salonumuz Manavgat merkezde, Aşağı Hisar'da yer almaktadır. Ücretsiz otopark mevcuttur.",
    "ap_maps_btn": "📍 GOOGLE HARİTALAR'DA AÇ →",
    // Neler Yapıyoruz
    "ap_expertise_label": "UZMANLIK VE TİTİZLİK",
    "ap_expertise_title": "Neler Yapıyoruz?",
    "ap_expertise_desc": "\"Özellikle görünmez mikro kaynak uygulamaları, saçı yakmadan ve koparmadan kademeli açma (buz sarısı, ombre) teknikleri ve yoğun keratin botoks bakımlarında uzmanlaştık. Piyasa işi hızlı ve özensiz işlemler yerine, her saç teline zaman ayıran butik bir hizmet sunuyoruz.\"",
    // Güven Taahhüdü
    "ap_trust_label": "DÜRÜST VE ŞEFFAF YAKLAŞIM",
    "ap_trust_title": "Güven Taahhüdümüz",
    "ap_trust_desc": "\"Kendi saçımıza sürmeyeceğimiz hiçbir kimyasalı veya kalitesiz kaynağı müşterimize uygulamıyoruz. Fiyatlarımızı telefonda ezbere vermek yerine saçınızı salonda görüp en dürüst ve doğru planlamayı yapıyoruz. 370'in üzerinde 5 yıldızlı Google değerlendirmemiz bu özenin sonucudur.\"",
    "ap_personal_session": "Kişiye Özel Seans Düzeni",
    "ap_single_client": "Tek Müşteri Odaklı",
    // Hakkımızda CTA
    "ap_cta_sub": "SİZİ DİNLEMEK İÇİN BURADAYIZ",
    "ap_cta_title": "Saçınızı Birlikte Planlayalım",
    "ap_cta_desc": "Saç durumunuzu değerlendirmek, uygun seansı seçmek ve merak ettiklerinizi sormak için hemen bizimle iletişime geçin.",
    "ap_cta_consult": "WhatsApp Danışma",

    // WhatsApp Default Templates
    "wa_booking_msg": "Merhaba, Locca Hair Studio için randevu almak istiyorum."
  },

  en: {
    // Localized Reels
    "reel_1_badge": "Micro Extensions",
    "reel_1_cat": "Live Session",
    "reel_1_title": "Ultra Natural Micro Extensions Session",
    "reel_1_num": "01 • Micro Extensions",
    "reel_2_badge": "Crystal Blonde",
    "reel_2_cat": "Signature Shade",
    "reel_2_title": "Locca Blonde & Crystal Shimmer",
    "reel_2_num": "02 • Ice Blonde",
    "reel_3_badge": "Highlights",
    "reel_3_cat": "Precision Lifting",
    "reel_3_title": "Gradual Highlights & Wavy Finish",
    "reel_3_num": "03 • Highlights",
    "reel_4_badge": "Cut & Color",
    "reel_4_cat": "Studio Design",
    "reel_4_title": "Bespoke Silhouette & Vibrant Texture",
    "reel_4_num": "04 • Precision Cut",
    "reel_5_badge": "Bright Blonde",
    "reel_5_cat": "Lifting & Toning",
    "reel_5_title": "Bright Highlights & Ombre",
    "reel_5_num": "05 • Bright Blonde",
    "reel_6_badge": "Studio Signature",
    "reel_6_cat": "Atmosphere",
    "reel_6_title": "Locca Hair Studio Experience",
    "reel_6_num": "06 • Studio",
    "reel_7_badge": "Final Look",
    "reel_7_cat": "Flawless Flow",
    "reel_7_title": "Signature Locca Hair Movement & Finish",
    "reel_7_num": "07 • Final Touch",
    // Localized Reviews
    "time_1m_ago": "1 month ago",
    "time_2m_ago": "2 months ago",
    "time_3m_ago": "3 months ago",
    "rev_1_text": "\"I have entrusted my hair and extensions here with total peace of mind for years. The micro extension technique is performed so professionally that I feel neither weight nor headache. It blends so seamlessly with my own hair that most people don't even realize it's extensions. The color result is always exact with zero surprises. Meticulous, highly skilled, and truly experienced. Despite this premium quality, the pricing remains honest and modest. A salon I can wholeheartedly recommend. 🌸\"",
    "rev_1_reply": "\"Enjoy your hair in health! Your satisfaction brings us immense joy 🙏🏼😊\"",
    "rev_1_role": "Posture Specialist & Pilates Instructor",
    "rev_2_text": "\"Due to health challenges I had lost a large part of my hair, which made me genuinely deeply unhappy. Thanks to Yunus, I feel completely like my old confident self again. The hair extensions he crafted look incredibly natural and undetectable.\"",
    "rev_2_reply": "\"We are deeply touched by your kind words, enjoy your hair in good days 🙏🏼\"",
    "rev_2_role": "Micro Extensions & Transformation",
    "rev_3_text": "\"I had ombre done today and the dedication, patience, and effort they put in is beyond words. A truly professional salon that delivers on every promise 🌸 Friendly, welcoming team 💐 This is now my permanent hair studio in Manavgat 🙏\"",
    "rev_3_reply": "\"Your kind feedback means the world to us! Enjoy your gorgeous hair, see you soon 🙏🏼😊\"",
    "rev_3_role": "Ombre & Bespoke Coloring",
    "rev_4_text": "\"I've been visiting for hair coloring for nearly 5 years, done it 3 times, completely thrilled each time. They create the most delicate, sun-kissed natural tones without straining the hair. Equal to high-end luxury salons in Istanbul. Thank you for your care and artistry!\"",
    "rev_4_reply": "\"Thank you so much! Always a pleasure to welcome you back 🙏🏼😊\"",
    "rev_4_role": "Natural Babylights (5-Year Client)",
    "rev_5_text": "\"I hadn't treated my hair for almost 2 years, it had grown long and brittle. With their keratin therapy and precision haircut, my hair transformed completely into pure silk softness. I initially hesitated, but trusted the reviews. Totally delighted, highly recommended :)\"",
    "rev_5_reply": "\"We are delighted to hear this! Wishing you wonderful days ahead, see you again 🙏🏼😊\"",
    "rev_5_role": "Keratin Therapy & Haircut",
    "rev_6_text": "\"A salon that genuinely loves their craft, and the result is simply magnificent. The balance of color and precision cut made me truly glow 😊 Found them on Google and could not be happier. The right address for anyone visiting Antalya!\"",
    "rev_6_reply": "\"Enjoy your stunning hair, looking forward to your next visit 🙏🏼😊\"",
    "rev_6_role": "Hair Color & Precision Cut",
    "rev_7_text": "\"My experience at Loca Kuaför far exceeded my expectations. From the first moment, the warm, attentive, and highly professional approach made me feel totally comfortable. They listened carefully to what I wanted and created the most elegant result.\"",
    "rev_7_reply": "\"Thank you so much for your wonderful review! It was a true pleasure, enjoy in health 🙏🏼🙏🏼😊\"",
    "rev_7_role": "Consultation & Hair Styling",
    "rev_8_text": "\"Top quality service... All staff are friendly and genuinely caring. My hair is quite fine and I've been getting micro extensions with Furkan for years. He selects the ideal matching hair quality and applies it with immaculate precision.\"",
    "rev_8_reply": "\"Your loyalty and satisfaction bring us great happiness, warmest regards 🙏🏼😊\"",
    "rev_8_role": "Micro Extensions (Furkan)",
    "rev_9_text": "\"I initially came for a haircut and was so impressed by the professional service that I returned for manicure. They prioritize hygiene and cleanliness above all. A meticulous, smiling, high-standard team. A salon I will now visit regularly.\"",
    "rev_9_reply": "\"Thank you so much! We are thrilled by your satisfaction, looking forward to welcoming you again 🙏🏼😊\"",
    "rev_9_role": "Haircut, Manicure & Hygiene",
    "rev_10_text": "\"Today was my very first visit and I was truly blown away. Every single person on the team was amazingly smiling, attentive, and sincere. They listened to every detail and produced a result even more gorgeous than what I had dreamed. You can feel how much they love their work. Absolutely coming back ❤️\"",
    "rev_10_reply": "\"Your kind feedback makes us so very proud! Enjoy your new look, until next time 🙏🏼😊\"",
    "rev_10_role": "Bespoke Hair Experience & Care",
    // Navigation
    "nav_home": "Home",
    "nav_services": "Services",
    "nav_about": "About",
    "nav_reviews": "Reviews",
    "nav_faq": "FAQ",
    "btn_book": "Book Appointment",
    "btn_whatsapp_consult": "WhatsApp Inquiry",
    "floating_wa": "WhatsApp Booking",

    // Hero Section
    "hero_subtitle": "YOUR SIGNATURE",
    "hero_title": "Natural Hair Design & Extensions",
    "hero_quote": "\"Micro hair extensions and bespoke coloring artistry, tailored to your facial anatomy without compromising hair health.\"",
    "hero_btn_services": "Services",
    "chip_mikro": "Micro Extensions",
    "chip_sombre": "Ice Blonde",
    "chip_info": "Explore & Book →",
    "hero_card_mikro_title": "MICRO EXTENSIONS",
    "hero_card_mikro_desc": "Weightless, seamless extensions blended with 100% natural hair.",
    "hero_card_sombre_title": "OMBRE & SOMBRE",
    "hero_card_sombre_desc": "Gentle transitions to radiant blonde tones while preserving hair vitality.",

    // Bento / Signature Transformations
    "sec_signature_sub": "MASTERFULLY CURATED",
    "sec_signature_title": "Signature Transformations",
    "bento_1_title": "Ultra Invisible Micro Hair Extensions",
    "bento_1_badge": "Nano Technology",
    "bento_2_title": "Ice Blonde & Crystal Cool Sombre",
    "bento_2_badge": "Gradual Lightening",
    "bento_3_title": "Bridal Hair & Event Styling",
    "bento_3_badge": "Elegant & Long-Lasting",
    "bento_4_title": "Natural Brunette & Babylights",
    "bento_4_badge": "Natural Tones",
    "bento_examine": "View Details",

    // Philosophy / Studio Section
    "sec_philosophy_sub": "PREMIER HAIR STUDIO IN MANAVGAT",
    "sec_philosophy_title": "LOCCA Hair Studio",
    "sec_philosophy_desc": "\"Located in Aşağı Hisar, we offer warm and professional bespoke care in our dedicated studio. We are here to extend your hair gently, color in natural tones, and give your hair the luxury care it deserves.\"",
    "btn_about_locca": "ABOUT LOCCA SALON",

    // 4 Main Services Grid
    "sec_services_sub": "EXCLUSIVE TOUCHES",
    "sec_services_title": "Our Specialties",
    "srv_1_title": "MICRO EXTENSIONS",
    "srv_1_desc": "Undetectable nano-capsules and natural, voluminous density",
    "srv_2_title": "ICE BLONDE & SOMBRE",
    "srv_2_desc": "Damage-free gradual lifting and luminous cool blonde tones",
    "srv_3_title": "NATURAL BABYLIGHTS",
    "srv_3_desc": "Subtle, sun-kissed delicate babylight transitions",
    "srv_4_title": "KERATIN THERAPY",
    "srv_4_desc": "Keratin botox and mirror-shine deep conditioning treatment",

    // Reviews Section
    "sec_reviews_sub": "AUTHENTIC EXPERIENCES",
    "sec_reviews_title": "Client Reviews",
    "reviews_rating_note": "370+ verified guest reviews on Google",
    "review_verified": "Verified",
    "review_owner_reply": "Owner's Response",

    // LOCCA Ritüeli (3 Steps)
    "ritual_sub": "HOW WE WORK",
    "ritual_title": "3 Steps to Perfection",
    "ritual_1_title": "HAIR ANALYSIS & CONSULTATION",
    "ritual_1_desc": "\"Custom planning based on your facial anatomy, hair density, and previous color history.\"",
    "ritual_2_title": "PROTECTIVE & METICULOUS APPLICATION",
    "ritual_2_desc": "\"Bond-preserving lighteners and undetectable micro-capsule technology.\"",
    "ritual_3_title": "SIGNATURE FINISH & AFTERCARE",
    "ritual_3_desc": "\"Silky smooth hair that holds its form for months, plus at-home care guidance.\"",

    // Instagram Reels Section
    "reels_live_badge": "Live Studio Sessions",
    "reels_sub": "LIVE TRANSFORMATIONS & REELS",
    "reels_title": "LOCCA on Instagram",
    "reels_desc": "@yunus_soner_loca_hairdesing • Swipe to explore our live studio sessions, micro extension applications and crystal blonde transformations.",
    "reels_more_btn": "More Reels on Instagram",
    "reels_mute_off": "Sound Off",
    "reels_mute_on": "Sound On",

    // FAQ Section
    "sec_faq_sub": "FREQUENTLY ASKED",
    "sec_faq_title": "Frequently Asked Questions",
    "sec_faq_desc": "Frequently asked questions about services, hair analysis, and appointment booking at LOCCA salon.",
    "faq_q1": "Will micro extensions damage my natural hair and how long do they last?",
    "faq_a1": "\"No, absolutely not. Our Italian nano-keratin capsules add no excessive weight and allow your hair to breathe naturally. Depending on your hair growth rate, they can be worn comfortably for 3 to 4 months.\"",
    "faq_q2": "Will my hair experience damage during lightening and blonde transformations?",
    "faq_a2": "\"Never. Instead of harsh single-session lifting, we use bond-protecting solutions and a gradual lightening protocol. We preserve your hair's natural elasticity while achieving radiant, crystal cool blonde tones.\"",
    "faq_q3": "Do you perform a hair analysis and consultation before the service?",
    "faq_a3": "\"Yes, we conduct an in-depth hair consultation tailored to your facial anatomy and treatment history for every guest. We assess previous color history and condition to agree upon the most transparent and optimal plan.\"",
    "faq_q4": "Should I wash my hair before arriving for my appointment?",
    "faq_a4": "\"For coloring and lightening services, we recommend not washing your hair on the appointment day so the natural scalp oils protect the skin. For extensions and styling, professional purifying washes are performed in our salon.\"",

    // CTA / Footer
    "cta_sub": "PLAN YOUR VISIT",
    "cta_title": "Take the First Step Towards Your Dream Hair",
    "cta_desc": "Contact Yunus Soner and our specialist team directly via WhatsApp to design your bespoke hair transformation.",
    "footer_address_title": "Address & Contact",
    "footer_directions": "Get Directions",
    "footer_hours_title": "Working Hours",
    "footer_hours_desc": "Tuesday - Sunday (Closed on Monday)<br>10:00 - 19:30 (By Appointment)",
    "footer_satisfaction_title": "Client Satisfaction",
    "footer_reviews_count": "(374 Google Reviews)",
    "footer_rights": "© LOCCA Hair Studio. All rights reserved.",
    
    // Modal
    "modal_expertise_label": "LOCCA Hair Studio • Signature Specialty",
    "modal_advantages": "Key Advantages",
    "modal_btn_book": "Book This Service",
    "modal_notice": "* Your booking inquiry will be sent directly to our +90 507 199 34 24 WhatsApp line.",

    // ===== HIZMETLER PAGE =====
    "hp_sub": "WITH EXPERTISE AND GENUINE CARE",
    "hp_title": "Our Specialties & Techniques",
    "hp_desc": "Every woman's hair anatomy, density, and color history is unique. At LOCCA studio, we provide bespoke hair architecture instead of standard formulas.",
    "hp_price_note": "Our prices are determined in person at the salon based on your hair type and the required volume.",
    "hp_s1_label": "01 / SIGNATURE SPECIALTY",
    "hp_s1_badge": "Signature Specialty",
    "hp_s1_title": "Ultra Invisible Micro Hair Extensions",
    "hp_s1_how_title": "How Do We Do It?",
    "hp_s1_how_desc": "We select 100% natural hair that best matches your hair's texture, density, and color. Using Italian nano keratin capsules, we apply ultra-fine strands at your roots. The connection points are so small that they remain invisible even when you tie your hair up in a ponytail.",
    "hp_s1_approach_title": "The Locca Approach",
    "hp_s1_approach_desc": "Unlike heavy extensions that pull and damage hair, we ensure your natural hair breathes and grows healthily. We use specialized solutions during removal that cause zero damage to your hair.",
    "hp_book_this": "Book This Service",
    "hp_s2_label": "02 / CUSTOM COLORING",
    "hp_s2_badge": "Crystal Cool Tones",
    "hp_s2_title": "Ice Blonde & Sombre",
    "hp_s2_how_desc": "Instead of burning your hair open in a single session, we apply a gradual lightening protocol. Using bond builder care lighteners, we preserve the elasticity of your hair strands. We achieve seamless, natural-transition blonde tones from root to tip.",
    "hp_s2_approach_desc": "Making blonde hair is easy, but lightening without burning and losing vibrancy requires mastery. We prepare custom formulas based on each client's treatment history for non-brassy, silky, crystal cool tones.",
    "hp_s3_label": "03 / NATURAL ILLUMINATION",
    "hp_s3_badge": "Effortless Naturalness",
    "hp_s3_title": "Natural Brunette & Babylights",
    "hp_s3_how_desc": "Without disrupting the hair's own base color and natural essence, we introduce delicate, sun-kissed micro-highlights (babylights). Rather than rigid streaks, our subtle strands blend harmoniously with your natural movement.",
    "hp_s3_approach_desc": "We design low-maintenance color palettes that require no urgent root touch-ups and look exceptionally organic as your hair grows.",
    "hp_s4_label": "04 / DEEP REPAIR & CARE",
    "hp_s4_badge": "Silky Restoration",
    "hp_s4_title": "Hair Therapy & Keratin Botox",
    "hp_s4_how_desc": "We infuse hair damaged by heat or chemicals with concentrated keratin and essential amino acids. By sealing the cuticles, we achieve a smooth, anti-frizz, mirror-reflective silky texture.",
    "hp_s4_approach_desc": "Without artificially flattening hair like permanent straighteners, we preserve natural wave movement while imparting lush health, body, and radiant gloss.",
    "hp_cta_sub": "YOUR HAIR STORY BEGINS HERE",
    "hp_cta_title": "Consult Us for Your Dream Hair",
    "hp_cta_desc": "Schedule a personalized consultation with salon owner Yunus Soner in person or over the phone to define your ideal session.",
    "hp_cta_book": "Book Appointment Now",
    "hp_cta_consult": "Inquire via WhatsApp",

    // ===== HAKKIMIZDA PAGE =====
    "ap_sub": "OUR STORY AND PHILOSOPHY",
    "ap_title": "Yunus Soner & LOCCA Salon",
    "ap_location_label": "MANAVGAT AŞAĞI HİSAR",
    "ap_who_title": "Who We Are & How Long We've Been Here",
    "ap_who_p1": "\"With years of hairdressing experience in Manavgat Aşağı Hisar, we work with a philosophy that places women's hair health at the center. Locca Salon is a hair studio dedicated to ensuring every client leaves the chair happy and confident.\"",
    "ap_who_p2": "Breaking away from cliché, assembly-line salon culture, we offer a service that gives each guest dedicated time, listens to their hair's anatomy, and maintains warm, genuine communication.",
    "ap_rating": "5.0 Rating",
    "ap_reviews_text": "370+ Verified Google Reviews",
    "ap_location_sub": "LOCATION & DIRECTIONS",
    "ap_location_title": "STUDIO ADDRESS & DIRECTIONS",
    "ap_parking": "Our salon is located in central Manavgat, Aşağı Hisar. Free parking is available.",
    "ap_maps_btn": "📍 OPEN IN GOOGLE MAPS →",
    "ap_expertise_label": "EXPERTISE & PRECISION",
    "ap_expertise_title": "What Do We Do?",
    "ap_expertise_desc": "\"We specialize in invisible micro extensions, damage-free gradual lightening (ice blonde, ombre) techniques, and intensive keratin botox treatments. Instead of rushed, mass-market treatments, we offer a boutique service that dedicates time to every single strand.\"",
    "ap_trust_label": "HONEST & TRANSPARENT APPROACH",
    "ap_trust_title": "Our Trust Promise",
    "ap_trust_desc": "\"We never apply any chemical or low-quality extension to our clients that we wouldn't use on our own hair. Instead of quoting prices by rote over the phone, we assess your hair in the salon and provide the most honest and accurate plan. Our 370+ five-star Google reviews are a testament to this dedication.\"",
    "ap_personal_session": "Personalized Session Plan",
    "ap_single_client": "Single Client Focus",
    "ap_cta_sub": "WE ARE HERE TO LISTEN",
    "ap_cta_title": "Let's Plan Your Hair Together",
    "ap_cta_desc": "Contact us now to evaluate your hair condition, choose the right session, and ask any questions you may have.",
    "ap_cta_consult": "WhatsApp Consultation",

    // WhatsApp Default Templates
    "wa_booking_msg": "Hello, I would like to request an appointment at Locca Hair Studio."
  },

  de: {
    // Localized Reels
    "reel_1_badge": "Mikro-Extensions",
    "reel_1_cat": "Live-Sitzung",
    "reel_1_title": "Ultra-natürliche Mikro-Extensions-Sitzung",
    "reel_1_num": "01 • Mikro-Extensions",
    "reel_2_badge": "Kristallblond",
    "reel_2_cat": "Signatur-Farbton",
    "reel_2_title": "Locca Blond & Kristallglanz",
    "reel_2_num": "02 • Eisblond",
    "reel_3_badge": "Highlights",
    "reel_3_cat": "Sanfte Aufhellung",
    "reel_3_title": "Stufenweise Highlights & Wellen",
    "reel_3_num": "03 • Highlights",
    "reel_4_badge": "Schnitt & Farbe",
    "reel_4_cat": "Studio-Design",
    "reel_4_title": "Individuelle Form & Lebendige Textur",
    "reel_4_num": "04 • Präzisionsschnitt",
    "reel_5_badge": "Helles Blond",
    "reel_5_cat": "Aufhellung & Tönung",
    "reel_5_title": "Strahlende Highlights & Ombre",
    "reel_5_num": "05 • Helles Blond",
    "reel_6_badge": "Studio-Signatur",
    "reel_6_cat": "Atmosphäre",
    "reel_6_title": "Das Locca Hair Studio Erlebnis",
    "reel_6_num": "06 • Studio",
    "reel_7_badge": "Finaler Look",
    "reel_7_cat": "Perfekter Schwung",
    "reel_7_title": "Locca Signatur-Haarbewegung & Finish",
    "reel_7_num": "07 • Finaler Schliff",
    // Localized Reviews
    "time_1m_ago": "vor 1 Monat",
    "time_2m_ago": "vor 2 Monaten",
    "time_3m_ago": "vor 3 Monaten",
    "rev_1_text": "\"Seit Jahren vertraue ich meine Haare und Extensions vollkommen beruhigt diesem Salon an. Die Haarverlängerung wird so professionell gearbeitet, dass ich weder Gewicht noch Kopfschmerzen spüre. Sie verschmilzt so natürlich mit meinem Eigenhaar, dass fast niemand merkt, dass es Extensions sind. Auch bei der Farbe gibt es niemals böse Überraschungen – das Ergebnis ist exakt wie besprochen. Präzise, erfahren und meisterhaft. Trotz dieser Spitzenqualität bleiben die Preise fair und bodenständig. Ein Salon, den ich von Herzen empfehlen kann. 🌸\"",
    "rev_1_reply": "\"Viel Freude mit Ihrem Haar! Ihre Zufriedenheit bedeutet unserem Team alles 🙏🏼😊\"",
    "rev_1_role": "Haltungsexpertin & Pilates-Trainerin",
    "rev_2_text": "\"Aus gesundheitlichen Gründen hatte ich einen Großteil meiner Haare verloren, was mich zutiefst unglücklich machte. Dank Yunus fühle ich mich wieder ganz wie mein früheres Ich. Die Extensions, die er kreiert hat, sehen unglaublich natürlich aus und sind völlig unsichtbar.\"",
    "rev_2_reply": "\"Ihre Worte berühren uns sehr. Wir wünschen Ihnen von Herzen das Beste mit Ihrem neuen Haar 🙏🏼\"",
    "rev_2_role": "Mikro-Extensions & Transformation",
    "rev_3_text": "\"Ich habe heute ein Ombre machen lassen und die Geduld, Sorgfalt und Hingabe waren einfach unbeschreiblich. Ein hochprofessioneller Salon, der sein Handwerk versteht 🌸 Ein herzliches, freundliches Team 💐 Ab jetzt ist dies meine feste Adresse in Manavgat 🙏\"",
    "rev_3_reply": "\"Vielen Dank für Ihre wunderbare Bewertung! Bis zum nächsten Mal in bester Gesundheit 🙏🏼😊\"",
    "rev_3_role": "Ombre & Spezialfärbung",
    "rev_4_text": "\"Seit fast 5 Jahren komme ich zum Haarefärben hierher, schon 3 Mal gemacht und jedes Mal restlos begeistert. Ich lasse feine, natürliche Highlights machen – exakt in den gewünschten kühlen Nuancen, ohne das Haar zu strapazieren. Absolut auf dem Niveau hochpreisiger Luxussalons in Istanbul. Vielen Dank für Ihre Mühe und Herzlichkeit!\"",
    "rev_4_reply": "\"Herzlichen Dank! Es ist uns immer eine Ehre, Sie bei uns zu begrüßen 🙏🏼😊\"",
    "rev_4_role": "Natürliche Highlights (5 Jahre Kundin)",
    "rev_5_text": "\"Seit fast 2 Jahren konnte ich meine Haare kaum pflegen, sie waren sehr lang und spröde geworden. Durch die Keratinbehandlung und den Präzisionshaarschnitt hat sich mein Haar komplett verwandelt – seidig weich wie pure Seide. Ich war anfangs skeptisch, aber die Google-Bewertungen haben recht behalten. Äußerst zufrieden, absolute Empfehlung :)\"",
    "rev_5_reply": "\"Ihre Zufriedenheit erfüllt uns mit großer Freude! Bis zum nächsten Besuch 🙏🏼😊\"",
    "rev_5_role": "Keratin-Therapie & Haarschnitt",
    "rev_6_text": "\"Ein Friseur, der seine Arbeit mit echter Leidenschaft ausübt – das Ergebnis ist einfach fantastisch. Die Harmonie aus Farbe und Schnitt hat mich förmlich strahlen lassen 😊 Ich bin über Google auf den Salon gestoßen und begeistert. Für jeden, der in Antalya ist, die absolut richtige Adresse!\"",
    "rev_6_reply": "\"Viel Freude beim Tragen, wir freuen uns schon auf Ihren nächsten Besuch 🙏🏼😊\"",
    "rev_6_role": "Haarfarbe & Präzisionsschnitt",
    "rev_7_text": "\"Meine Erfahrung bei Loca Kuaför hat meine Erwartungen weit übertroffen. Vom ersten Augenblick an sorgte die herzliche, aufmerksame und professionelle Art dafür, dass ich mich vollkommen wohl fühlte. Meine Wünsche wurden genauestens angehört und in ein edles, harmonisches Ergebnis umgesetzt.\"",
    "rev_7_reply": "\"Vielen Dank für diese wunderbaren Worte! Wir freuen uns sehr über Ihre Zufriedenheit 🙏🏼🙏🏼😊\"",
    "rev_7_role": "Beratung & Haardesign",
    "rev_8_text": "\"Erstklassiger Service... Das gesamte Team ist aufmerksam und freundlich. Mein Haar ist sehr fein und ich lasse mir seit Jahren bei Furkan Mikro-Extensions machen. Er wählt stets die perfekte Haarqualität passend zu meinem Haar aus und setzt sie mit größter Sorgfalt ein.\"",
    "rev_8_reply": "\"Ihre Zufriedenheit und Treue freuen uns sehr, herzliche Grüße 🙏🏼😊\"",
    "rev_8_role": "Mikro-Extensions (Furkan)",
    "rev_9_text": "\"Ich kam zuerst nur zum Haareschneiden und war vom professionellen Service so begeistert, dass ich für die Maniküre wiederkam. Auf Hygiene und Sauberkeit wird hier extrem geachtet. Ein eingespieltes, freundliches und erstklassiges Team. Ab jetzt komme ich regelmäßig!\"",
    "rev_9_reply": "\"Vielen herzlichen Dank! Es ist uns eine Freude, Sie bald wieder bei uns begrüßen zu dürfen 🙏🏼😊\"",
    "rev_9_role": "Schnitt, Maniküre & Hygiene",
    "rev_10_text": "\"Heute war mein allererster Besuch und ich bin restlos begeistert. Jeder Mitarbeiter war unheimlich freundlich, aufmerksam und herzlich. Sie haben sich Zeit für mich genommen und das Ergebnis ist schöner geworden, als ich es mir erträumt hatte. Man spürt sofort die Hingabe zum Handwerk. Ich komme definitiv wieder ❤️\"",
    "rev_10_reply": "\"Wir danken Ihnen von Herzen für Ihr Vertrauen und freuen uns auf das nächste Wiedersehen 🙏🏼😊\"",
    "rev_10_role": "Exklusives Haardesign & Pflege",
    // Navigation
    "nav_home": "Startseite",
    "nav_services": "Leistungen",
    "nav_about": "Über uns",
    "nav_reviews": "Bewertungen",
    "nav_faq": "FAQ",
    "btn_book": "Termin buchen",
    "btn_whatsapp_consult": "WhatsApp Beratung",
    "floating_wa": "WhatsApp Termin",

    // Hero Section
    "hero_subtitle": "IHRE SIGNATUR",
    "hero_title": "Natürliches Haardesign & Extensions",
    "hero_quote": "\"Haarschonende Mikroring-Extensions und Farbkunst, perfekt abgestimmt auf Ihre Gesichtsanatomie.\"",
    "hero_btn_services": "Leistungen",
    "chip_mikro": "Mikro Extensions",
    "chip_sombre": "Eisblond",
    "chip_info": "Ansehen & Buchen →",
    "hero_card_mikro_title": "MIKRO EXTENSIONS",
    "hero_card_mikro_desc": "Federleichte, unsichtbare Extensions mit 100% natürlichem Echthaar.",
    "hero_card_sombre_title": "OMBRE & SOMBRE",
    "hero_card_sombre_desc": "Sanfte Farbverläufe zu strahlenden Blondtönen unter Erhalt der Haargesundheit.",

    // Bento
    "sec_signature_sub": "MEISTERHAFT KREIERT",
    "sec_signature_title": "Signatur Verwandlungen",
    "bento_1_title": "Ultra-unsichtbare Mikro Haar-Extensions",
    "bento_1_badge": "Nano Technologie",
    "bento_2_title": "Eisblond & Kristallkühles Sombre",
    "bento_2_badge": "Stufenlose Aufhellung",
    "bento_3_title": "Brautfrisuren & Event-Styling",
    "bento_3_badge": "Elegant & Langlebig",
    "bento_4_title": "Natürliches Braun & Babylights",
    "bento_4_badge": "Natürliche Töne",
    "bento_examine": "Details ansehen",

    // Philosophy
    "sec_philosophy_sub": "ERSTKLASSIGE HAAROASE IN MANAVGAT",
    "sec_philosophy_title": "LOCCA Hair Studio",
    "sec_philosophy_desc": "\"In Aşağı Hisar bieten wir Ihnen in unserem Salon eine herzliche und professionelle Betreuung. Wir verlängern Ihr Haar schonend, färben in natürlichen Tönen und schenken Ihnen die Aufmerksamkeit, die Sie verdienen.\"",
    "btn_about_locca": "ÜBER LOCCA KUAFÖR",

    // Services Grid
    "sec_services_sub": "EXKLUSIVE AKZENTE",
    "sec_services_title": "Unsere Spezialgebiete",
    "srv_1_title": "MIKRO EXTENSIONS",
    "srv_1_desc": "Kaum spürbare Nano-Kapseln und natürliches, volles Volumen",
    "srv_2_title": "EISBLOND & SOMBRE",
    "srv_2_desc": "Haarschonende Aufhellung und langanhaltend kühle Nuancen",
    "srv_3_title": "NATÜRLICHE HIGHLIGHTS",
    "srv_3_desc": "Wie von der Sonne geküsste, feine Babylights-Reflexe",
    "srv_4_title": "KERATIN THERAPIE",
    "srv_4_desc": "Keratin Botox und spiegelglänzende Tiefenpflege",

    // Reviews
    "sec_reviews_sub": "ECHTE ERFAHRUNGEN",
    "sec_reviews_title": "Kundenbewertungen",
    "reviews_rating_note": "Über 370 verifizierte Kundenstimmen auf Google",
    "review_verified": "Verifiziert",
    "review_owner_reply": "Antwort des Inhabers",

    // Ritual
    "ritual_sub": "WIE WIR ARBEITEN",
    "ritual_title": "3 Schritte zur Perfektion",
    "ritual_1_title": "HAARANALYSE & BERATUNG",
    "ritual_1_desc": "\"Individuelle Planung basierend auf Ihrer Gesichtsform, Haardichte und Farbhistorie.\"",
    "ritual_2_title": "SCHONENDE & SORGFÄLTIGE ANWENDUNG",
    "ritual_2_desc": "\"Bindungsschonende Aufheller und kaum spürbare Mikro-Kapseltechnologie.\"",
    "ritual_3_title": "SIGNATUR-FINISH & NACHSORGE",
    "ritual_3_desc": "\"Monatelang seidig glattes Haar und professionelle Pflegehinweise für zu Hause.\"",

    // Reels
    "reels_live_badge": "Live Studio-Aufnahmen",
    "reels_sub": "LIVE VERWANDLUNGEN & REELS",
    "reels_title": "LOCCA auf Instagram",
    "reels_desc": "@yunus_soner_loca_hairdesing • Entdecken Sie unsere Live-Studio-Sitzungen, Mikro-Extensions-Anwendungen und kristallblonde Verwandlungen.",
    "reels_more_btn": "Mehr Reels auf Instagram",
    "reels_mute_off": "Ton aus",
    "reels_mute_on": "Ton an",

    // FAQ
    "sec_faq_sub": "OFT GEFRAGT",
    "sec_faq_title": "Häufig Gestellte Fragen",
    "sec_faq_desc": "Häufig gestellte Fragen zu Services, Haaranalyse und Terminvereinbarung im LOCCA Salon.",
    "faq_q1": "Schaden Mikro-Extensions meinem Eigenhaar und wie lange halten sie?",
    "faq_a1": "\"Nein, keineswegs. Unsere italienischen Nano-Keratin-Kapseln belasten das Haar nicht und lassen es natürlich atmen. Je nach individuellem Haarwachstum können sie 3 bis 4 Monate lang vollkommen beschwerdefrei getragen werden.\"",
    "faq_q2": "Wird mein Haar durch Aufhellung und Blondierung strapaziert?",
    "faq_a2": "\"Niemals. Statt das Haar in einer einzigen Sitzung aggressiv zu strapazieren, setzen wir auf bindungsschonende Pflegeaufheller und stufenweise Aufhellungsprotokolle. So bleibt die natürliche Elastizität für strahlendes Kristallblond voll erhalten.\"",
    "faq_q3": "Führen Sie vor der Behandlung eine Haaranalyse und persönliche Beratung durch?",
    "faq_a3": "\"Ja, vor jedem Eingriff führen wir eine ausführliche Haaranalyse abgestimmt auf Ihre Gesichtsform und Farbhistorie durch. Gemeinsam erstellen wir den ehrlichsten und optimalen Behandlungsplan für Ihr Traumhaar.\"",
    "faq_q4": "Sollte ich meine Haare vor dem Termin waschen?",
    "faq_a4": "\"Insbesondere vor Farb- und Aufhellungsbehandlungen empfehlen wir, das Haar am Termintag nicht frisch zu waschen, damit der natürliche Schutzfilm der Kopfhaut erhalten bleibt. Für Extensions und Styling führen wir eine professionelle Tiefenreinigung im Salon durch.\"",

    // CTA / Footer
    "cta_sub": "planen sie ihren besuch",
    "cta_title": "DER ERSTE SCHRITT ZU IHREM TRAUMHAAR",
    "cta_desc": "Kontaktieren Sie Yunus Soner und unser Experten-Team direkt per WhatsApp für eine persönliche Beratung.",
    "footer_address_title": "Adresse & Kontakt",
    "footer_directions": "Route berechnen",
    "footer_hours_title": "Öffnungszeiten",
    "footer_hours_desc": "Dienstag - Sonntag (Montag geschlossen)<br>10:00 - 19:30 (Nach Termin)",
    "footer_satisfaction_title": "Kundenzufriedenheit",
    "footer_reviews_count": "(374 Google Bewertungen)",
    "footer_rights": "© LOCCA Hair Studio. Alle Rechte vorbehalten.",
    "modal_expertise_label": "LOCCA Hair Studio • Signatur Spezialität",
    "modal_advantages": "Besondere Vorteile",
    "modal_btn_book": "Diesen Service anfragen",
    "modal_notice": "* Ihre Terminanfrage wird direkt an unsere WhatsApp-Nummer +90 507 199 34 24 gesendet.",

    // Hizmetler Page
    "hp_sub": "mit Expertise und aufrichtiger Sorgfalt",
    "hp_title": "UNSERE FACHGEBIETE & TECHNIKEN",
    "hp_desc": "Jede Frau hat eine einzigartige Haaranatomie, -dichte und Farbhistorie. Im LOCCA Studio bieten wir maßgeschneiderte Haararchitektur statt Standardformeln.",
    "hp_price_note": "Unsere Preise werden je nach Haartyp und benötigtem Volumen persönlich im Salon festgelegt.",
    "hp_s1_label": "01 / SIGNATUR SPEZIALITÄT",
    "hp_s1_badge": "Signatur Spezialität",
    "hp_s1_title": "Ultra-unsichtbare Mikro Haarverlängerung",
    "hp_s1_how_title": "Wie machen wir es?",
    "hp_s1_how_desc": "Wir wählen 100% Naturhaar aus, das perfekt zu Ihrer Haarstruktur, -dichte und -farbe passt. Mit italienischen Nano-Keratin-Kapseln bringen wir ultrafeine Strähnen an Ihren Haarwurzeln an. Die Verbindungspunkte sind so klein, dass sie selbst bei Hochsteckfrisuren unsichtbar bleiben.",
    "hp_s1_approach_title": "Der Locca Ansatz",
    "hp_s1_approach_desc": "Im Gegensatz zu schweren Extensions, die das Haar ziehen und schädigen, sorgen wir dafür, dass Ihr Naturhaar atmen und gesund wachsen kann. Bei der Entfernung verwenden wir spezielle Lösungen, die Ihr Haar nicht beschädigen.",
    "hp_book_this": "Diesen Service buchen",
    "hp_s2_label": "02 / INDIVIDUELLE FÄRBUNG",
    "hp_s2_badge": "Kristallkühle Töne",
    "hp_s2_title": "Eisblond & Sombre",
    "hp_s2_how_desc": "Anstatt das Haar in einer Sitzung zu verbrennen, wenden wir ein stufenweises Aufhellungsprotokoll an. Mit Bond-Builder-Pflegeprodukten bewahren wir die Elastizität Ihrer Haarsträhnen. Wir erzielen nahtlose, natürlich verlaufende Blondtöne von der Wurzel bis zur Spitze.",
    "hp_s2_approach_desc": "Blondes Haar zu machen ist einfach, aber ohne Verbrennung und Vitalitätsverlust aufzuhellen erfordert Meisterschaft. Für nicht-orangefarbene, seidig-kristallkühle Töne bereiten wir für jedes Haar eine individuelle Formel vor.",
    "hp_s3_label": "03 / NATÜRLICHE AUFHELLUNG",
    "hp_s3_badge": "Mühelose Natürlichkeit",
    "hp_s3_title": "Natürliches Braun & Babylights",
    "hp_s3_how_desc": "Ohne die natürliche Basis Ihres Haares zu stören, verleihen wir zarte, sonnengeküsste Highlights. Anstelle markanter Foliensträhnen verwenden wir Micro-Strähnen (Babylights), die sich nahtlos in den natürlichen Haarfluss einfügen.",
    "hp_s3_approach_desc": "Wir gestalten pflegeleichte Färbungen, die keinen Ansatz-Nachfärbebedarf haben und ihr natürliches Aussehen beim Herauswachsen beibehalten.",
    "hp_s4_label": "04 / TIEFENREPARATUR & PFLEGE",
    "hp_s4_badge": "Seidige Reparatur",
    "hp_s4_title": "Haartherapie & Keratin Botox",
    "hp_s4_how_desc": "Wir laden durch Hitze und Chemikalien geschädigtes, feuchtigkeitsarmes Haar mit Keratin und Aminosäuren auf. Durch Versiegelung der Schuppenschicht erzielen wir eine glatte, frizzfreie, lichtreflektierende seidige Textur.",
    "hp_s4_approach_desc": "Ohne das Haar künstlich zu glätten wie bei Dauerbehandlungen, stellen wir ein gesundes, volles und glänzendes Aussehen wieder her und bewahren die natürliche Bewegung und Welle Ihres Haares.",
    "hp_cta_sub": "IHRE HAARGESCHICHTE BEGINNT HIER",
    "hp_cta_title": "Beraten Sie sich mit uns für Ihr Traumhaar",
    "hp_cta_desc": "Um die beste Sitzung für Sie zu bestimmen, können Sie unseren Saloninhaber Yunus Soner persönlich oder telefonisch treffen.",
    "hp_cta_book": "Jetzt buchen",
    "hp_cta_consult": "Per WhatsApp beraten",

    // Hakkımızda Page
    "ap_sub": "UNSERE GESCHICHTE UND PHILOSOPHIE",
    "ap_title": "Yunus Soner & LOCCA Salon",
    "ap_location_label": "MANAVGAT AŞAĞI HİSAR",
    "ap_who_title": "Wer wir sind & wie lange wir hier sind",
    "ap_who_p1": "\"Mit langjähriger Friseur-Erfahrung in Manavgat Aşağı Hisar arbeiten wir mit einer Philosophie, die die Haargesundheit der Frau in den Mittelpunkt stellt. Locca Salon ist ein Haarstudio, das darauf abzielt, dass jede Kundin glücklich und selbstbewusst den Stuhl verlässt.\"",
    "ap_who_p2": "Wir brechen mit der klischeehaften Fließband-Salonkultur und bieten einen Service, der jedem Gast Zeit widmet, auf die Haaranatomie hört und eine warme, aufrichtige Kommunikation pflegt.",
    "ap_rating": "5.0 Bewertung",
    "ap_reviews_text": "370+ verifizierte Google Bewertungen",
    "ap_location_sub": "STANDORT & ANFAHRT",
    "ap_location_title": "STUDIO-ADRESSE & ANFAHRT",
    "ap_parking": "Unser Salon befindet sich im Zentrum von Manavgat, Aşağı Hisar. Kostenlose Parkplätze sind verfügbar.",
    "ap_maps_btn": "📍 IN GOOGLE MAPS ÖFFNEN →",
    "ap_expertise_label": "EXPERTISE & PRÄZISION",
    "ap_expertise_title": "Was machen wir?",
    "ap_expertise_desc": "\"Wir sind spezialisiert auf unsichtbare Mikro-Extensions, haarschonende stufenweise Aufhellung (Eisblond, Ombre) und intensive Keratin-Botox-Behandlungen. Statt schneller Massenbehandlungen bieten wir einen Boutique-Service, der jedem einzelnen Haar Zeit widmet.\"",
    "ap_trust_label": "EHRLICHER & TRANSPARENTER ANSATZ",
    "ap_trust_title": "Unser Vertrauensversprechen",
    "ap_trust_desc": "\"Wir verwenden keine Chemikalien oder minderwertige Extensions an unseren Kundinnen, die wir nicht auch an unserem eigenen Haar verwenden würden. Statt Preise am Telefon auswendig zu nennen, beurteilen wir Ihr Haar im Salon und erstellen den ehrlichsten und genauesten Plan. Unsere über 370 Fünf-Sterne-Google-Bewertungen sind ein Beweis dafür.\"",
    "ap_personal_session": "Personalisierter Sitzungsplan",
    "ap_single_client": "Ein-Kunden-Fokus",
    "ap_cta_sub": "WIR SIND HIER, UM ZUZUHÖREN",
    "ap_cta_title": "Lassen Sie uns Ihr Haar gemeinsam planen",
    "ap_cta_desc": "Kontaktieren Sie uns jetzt, um Ihren Haarzustand zu beurteilen, die richtige Sitzung zu wählen und alle Fragen zu stellen.",
    "ap_cta_consult": "WhatsApp Beratung",

    "wa_booking_msg": "Hallo, ich möchte gerne einen Termin im Locca Hair Studio vereinbaren."
  },

  ru: {
    // Localized Reels
    "reel_1_badge": "Микронаращивание",
    "reel_1_cat": "Живой сеанс",
    "reel_1_title": "Ультранатуральный сеанс микронаращивания",
    "reel_1_num": "01 • Микронаращивание",
    "reel_2_badge": "Кристальный блонд",
    "reel_2_cat": "Фирменный оттенок",
    "reel_2_title": "Блонд Locca и кристальное сияние",
    "reel_2_num": "02 • Ледяной блонд",
    "reel_3_badge": "Мелирование",
    "reel_3_cat": "Бережное осветление",
    "reel_3_title": "Постепенное мелирование и волны",
    "reel_3_num": "03 • Мелирование",
    "reel_4_badge": "Стрижка и цвет",
    "reel_4_cat": "Дизайн студии",
    "reel_4_title": "Индивидуальная форма и живая текстура",
    "reel_4_num": "04 • Точная стрижка",
    "reel_5_badge": "Яркий блонд",
    "reel_5_cat": "Осветление и тонирование",
    "reel_5_title": "Яркое мелирование и омбре",
    "reel_5_num": "05 • Яркий блонд",
    "reel_6_badge": "Почерк студии",
    "reel_6_cat": "Атмосфера",
    "reel_6_title": "Атмосфера салона Locca Hair Studio",
    "reel_6_num": "06 • Студия",
    "reel_7_badge": "Финальный образ",
    "reel_7_cat": "Безупречный поток",
    "reel_7_title": "Фирменное движение и завершение Locca",
    "reel_7_num": "07 • Финальный штрих",
    // Localized Reviews
    "time_1m_ago": "1 месяц назад",
    "time_2m_ago": "2 месяца назад",
    "time_3m_ago": "3 месяца назад",
    "rev_1_text": "\"Уже много лет со спокойной душой доверяю свои волосы и наращивание этому салону. Процедура микронаращивания выполняется настолько профессионально, что я не чувствую ни тяжести, ни дискомфорта. Волосы настолько естественно сливаются с моими, что окружающие даже не догадываются о наращивании. Результат окрашивания всегда в точности как договаривались. Мастер с колоссальным опытом и вниманием к деталям. При этом цены остаются абсолютно честными. Рекомендую от всей души! 🌸\"",
    "rev_1_reply": "\"Носите с удовольствием! Ваше доверие — наша главная награда 🙏🏼😊\"",
    "rev_1_role": "Специалист по осанке и тренер пилатеса",
    "rev_2_text": "\"Из-за проблем со здоровьем я потеряла большую часть волос, и это меня очень угнетало. Благодаря Юнусу я снова чувствую себя красивой и уверенной в себе. Наращивание выглядит невероятно естественно, капсулы совершенно незаметны.\"",
    "rev_2_reply": "\"Ваши слова согревают наши сердца! Носите с удовольствием и радостью 🙏🏼\"",
    "rev_2_role": "Микронаращивание и преображение",
    "rev_3_text": "\"Сегодня делала омбре, и то, с каким терпением, заботой и мастерством работали мастера, просто не передать словами. Настоящие профессионалы своего дела 🌸 Очень вежливый и душевный коллектив 💐 Теперь это мой единственный салон в Манавгате 🙏\"",
    "rev_3_reply": "\"Спасибо большое за теплый отзыв! Всегда рады видеть вас снова 🙏🏼😊\"",
    "rev_3_role": "Омбре и авторское окрашивание",
    "rev_4_text": "\"Хожу сюда на окрашивание уже почти 5 лет, делала 3 раза, и каждый раз в полном восторге. Делаю деликатные светлые блики — оттенки получаются кристально чистыми и без повреждения структуры волос. Уровень ничем не уступает премиальным салонам Стамбула. Спасибо за ваш труд!\"",
    "rev_4_reply": "\"Огромное спасибо за верность нашему салону! Ждём вас снова 🙏🏼😊\"",
    "rev_4_role": "Естественные блики (Клиент 5 лет)",
    "rev_5_text": "\"Почти 2 года не делала салонный уход, волосы отросли и стали сухими. После кератинового восстановления и стрижки волосы преобразились до неузнаваемости — стали мягкими как шелк. Пришла по отзывам и осталась в абсолютном восторге. Всем искренне советую :)\"",
    "rev_5_reply": "\"Мы искренне рады вашему преображению! До новых встреч 🙏🏼😊\"",
    "rev_5_role": "Кератиновый уход и стрижка",
    "rev_6_text": "\"Мастера, которые искренне любят свое ремесло, а результат превосходит все ожидания. Идеальный баланс цвета и формы стрижки заставил мои волосы сиять 😊 Нашла салон через Google и очень счастлива. Лучший салон для всех, кто приезжает в Анталью!\"",
    "rev_6_reply": "\"Носите с удовольствием, с радостью ждем вас снова 🙏🏼😊\"",
    "rev_6_role": "Цвет волос и точная стрижка",
    "rev_7_text": "\"Мой визит в Loca Kuaför превзошел все ожидания. С первых же секунд улыбчивый, внимательный и профессиональный подход помог расслабиться. Меня внимательно выслушали и подобрали наиболее изысканный и подходящий образ.\"",
    "rev_7_reply": "\"Благодарим за столь теплый отзыв! Для нас было огромным удовольствием работать с вами 🙏🏼🙏🏼😊\"",
    "rev_7_role": "Консультация и дизайн волос",
    "rev_8_text": "\"Качественный и надежный сервис... Все сотрудники приветливы и внимательны. У меня тонкие волосы, и я уже много лет делаю микронаращивание у Фуркана. Он подбирает безупречное качество волос и крепит их ювелирно точно.\"",
    "rev_8_reply": "\"Ваше постоянство и доверие невероятно ценны для нас, с наилучшими пожеланиями 🙏🏼😊\"",
    "rev_8_role": "Микронаращивание (Фуркан)",
    "rev_9_text": "\"Впервые пришла на стрижку и осталась так довольна качеством, что записалась и на маникюр. Здесь уделяют огромное внимание чистоте и стерильности. Аккуратная, приветливая и высококлассная команда. Теперь я их постоянный гость!\"",
    "rev_9_reply": "\"Большое спасибо! С нетерпением ждем нашей следующей встречи 🙏🏼😊\"",
    "rev_9_role": "Стрижка, маникюр и гигиена",
    "rev_10_text": "\"Сегодня побывала здесь впервые и осталась в полном восторге. Все сотрудники невероятно доброжелательные и внимательные. Меня окружили заботой и сотворили результат даже красивее, чем я представляла. Видно, как мастера любят свою работу. Обязательно вернусь ❤️\"",
    "rev_10_reply": "\"Спасибо за ваш душевный отзыв! Будем счастливы встретить вас вновь 🙏🏼😊\"",
    "rev_10_role": "Индивидуальный уход и стиль",
    // Navigation
    "nav_home": "Главная",
    "nav_services": "Услуги",
    "nav_about": "О нас",
    "nav_reviews": "Отзывы",
    "nav_faq": "Вопросы",
    "btn_book": "Записаться",
    "btn_whatsapp_consult": "WhatsApp Консультация",
    "floating_wa": "WhatsApp Запись",

    // Hero
    "hero_subtitle": "ВАШ СТИЛЬ",
    "hero_title": "Натуральный дизайн и наращивание волос",
    "hero_quote": "\"Искусство микронаращивания и бережного окрашивания, индивидуально подобранное под анатомию вашего лица без вреда для волос.\"",
    "hero_btn_services": "Услуги",
    "chip_mikro": "Микронаращивание",
    "chip_sombre": "Ледяной блонд",
    "chip_info": "Узнать больше →",
    "hero_card_mikro_title": "МИКРОНАРАЩИВАНИЕ",
    "hero_card_mikro_desc": "Невесомое наращивание из 100% натуральных волос, незаметное глазу.",
    "hero_card_sombre_title": "ОМБРЕ И СОМБРЕ",
    "hero_card_sombre_desc": "Плавные естественные переходы в сияющий блонд с сохранением здоровья волос.",

    // Bento
    "sec_signature_sub": "МАСТЕРСТВО И СТИЛЬ",
    "sec_signature_title": "Фирменные Преображения",
    "bento_1_title": "Ультра-невидимое микронаращивание волос",
    "bento_1_badge": "Нанотехнологии",
    "bento_2_title": "Ледяной блонд и холодное сомбре",
    "bento_2_badge": "Плавное осветление",
    "bento_3_title": "Свадебные и вечерние прически",
    "bento_3_badge": "Элегантно и стойко",
    "bento_4_title": "Натуральный шатен и блики Babylights",
    "bento_4_badge": "Натуральные оттенки",
    "bento_examine": "Подробнее",

    // Philosophy
    "sec_philosophy_sub": "ЛУЧШЕЕ МЕСТО ДЛЯ ВОЛОС В МАНАВГАТЕ",
    "sec_philosophy_title": "LOCCA Hair Studio",
    "sec_philosophy_desc": "\"В районе Aşağı Hisar мы создаем стильные образы в уютной и профессиональной обстановке. Мы бережно удлиняем волосы, красим в натуральные оттенки и окружаем вас заботой.\"",
    "btn_about_locca": "О САЛОНЕ LOCCA",

    // Services Grid
    "sec_services_sub": "ПРЕМИАЛЬНЫЙ УХОД",
    "sec_services_title": "Наши Направления",
    "srv_1_title": "МИКРОНАРАЩИВАНИЕ",
    "srv_1_desc": "Неощутимые нанокапсулы и естественный густой объем",
    "srv_2_title": "ЛЕДЯНОЙ БЛОНД",
    "srv_2_desc": "Бережное осветление без повреждений и стойкие холодные оттенки",
    "srv_3_title": "НАТУРАЛЬНЫЕ БЛИКИ",
    "srv_3_desc": "Эффект выгоревших на солнце прядей техникой Babylights",
    "srv_4_title": "КЕРАТИН И БОТОКС",
    "srv_4_desc": "Глубокое восстановление, питание и зеркальный блеск",

    // Reviews
    "sec_reviews_sub": "РЕАЛЬНЫЕ ВПЕЧАТЛЕНИЯ",
    "sec_reviews_title": "Отзывы Клиентов",
    "reviews_rating_note": "Более 370 подтвержденных отзывов на Google",
    "review_verified": "Проверено",
    "review_owner_reply": "Ответ владельца",

    // Ritual
    "ritual_sub": "КАК МЫ РАБОТАЕМ",
    "ritual_title": "3 Шага к Совершенству",
    "ritual_1_title": "АНАЛИЗ ВОЛОС И КОНСУЛЬТАЦИЯ",
    "ritual_1_desc": "\"Индивидуальное планирование с учётом анатомии лица, густоты волос и истории окрашивания.\"",
    "ritual_2_title": "БЕРЕЖНОЕ И ТЩАТЕЛЬНОЕ НАНЕСЕНИЕ",
    "ritual_2_desc": "\"Осветлители, сохраняющие связи волос, и незаметная микрокапсульная технология.\"",
    "ritual_3_title": "ФИРМЕННЫЙ ФИНИШ И УХОД",
    "ritual_3_desc": "\"Шелковисто-гладкие волосы, сохраняющие форму месяцами, и советы по домашнему уходу.\"",

    // Reels
    "reels_live_badge": "Живые съёмки в студии",
    "reels_sub": "ЖИВЫЕ ПРЕОБРАЖЕНИЯ И REELS",
    "reels_title": "LOCCA в Instagram",
    "reels_desc": "@yunus_soner_loca_hairdesing • Листайте, чтобы увидеть наши живые сеансы, наращивание и трансформации в кристальный блонд.",
    "reels_more_btn": "Больше Reels в Instagram",
    "reels_mute_off": "Звук выкл",
    "reels_mute_on": "Звук вкл",

    // FAQ
    "sec_faq_sub": "ЧАСТЫЕ ВОПРОСЫ",
    "sec_faq_title": "Часто Задаваемые Вопросы",
    "sec_faq_desc": "Часто задаваемые вопросы об услугах, диагностике волос и записи на визит в салон LOCCA.",
    "faq_q1": "Вредно ли микронаращивание для волос и сколько оно держится?",
    "faq_a1": "\"Нет, абсолютно безопасно. Итальянские нанокератиновые капсулы невесомы и не препятствуют дыханию волос. В зависимости от скорости роста ваших волос коррекция требуется через 3–4 месяца комфортной носки.\"",
    "faq_q2": "Повредятся ли волосы при осветлении и окрашивании в блонд?",
    "faq_a2": "\"Ни в коем случае. Вместо агрессивного осветления за один раз мы применяем связезащитные препараты (bond-builders) и метод бережного постепенного осветления. Это позволяет сохранить эластичность и добиться сияющего кристального блонда.\"",
    "faq_q3": "Проводите ли вы анализ волос и консультацию перед процедурой?",
    "faq_a3": "\"Да, для каждого гостя мы обязательно проводим детальную консультацию с учетом анатомии лица и истории предыдущих окрашиваний, подбирая честный и безопасный план преображения.\"",
    "faq_q4": "Нужно ли мыть голову перед визитом в салон?",
    "faq_a4": "\"Перед процедурами осветления и окрашивания мы рекомендуем не мыть волосы в день визита, чтобы естественный липидный барьер защищал кожу головы. Для наращивания и уходов мы проводим специальное салонное очищение.\"",

    // CTA / Footer
    "cta_sub": "запланируйте визит",
    "cta_title": "СДЕЛАЙТЕ ПЕРВЫЙ ШАГ К ВОЛОСАМ ВАШЕЙ МЕЧТЫ",
    "cta_desc": "Свяжитесь с Юнусом Сонером и нашими мастерами в WhatsApp для подбора идеального образа.",
    "footer_address_title": "Адрес и Контакты",
    "footer_directions": "Маршрут",
    "footer_hours_title": "Часы работы",
    "footer_hours_desc": "Вторник - Воскресенье (Понедельник выходной)<br>10:00 - 19:30 (По записи)",
    "footer_satisfaction_title": "Доверие гостей",
    "footer_reviews_count": "(374 отзыва Google)",
    "footer_rights": "© LOCCA Hair Studio. Все права защищены.",
    "modal_expertise_label": "LOCCA Hair Studio • Фирменная услуга",
    "modal_advantages": "Главные преимущества",
    "modal_btn_book": "Записаться на эту процедуру",
    "modal_notice": "* Ваш запрос будет отправлен напрямую на номер WhatsApp +90 507 199 34 24.",

    // Hizmetler Page
    "hp_sub": "с мастерством и искренней заботой",
    "hp_title": "НАШИ НАПРАВЛЕНИЯ И ТЕХНИКИ",
    "hp_desc": "У каждой женщины уникальная анатомия, густота и история окрашивания волос. В студии LOCCA мы предлагаем индивидуальную архитектуру волос вместо стандартных решений.",
    "hp_price_note": "Цены определяются лично в салоне в зависимости от типа волос и необходимого объёма.",
    "hp_s1_label": "01 / ФИРМЕННАЯ УСЛУГА",
    "hp_s1_badge": "Фирменная услуга",
    "hp_s1_title": "Ультра-невидимое микронаращивание волос",
    "hp_s1_how_title": "Как мы это делаем?",
    "hp_s1_how_desc": "Мы подбираем 100% натуральные волосы, идеально подходящие по структуре, густоте и цвету к вашим. Итальянскими нанокератиновыми капсулами мы крепим ультратонкие пряди у корней. Точки крепления настолько малы, что незаметны даже при собранных волосах.",
    "hp_s1_approach_title": "Подход Locca",
    "hp_s1_approach_desc": "В отличие от тяжёлых наращиваний, повреждающих волосы, мы обеспечиваем дыхание и здоровый рост ваших натуральных волос. При снятии используем специальные растворы без вреда для волос.",
    "hp_book_this": "Записаться на процедуру",
    "hp_s2_label": "02 / АВТОРСКОЕ ОКРАШИВАНИЕ",
    "hp_s2_badge": "Кристально-холодные тона",
    "hp_s2_title": "Ледяной блонд и Сомбре",
    "hp_s2_how_desc": "Вместо агрессивного осветления за один сеанс мы применяем протокол постепенного осветления. Используя бонд-билдеры, мы сохраняем эластичность волос. Достигаем бесшовных, естественных переходов в блонд от корней до кончиков.",
    "hp_s2_approach_desc": "Сделать блонд легко, но осветлить без ожогов и потери блеска — это мастерство. Мы готовим индивидуальные формулы для каждого клиента: без рыжины, шелковистые кристально-холодные тона.",
    "hp_s3_label": "03 / НАТУРАЛЬНОЕ ОСВЕТЛЕНИЕ",
    "hp_s3_badge": "Естественная лёгкость",
    "hp_s3_title": "Натуральный шатен и Babylights",
    "hp_s3_how_desc": "Не нарушая естественную базу цвета, мы добавляем нежные солнечные блики. Вместо грубого мелирования с видимыми полосами мы применяем микропряди (babylights), которые сливаются с естественным потоком волос.",
    "hp_s3_approach_desc": "Мы создаём окрашивания с минимальным уходом: без необходимости подкрашивать корни, с сохранением естественного вида при отрастании.",
    "hp_s4_label": "04 / ГЛУБОКОЕ ВОССТАНОВЛЕНИЕ",
    "hp_s4_badge": "Шелковистое восстановление",
    "hp_s4_title": "Терапия волос и Кератиновый ботокс",
    "hp_s4_how_desc": "Мы насыщаем кератином и аминокислотами волосы, повреждённые теплом и химией. Запечатывая кутикулу, мы получаем гладкую, без пушистости, шелковистую текстуру, отражающую свет.",
    "hp_s4_approach_desc": "Не выпрямляя волосы искусственно, мы восстанавливаем здоровый, объёмный и блестящий вид, сохраняя естественное движение и волну.",
    "hp_cta_sub": "ИСТОРИЯ ВАШИХ ВОЛОС НАЧИНАЕТСЯ ЗДЕСЬ",
    "hp_cta_title": "Проконсультируйтесь с нами для идеального образа",
    "hp_cta_desc": "Чтобы подобрать оптимальный сеанс, вы можете встретиться с владельцем салона Юнусом Сонером лично или по телефону.",
    "hp_cta_book": "Записаться сейчас",
    "hp_cta_consult": "Консультация в WhatsApp",

    // Hakkımızda Page
    "ap_sub": "НАША ИСТОРИЯ И ФИЛОСОФИЯ",
    "ap_title": "Юнус Сонер и салон LOCCA",
    "ap_location_label": "MANAVGAT AŞAĞI HİSAR",
    "ap_who_title": "Кто мы и как давно мы здесь",
    "ap_who_p1": "\"С многолетним опытом парикмахерского искусства в Манавгате мы работаем с философией, ставящей здоровье волос женщин в центр внимания. Locca — это студия, где каждая клиентка уходит счастливой и уверенной в себе.\"",
    "ap_who_p2": "Отказываясь от шаблонной конвейерной культуры салонов, мы предлагаем сервис, который уделяет каждому гостю время, слушает анатомию волос и поддерживает тёплое, искреннее общение.",
    "ap_rating": "Рейтинг 5.0",
    "ap_reviews_text": "370+ подтверждённых отзывов Google",
    "ap_location_sub": "РАСПОЛОЖЕНИЕ И МАРШРУТ",
    "ap_location_title": "АДРЕС СТУДИИ И МАРШРУТ",
    "ap_parking": "Наш салон расположен в центре Манавгата, район Aşağı Hisar. Бесплатная парковка.",
    "ap_maps_btn": "📍 ОТКРЫТЬ В GOOGLE КАРТАХ →",
    "ap_expertise_label": "МАСТЕРСТВО И ТОЧНОСТЬ",
    "ap_expertise_title": "Что мы делаем?",
    "ap_expertise_desc": "\"Мы специализируемся на невидимом микронаращивании, бережном постепенном осветлении (ледяной блонд, омбре) и интенсивном кератиновом ботоксе. Вместо массовых быстрых процедур мы предлагаем бутиковый сервис, уделяющий время каждой пряди.\"",
    "ap_trust_label": "ЧЕСТНЫЙ И ПРОЗРАЧНЫЙ ПОДХОД",
    "ap_trust_title": "Наше обещание доверия",
    "ap_trust_desc": "\"Мы никогда не применяем к клиентам химикаты или некачественные наращивания, которые не стали бы использовать на своих волосах. Вместо шаблонных цен по телефону мы оцениваем ваши волосы в салоне и составляем максимально честный план. Наши 370+ пятизвёздочных отзывов Google — подтверждение этой заботы.\"",
    "ap_personal_session": "Индивидуальный план сеанса",
    "ap_single_client": "Один клиент — полное внимание",
    "ap_cta_sub": "МЫ ЗДЕСЬ, ЧТОБЫ ВЫСЛУШАТЬ ВАС",
    "ap_cta_title": "Спланируем преображение ваших волос вместе",
    "ap_cta_desc": "Свяжитесь с нами сейчас, чтобы оценить состояние волос, выбрать подходящий сеанс и задать любые вопросы.",
    "ap_cta_consult": "Консультация в WhatsApp",

    "wa_booking_msg": "Здравствуйте, я хочу записаться на прием в салон Locca Hair Studio."
  },

  fr: {
    // Localized Reels
    "reel_1_badge": "Micro Extensions",
    "reel_1_cat": "Séance en Direct",
    "reel_1_title": "Séance de Micro Extensions Ultra Naturelles",
    "reel_1_num": "01 • Micro Extensions",
    "reel_2_badge": "Blond Cristal",
    "reel_2_cat": "Teinte Signature",
    "reel_2_title": "Blond Locca & Éclat Cristallin",
    "reel_2_num": "02 • Blond Polaire",
    "reel_3_badge": "Mèches & Balayage",
    "reel_3_cat": "Éclaircissement Délicat",
    "reel_3_title": "Balayage Progressif & Ondulations",
    "reel_3_num": "03 • Balayage",
    "reel_4_badge": "Coupe & Couleur",
    "reel_4_cat": "Design Studio",
    "reel_4_title": "Forme Personnalisée & Texture Vivante",
    "reel_4_num": "04 • Coupe Précision",
    "reel_5_badge": "Blond Lumineux",
    "reel_5_cat": "Décoloration & Nuance",
    "reel_5_title": "Balayage Lumineux & Ombré",
    "reel_5_num": "05 • Blond Lumineux",
    "reel_6_badge": "Signature Studio",
    "reel_6_cat": "Atmosphère",
    "reel_6_title": "L'Expérience Locca Hair Studio",
    "reel_6_num": "06 • Studio",
    "reel_7_badge": "Look Final",
    "reel_7_cat": "Mouvement Parfait",
    "reel_7_title": "Mouvement Signature Locca & Finition",
    "reel_7_num": "07 • Touche Finale",
    // Localized Reviews
    "time_1m_ago": "il y a 1 mois",
    "time_2m_ago": "il y a 2 mois",
    "time_3m_ago": "il y a 3 mois",
    "rev_1_text": "\"Depuis des années, je confie mes cheveux et mes extensions en toute sérénité à ce salon. L'application des extensions est tellement soignée que je ne ressens aucune lourdeur ni maux de tête. Elles se fondent si naturellement dans mes cheveux que personne ne devine qu'il s'agit d'extensions. La couleur correspond toujours exactement à nos souhaits, sans mauvaise surprise. Un travail méticuleux et une véritable maîtrise. Malgré cette qualité remarquable, les tarifs restent très raisonnables. Un salon que je recommande les yeux fermés. 🌸\"",
    "rev_1_reply": "\"Profitez pleinement de votre nouvelle chevelure ! Votre satisfaction fait notre plus grand bonheur 🙏🏼😊\"",
    "rev_1_role": "Spécialiste de la posture & Coach Pilates",
    "rev_2_text": "\"Suite à des soucis de santé, j'avais perdu une grande partie de ma chevelure, ce qui m'affectait énormément. Grâce à Yunus, j'ai l'impression de retrouver mon ancienne confiance. Les extensions qu'il a réalisées sont d'un naturel bluffant et totalement indétectables.\"",
    "rev_2_reply": "\"Vos mots nous touchent profondément. Nous vous souhaitons le meilleur avec vos cheveux 🙏🏼\"",
    "rev_2_role": "Micro Extensions & Métamorphose",
    "rev_3_text": "\"J'ai fait réaliser un ombré aujourd'hui et la patience, la minutie et le dévouement de l'équipe étaient extraordinaires. Un salon d'un très grand professionnalisme 🌸 Équipe chaleureuse et souriante 💐 C'est désormais mon adresse incontournable à Manavgat 🙏\"",
    "rev_3_reply": "\"Un grand merci pour ce retour si chaleureux ! Au plaisir de vous revoir 🙏🏼😊\"",
    "rev_3_role": "Ombré & Coloration Sur-Mesure",
    "rev_4_text": "\"Cela fait presque 5 ans que je viens pour mes colorations, je l'ai fait 3 fois et j'ai toujours été comblée. Ils créent des reflets lumineux ultra-naturels sans jamais abîmer les cheveux. Une qualité équivalente aux salons parisiens ou stambouliotes les plus réputés. Merci pour votre bienveillance et votre art !\"",
    "rev_4_reply": "\"Merci infiniment pour votre fidélité ! C'est toujours un plaisir de vous accueillir 🙏🏼😊\"",
    "rev_4_role": "Reflets Naturels (Cliente depuis 5 ans)",
    "rev_5_text": "\"Je n'avais pas pris soin de mes cheveux depuis 2 ans, ils étaient très longs et abîmés. Grâce au soin kératine et à la coupe de précision, ma chevelure est devenue douce comme de la soie. J'ai fait confiance aux avis Google et j'ai eu bien raison. Extrêmement satisfaite, je recommande sans réserve :)\"",
    "rev_5_reply": "\"Votre bonheur nous ravit ! À très bientôt pour un nouveau moment de détente 🙏🏼😊\"",
    "rev_5_role": "Soin Kératine & Coupe",
    "rev_6_text": "\"Un salon qui aime véritablement son métier, et le résultat est tout simplement splendide. L'harmonie entre la couleur et la coupe m'a littéralement illuminée 😊 Trouvé via Google et ravie à 100%. L'adresse idéale pour toute personne de passage à Antalya !\"",
    "rev_6_reply": "\"Profitez bien de votre superbe look, nous avons hâte de vous revoir 🙏🏼😊\"",
    "rev_6_role": "Couleur & Coupe de Précision",
    "rev_7_text": "\"Mon expérience chez Loca Kuaför a dépassé toutes mes attentes. Dès le premier instant, l'accueil bienveillant, à l'écoute et très professionnel m'a mise en confiance. Mes envies ont été comprises et sublimées par un résultat d'une grande élégance.\"",
    "rev_7_reply": "\"Merci du fond du cœur pour votre commentaire ! C'était un réel plaisir 🙏🏼🙏🏼😊\"",
    "rev_7_role": "Consultation & Création Capillaire",
    "rev_8_text": "\"Prestations d'une qualité irréprochable... Toute l'équipe est souriante et prévenante. Ayant les cheveux très fins, je fais mes micro extensions avec Furkan depuis des années. Il sélectionne la texture parfaite et les pose avec une précision d'orfèvre.\"",
    "rev_8_reply": "\"Votre fidélité et vos compliments nous font chaud au cœur 🙏🏼😊\"",
    "rev_8_role": "Micro Extensions (Furkan)",
    "rev_9_text": "\"J'étais d'abord venue pour une coupe et j'ai tellement apprécié la qualité du service que je suis revenue pour une manucure. L'hygiène et la propreté sont irréprochables. Une équipe soignée, souriante et experte. C'est devenu mon adresse habituelle !\"",
    "rev_9_reply": "\"Merci beaucoup ! Nous serons ravis de vous retrouver très prochainement 🙏🏼😊\"",
    "rev_9_role": "Coupe, Manucure & Hygiène",
    "rev_10_text": "\"C'était ma toute première visite aujourd'hui et je suis absolument conquise. Tous les collaborateurs ont été adorables, attentifs et prévenants. Ils ont pris le temps de m'écouter et ont réalisé un résultat encore plus beau que dans mes rêves. On sent la passion du métier. Je reviendrai à coup sûr ❤️\"",
    "rev_10_reply": "\"Un immense merci pour votre confiance et à très bientôt au studio 🙏🏼😊\"",
    "rev_10_role": "Expérience Capillaire & Soin Signature",
    // Navigation
    "nav_home": "Accueil",
    "nav_services": "Services",
    "nav_about": "À propos",
    "nav_reviews": "Avis",
    "nav_faq": "FAQ",
    "btn_book": "Réserver",
    "btn_whatsapp_consult": "Conseil WhatsApp",
    "floating_wa": "Réservation WhatsApp",

    // Hero
    "hero_subtitle": "VOTRE SIGNATURE",
    "hero_title": "Design Capillaire Naturel & Extensions",
    "hero_quote": "\"L'art des micro-extensions et de la coloration sur-mesure, adapté à la morphologie de votre visage dans le respect absolu du cheveu.\"",
    "hero_btn_services": "Services",
    "chip_mikro": "Micro Extensions",
    "chip_sombre": "Blond Polaire",
    "chip_info": "Découvrir & Réserver →",
    "hero_card_mikro_title": "MICRO EXTENSIONS",
    "hero_card_mikro_desc": "Extensions ultra-légères en cheveux 100% naturels, totalement invisibles.",
    "hero_card_sombre_title": "OMBRE & SOMBRE",
    "hero_card_sombre_desc": "Dégradés subtils vers des nuances blondes éclatantes sans abîmer les cheveux.",

    // Bento
    "sec_signature_sub": "SÉLECTION D'EXCELLENCE",
    "sec_signature_title": "Transformations Signature",
    "bento_1_title": "Micro Extensions Invisibles Haute Précision",
    "bento_1_badge": "Nanotechnologie",
    "bento_2_title": "Blond Polaire & Sombre Froid Cristallin",
    "bento_2_badge": "Éclaircissement Progressif",
    "bento_3_title": "Coiffure Mariée & Événements",
    "bento_3_badge": "Élégant & Longue Tenue",
    "bento_4_title": "Brun Naturel & Reflets Babylights",
    "bento_4_badge": "Nuances Naturelles",
    "bento_examine": "Voir Détails",

    // Philosophy
    "sec_philosophy_sub": "ADRESSE D'EXCEPTION À MANAVGAT",
    "sec_philosophy_title": "LOCCA Hair Studio",
    "sec_philosophy_desc": "\"Dans le quartier d'Aşağı Hisar, nous vous accueillons dans une ambiance chaleureuse et raffinée. Nous sublimons votre chevelure avec soin, dans des tons naturels et avec l'exigence que vous méritez.\"",
    "btn_about_locca": "À PROPOS DE LOCCA",

    // Services Grid
    "sec_services_sub": "TOUCHES EXCLUSIVES",
    "sec_services_title": "Nos Expertises",
    "srv_1_title": "MICRO EXTENSIONS",
    "srv_1_desc": "Nano-capsules imperceptibles et volume dense naturel",
    "srv_2_title": "BLOND POLAIRE & SOMBRE",
    "srv_2_desc": "Décoloration maîtrisée et reflets froids lumineux",
    "srv_3_title": "BABYLIGHTS NATURELS",
    "srv_3_desc": "Effet soleil délicat et fondus subtils",
    "srv_4_title": "THÉRAPIE KÉRATINE",
    "srv_4_desc": "Botox capillaire et soin profond brillance miroir",

    // Reviews
    "sec_reviews_sub": "EXPÉRIENCES VÉCUES",
    "sec_reviews_title": "Avis Clients",
    "reviews_rating_note": "Plus de 370 avis vérifiés sur Google",
    "review_verified": "Vérifié",
    "review_owner_reply": "Réponse du propriétaire",

    // Ritual
    "ritual_sub": "NOTRE MÉTHODE DE TRAVAIL",
    "ritual_title": "3 Étapes Vers la Perfection",
    "ritual_1_title": "ANALYSE CAPILLAIRE & CONSULTATION",
    "ritual_1_desc": "\"Planification personnalisée selon votre morphologie, densité capillaire et historique colorimétrique.\"",
    "ritual_2_title": "APPLICATION PROTECTRICE & MINUTIEUSE",
    "ritual_2_desc": "\"Décolorants préservant les liaisons et technologie micro-capsule imperceptible.\"",
    "ritual_3_title": "FINITION SIGNATURE & SUIVI",
    "ritual_3_desc": "\"Des cheveux soyeux qui gardent leur forme pendant des mois et des conseils d'entretien à domicile.\"",

    // Reels
    "reels_live_badge": "Tournages en Direct du Studio",
    "reels_sub": "TRANSFORMATIONS EN DIRECT & REELS",
    "reels_title": "LOCCA sur Instagram",
    "reels_desc": "@yunus_soner_loca_hairdesing • Faites défiler pour découvrir nos séances en direct, applications micro-extensions et transformations blond cristallin.",
    "reels_more_btn": "Plus de Reels sur Instagram",
    "reels_mute_off": "Son coupé",
    "reels_mute_on": "Son activé",

    // FAQ
    "sec_faq_sub": "QUESTIONS FRÉQUENTES",
    "sec_faq_title": "Foire Aux Questions",
    "sec_faq_desc": "Questions fréquemment posées sur nos prestations, le diagnostic capillaire et les rendez-vous au salon LOCCA.",
    "faq_q1": "Les micro-extensions abîment-elles mes cheveux et combien de temps durent-elles ?",
    "faq_a1": "\"Non, absolument aucun dommage. Nos nano-capsules de kératine italienne sont ultra-légères et laissent respirer vos cheveux. Selon votre repousse naturelle, elles se portent confortablement pendant 3 à 4 mois.\"",
    "faq_q2": "Mes cheveux seront-ils fragilisés lors de l'éclaircissement et du blond ?",
    "faq_a2": "\"Jamais. Plutôt que de sensibiliser le cheveu en une seule séance agressive, nous utilisons des protecteurs de liaisons et un protocole d'éclaircissement progressif, préservant ainsi l'élasticité et l'éclat du cheveu.\"",
    "faq_q3": "Effectuez-vous un diagnostic capillaire et une consultation préalable ?",
    "faq_a3": "\"Oui, nous réalisons systématiquement une consultation personnalisée tenant compte de votre morphologie et de votre historique capillaire pour définir ensemble le plan le plus transparent et optimal.\"",
    "faq_q4": "Dois-je me laver les cheveux avant de venir au rendez-vous ?",
    "faq_a4": "\"Pour les décolorations et colorations, nous conseillons de ne pas laver vos cheveux le jour même afin de préserver le film protecteur naturel du cuir chevelu. Pour les extensions et soins, un shampooing purifiant professionnel est réalisé au salon.\"",

    // CTA / Footer
    "cta_sub": "planifiez votre rendez-vous",
    "cta_title": "FAITES LE PREMIER PAS VERS LA CHEVELURE DE VOS RÊVES",
    "cta_desc": "Contactez Yunus Soner et notre équipe de spécialistes directement sur WhatsApp pour concevoir votre transformation personnalisée.",
    "footer_address_title": "Adresse & Contact",
    "footer_directions": "Itinéraire",
    "footer_hours_title": "Horaires d'ouverture",
    "footer_hours_desc": "Mardi - Dimanche (Fermé le Lundi)<br>10:00 - 19:30 (Sur Rendez-vous)",
    "footer_satisfaction_title": "Satisfaction Clients",
    "footer_reviews_count": "(374 Avis Google)",
    "footer_rights": "© LOCCA Hair Studio. Tous droits réservés.",
    "modal_expertise_label": "LOCCA Hair Studio • Spécialité Signature",
    "modal_advantages": "Avantages Clés",
    "modal_btn_book": "Réserver Cette Prestation",
    "modal_notice": "* Votre demande de rendez-vous sera transmise directement sur notre WhatsApp +90 507 199 34 24.",

    // Hizmetler Page
    "hp_sub": "avec expertise et attention sincère",
    "hp_title": "NOS EXPERTISES & TECHNIQUES",
    "hp_desc": "Chaque femme a une anatomie capillaire, une densité et un historique de coloration uniques. Au studio LOCCA, nous offrons une architecture capillaire sur-mesure au lieu de formules standard.",
    "hp_price_note": "Nos tarifs sont déterminés en personne au salon selon votre type de cheveux et le volume requis.",
    "hp_s1_label": "01 / SPÉCIALITÉ SIGNATURE",
    "hp_s1_badge": "Spécialité Signature",
    "hp_s1_title": "Micro Extensions Capillaires Ultra-Invisibles",
    "hp_s1_how_title": "Comment procédons-nous ?",
    "hp_s1_how_desc": "Nous sélectionnons des cheveux 100% naturels parfaitement assortis à la texture, la densité et la couleur de vos cheveux. À l'aide de nano-capsules de kératine italienne, nous appliquons des mèches ultra-fines à vos racines. Les points de fixation sont si petits qu'ils restent invisibles même en queue de cheval.",
    "hp_s1_approach_title": "L'Approche Locca",
    "hp_s1_approach_desc": "Contrairement aux extensions lourdes qui tirent et abîment les cheveux, nous garantissons que vos cheveux naturels respirent et poussent sainement. Lors du retrait, nous utilisons des solutions spécialisées sans aucun dommage.",
    "hp_book_this": "Réserver Ce Service",
    "hp_s2_label": "02 / COLORATION SUR-MESURE",
    "hp_s2_badge": "Tons Froids Cristallins",
    "hp_s2_title": "Blond Polaire & Sombre",
    "hp_s2_how_desc": "Au lieu de brûler les cheveux en une seule séance, nous appliquons un protocole d'éclaircissement progressif. En utilisant des soins bond builder, nous préservons l'élasticité de la fibre capillaire. Nous obtenons des tons blonds sans démarcation, avec des transitions naturelles de la racine aux pointes.",
    "hp_s2_approach_desc": "Faire du blond est facile, mais éclaircir sans brûler ni perdre en éclat demande de la maîtrise. Pour des tons froids cristallins sans reflets orangés, nous préparons une formule personnalisée pour chaque chevelure.",
    "hp_s3_label": "03 / ILLUMINATION NATURELLE",
    "hp_s3_badge": "Naturel Sans Effort",
    "hp_s3_title": "Brun Naturel & Babylights",
    "hp_s3_how_desc": "Sans perturber la base naturelle de vos cheveux, nous ajoutons de délicats reflets ensoleillés. Au lieu de mèches classiques aux lignes marquées, nous appliquons des micro-mèches (babylights) qui se fondent naturellement dans le mouvement de vos cheveux.",
    "hp_s3_approach_desc": "Nous concevons des colorations à faible entretien qui ne nécessitent pas de retouches racines et conservent leur aspect naturel en repoussant.",
    "hp_s4_label": "04 / RÉPARATION PROFONDE & SOIN",
    "hp_s4_badge": "Réparation Soyeuse",
    "hp_s4_title": "Thérapie Capillaire & Botox Kératine",
    "hp_s4_how_desc": "Nous infusons kératine et acides aminés dans les fibres capillaires endommagées par la chaleur et les produits chimiques. En scellant la cuticule, nous obtenons une texture soyeuse, lisse, sans frisottis et réfléchissant la lumière.",
    "hp_s4_approach_desc": "Sans lisser artificiellement comme les traitements permanents, nous redonnons un aspect sain, volumineux et brillant tout en préservant le mouvement et l'ondulation naturels de vos cheveux.",
    "hp_cta_sub": "L'HISTOIRE DE VOS CHEVEUX COMMENCE ICI",
    "hp_cta_title": "Consultez-nous pour vos cheveux de rêve",
    "hp_cta_desc": "Pour déterminer la meilleure séance pour vous, vous pouvez rencontrer notre propriétaire Yunus Soner en personne ou par téléphone.",
    "hp_cta_book": "Réserver Maintenant",
    "hp_cta_consult": "Conseil via WhatsApp",

    // Hakkımızda Page
    "ap_sub": "NOTRE HISTOIRE ET NOTRE PHILOSOPHIE",
    "ap_title": "Yunus Soner & Salon LOCCA",
    "ap_location_label": "MANAVGAT AŞAĞI HİSAR",
    "ap_who_title": "Qui sommes-nous et depuis combien de temps ?",
    "ap_who_p1": "\"Forts de longues années d'expérience en coiffure à Manavgat Aşağı Hisar, nous travaillons avec une philosophie qui place la santé capillaire des femmes au centre. Le salon Locca est un studio dédié à ce que chaque cliente quitte le fauteuil heureuse et confiante.\"",
    "ap_who_p2": "En rompant avec la culture des salons standardisés, nous offrons un service qui accorde du temps à chaque invitée, écoute l'anatomie de ses cheveux et maintient une communication chaleureuse et sincère.",
    "ap_rating": "Note 5.0",
    "ap_reviews_text": "370+ avis Google vérifiés",
    "ap_location_sub": "EMPLACEMENT & ITINÉRAIRE",
    "ap_location_title": "ADRESSE DU STUDIO & ITINÉRAIRE",
    "ap_parking": "Notre salon est situé au centre de Manavgat, quartier Aşağı Hisar. Parking gratuit disponible.",
    "ap_maps_btn": "📍 OUVRIR DANS GOOGLE MAPS →",
    "ap_expertise_label": "EXPERTISE & PRÉCISION",
    "ap_expertise_title": "Que faisons-nous ?",
    "ap_expertise_desc": "\"Nous sommes spécialisés dans les micro-extensions invisibles, les techniques d'éclaircissement progressif sans dommage (blond polaire, ombré) et les traitements intensifs au botox kératine. Au lieu de traitements rapides de masse, nous offrons un service boutique qui consacre du temps à chaque mèche.\"",
    "ap_trust_label": "APPROCHE HONNÊTE & TRANSPARENTE",
    "ap_trust_title": "Notre Promesse de Confiance",
    "ap_trust_desc": "\"Nous n'appliquons jamais à nos clientes des produits chimiques ou des extensions de mauvaise qualité que nous n'utiliserions pas sur nos propres cheveux. Au lieu de donner des prix par cœur au téléphone, nous évaluons vos cheveux au salon et établissons le plan le plus honnête. Nos 370+ avis cinq étoiles Google en sont la preuve.\"",
    "ap_personal_session": "Plan de Séance Personnalisé",
    "ap_single_client": "Focus Client Unique",
    "ap_cta_sub": "NOUS SOMMES LÀ POUR VOUS ÉCOUTER",
    "ap_cta_title": "Planifions vos cheveux ensemble",
    "ap_cta_desc": "Contactez-nous maintenant pour évaluer l'état de vos cheveux, choisir la bonne séance et poser toutes vos questions.",
    "ap_cta_consult": "Consultation WhatsApp",

    "wa_booking_msg": "Bonjour, je souhaite prendre rendez-vous chez Locca Hair Studio."
  }
};

// Modal transformation data with i18n support
const transformationDataI18n = {
  mikro: {
    tr: {
      category: "Nano Teknoloji",
      title: "Ultra Görünmez Mikro Saç Kaynak",
      serviceName: "Mikro Kaynak",
      description: "Yunus Soner Kuaför olarak uyguladığımız mikro kaynak teknolojisi, saç teline ağırlık yapmayan ve dışarıdan asla fark edilmeyen nano kapsül sistemine dayanır. Kendi saç yapınız ve dalganızla %100 uyumlu doğal saçlar kullanıyoruz. Saçlarınızı topladığınızda veya atkuyruğu yaptığınızda bağlantı noktaları görünmez; dökülme ve çekme yapmaz.",
      features: [
        "Hissedilmeyen nano keratin bağlantı noktaları",
        "%100 doğal, boyanabilir ve fönlenebilir birinci sınıf saç",
        "Saç diplerine ve saç köklerine sıfır zarar"
      ]
    },
    en: {
      category: "Nano Technology",
      title: "Ultra Invisible Micro Hair Extensions",
      serviceName: "Micro Extensions",
      description: "Our micro extension technology at LOCCA uses a nano-capsule system that adds zero weight to your hair and is completely undetectable. We use 100% natural hair that matches your own texture and wave pattern. Connection points are invisible even in ponytails — no shedding, no pulling.",
      features: [
        "Imperceptible nano keratin connection points",
        "100% natural, color-treatable, blow-dry-ready premium hair",
        "Zero damage to roots and scalp"
      ]
    },
    de: {
      category: "Nano Technologie",
      title: "Ultra-unsichtbare Mikro Haarverlängerung",
      serviceName: "Mikro Extensions",
      description: "Unsere Mikro-Extensions-Technologie bei LOCCA basiert auf einem Nano-Kapselsystem, das dem Haar kein Gewicht hinzufügt und von außen nicht erkennbar ist. Wir verwenden 100% Naturhaar, das zu Ihrer eigenen Textur und Wellung passt. Verbindungspunkte sind selbst im Pferdeschwanz unsichtbar — kein Ausfall, kein Ziehen.",
      features: [
        "Kaum spürbare Nano-Keratin-Verbindungspunkte",
        "100% natürliches, färbbares und fönbares Premium-Haar",
        "Null Schäden an Haarwurzeln und Kopfhaut"
      ]
    },
    ru: {
      category: "Нанотехнологии",
      title: "Ультра-невидимое микронаращивание волос",
      serviceName: "Микронаращивание",
      description: "Наша технология микронаращивания в LOCCA основана на системе нанокапсул, которая не утяжеляет волосы и полностью незаметна. Мы используем 100% натуральные волосы, идеально совпадающие с вашей текстурой и волной. Точки крепления невидимы даже в хвосте — без выпадения и натяжения.",
      features: [
        "Неощутимые нанокератиновые точки крепления",
        "100% натуральные волосы премиум-класса — можно красить и укладывать",
        "Нулевой вред корням и коже головы"
      ]
    },
    fr: {
      category: "Nanotechnologie",
      title: "Micro Extensions Capillaires Ultra-Invisibles",
      serviceName: "Micro Extensions",
      description: "Notre technologie de micro-extensions chez LOCCA repose sur un système de nano-capsules qui n'ajoute aucun poids à vos cheveux et est totalement indétectable. Nous utilisons des cheveux 100% naturels assortis à votre texture et ondulation. Les points de fixation sont invisibles même en queue de cheval — aucune chute, aucune traction.",
      features: [
        "Points de fixation nano-kératine imperceptibles",
        "Cheveux 100% naturels, colorables et coiffables de qualité premium",
        "Zéro dommage aux racines et au cuir chevelu"
      ]
    }
  },
  sombre: {
    tr: {
      category: "Kademeli Açma & Tonlama",
      title: "Buz Sarısı & Sombre Renklendirme",
      serviceName: "Buz Sarısı & Sombre",
      description: "Platin ve kristal buz sarısı tonlarına ulaşırken saçın sağlığını korumak Yunus Soner Kuaför'ün en büyük uzmanlık alanıdır. Kademeli açma protokolü ve bağ koruyucu özel ürünlerle saç tellerinin elastikiyetini koruyoruz. Turunculaşmayan, dipten uca pürüzsüz ve kadife yumuşaklığında sarı tonlar sunuyoruz.",
      features: [
        "Bağ güçlendirici koruyucu açıcı formüller",
        "Turunculaşmayı önleyen kalıcı soğuk tonlama",
        "Yıpranma ve yanma riskini sıfırlayan uzman kontrolü"
      ]
    },
    en: {
      category: "Gradual Lightening & Toning",
      title: "Ice Blonde & Sombre Coloring",
      serviceName: "Ice Blonde & Sombre",
      description: "Achieving platinum and crystal ice blonde tones while preserving hair health is LOCCA's greatest expertise. With our gradual lightening protocol and bond-protecting products, we maintain the elasticity of your hair strands. We deliver non-brassy, smooth, velvet-soft blonde tones from root to tip.",
      features: [
        "Bond-strengthening protective lightening formulas",
        "Long-lasting cool toning that prevents brassiness",
        "Expert-controlled process eliminating damage and burn risk"
      ]
    },
    de: {
      category: "Stufenweise Aufhellung & Tönung",
      title: "Eisblond & Sombre Färbung",
      serviceName: "Eisblond & Sombre",
      description: "Platin- und Kristall-Eisblondtöne zu erzielen und dabei die Haargesundheit zu bewahren, ist LOCCAs größte Expertise. Mit unserem stufenweisen Aufhellungsprotokoll und bindungsschützenden Produkten erhalten wir die Elastizität Ihrer Haarsträhnen. Wir liefern nicht-orangefarbene, glatte Blondtöne in samtiger Weichheit.",
      features: [
        "Bindungsstärkende schonende Aufhellungsformeln",
        "Langanhaltende kühle Tönung gegen Orangestich",
        "Expertengesteuerte Kontrolle ohne Schäden und Verbrennungsrisiko"
      ]
    },
    ru: {
      category: "Постепенное осветление и тонирование",
      title: "Ледяной блонд и Сомбре",
      serviceName: "Ледяной блонд и Сомбре",
      description: "Достижение платиновых и кристально-ледяных блонд-тонов при сохранении здоровья волос — главная экспертиза LOCCA. С нашим протоколом постепенного осветления и связезащитными продуктами мы сохраняем эластичность волос. Мы создаём бесшовные, бархатно-мягкие блонд-тона без рыжины.",
      features: [
        "Укрепляющие связи формулы осветления",
        "Стойкое холодное тонирование против желтизны",
        "Экспертный контроль, исключающий повреждение и ожог"
      ]
    },
    fr: {
      category: "Éclaircissement Progressif & Patine",
      title: "Blond Polaire & Coloration Sombre",
      serviceName: "Blond Polaire & Sombre",
      description: "Atteindre des tons platine et blond polaire cristallin tout en préservant la santé capillaire est la plus grande expertise de LOCCA. Avec notre protocole d'éclaircissement progressif et nos produits protecteurs de liaisons, nous maintenons l'élasticité de vos cheveux. Nous offrons des tons blonds sans reflets orangés, lisses et d'une douceur veloutée.",
      features: [
        "Formules éclaircissantes renforçant les liaisons",
        "Patine froide durable empêchant les reflets cuivrés",
        "Contrôle expert éliminant tout risque de dommage"
      ]
    }
  },
  babylights: {
    tr: {
      category: "Doğal Mikro Işıltı",
      title: "Doğal Kahve & Işıltılı Geçişler (Babylights)",
      serviceName: "Babylights Işıltı",
      description: "Saçınızın ana rengini ve doğallığını bozmadan, güneşten açılmış gibi incecik ışıltılar kazandırıyoruz. Yunus Soner Kuaför'de yüz anatomisine uygun stratejik tutamlarla ışık yerleştirilir. Dip boyası mecburiyeti olmadan aylarca ilk günkü ışıltısını ve hacimli duruşunu korur.",
      features: [
        "Çizgi ve leke bırakmayan mikro tutam tekniği",
        "Düşük bakım gereksinimi (Dip boyası derdi yok)",
        "Saça derinlik ve doğal parlaklık katan geçişler"
      ]
    },
    en: {
      category: "Natural Micro Highlights",
      title: "Natural Brunette & Babylights",
      serviceName: "Babylights",
      description: "Without disturbing your base color and natural look, we add delicate sun-kissed highlights. At LOCCA, light is strategically placed using micro-strands that complement your facial anatomy. The result maintains its first-day shimmer and volume for months without root touch-up obligation.",
      features: [
        "Micro-strand technique that leaves no lines or patches",
        "Low maintenance (no root touch-up worries)",
        "Transitions that add depth and natural shine to hair"
      ]
    },
    de: {
      category: "Natürliche Mikro-Highlights",
      title: "Natürliches Braun & Babylights Übergänge",
      serviceName: "Babylights",
      description: "Ohne Ihre Grundfarbe zu verändern, verleihen wir zarte, sonnengeküsste Highlights. Bei LOCCA wird Licht strategisch mit Mikro-Strähnen platziert, die Ihre Gesichtsanatomie ergänzen. Das Ergebnis behält seinen Glanz und sein Volumen monatelang ohne Ansatz-Nachfärbepflicht.",
      features: [
        "Mikro-Strähnen-Technik ohne sichtbare Linien oder Flecken",
        "Geringer Pflegeaufwand (keine Ansatz-Sorgen)",
        "Übergänge, die dem Haar Tiefe und natürlichen Glanz verleihen"
      ]
    },
    ru: {
      category: "Натуральные микро-блики",
      title: "Натуральный шатен и блики Babylights",
      serviceName: "Babylights",
      description: "Не нарушая базовый цвет и естественный вид, мы добавляем нежные солнечные блики. В LOCCA свет стратегически размещается микропрядями, дополняющими анатомию лица. Результат сохраняет свой блеск и объём месяцами без необходимости подкрашивать корни.",
      features: [
        "Техника микропрядей без полос и пятен",
        "Минимальный уход (без забот о корнях)",
        "Переходы, добавляющие глубину и естественный блеск"
      ]
    },
    fr: {
      category: "Micro-Reflets Naturels",
      title: "Brun Naturel & Reflets Babylights",
      serviceName: "Babylights",
      description: "Sans altérer votre couleur de base, nous ajoutons de délicats reflets ensoleillés. Chez LOCCA, la lumière est stratégiquement placée avec des micro-mèches qui complètent l'anatomie de votre visage. Le résultat conserve son éclat et son volume pendant des mois sans obligation de retouche racine.",
      features: [
        "Technique micro-mèches sans lignes ni taches visibles",
        "Faible entretien (pas de souci de racines)",
        "Transitions ajoutant profondeur et brillance naturelle"
      ]
    }
  },
  gelin: {
    tr: {
      category: "Özel Gün & Tasarım",
      title: "Gelin Başı & Özel Gün Saç Tasarımı",
      serviceName: "Gelin Başı & Özel Gün",
      description: "En özel gününüzde gelinliğinizin yaka kesimine, düğün konseptine ve yüz yapınıza en uygun tasarımı Yunus Soner Kuaför'de kişiye özel planlıyoruz. Sertleşmiş ve yapay sprey görüntüsünden uzak; doğal, zarif ve gece boyu dans ederken bile formunu asla kaybetmeyen saç tasarımları uyguluyoruz.",
      features: [
        "Düğün öncesi saç provası ve aksesuar uyumu",
        "Gece boyu bozulmayan profesyonel sabitleme",
        "Duvak, taç ve canlı çiçeklerle estetik yerleşim"
      ]
    },
    en: {
      category: "Special Occasion & Design",
      title: "Bridal Hair & Special Event Styling",
      serviceName: "Bridal & Event Styling",
      description: "For your most special day, we create a custom design at LOCCA that perfectly complements your dress neckline, wedding concept, and facial features. Far from stiff, artificial spray-laden looks — we craft natural, elegant hairstyles that hold their shape all night long, even while dancing.",
      features: [
        "Pre-wedding hair trial and accessory coordination",
        "Professional hold that lasts through the entire celebration",
        "Aesthetic placement of veils, tiaras, and fresh flowers"
      ]
    },
    de: {
      category: "Besonderer Anlass & Design",
      title: "Brautfrisur & Event-Styling",
      serviceName: "Braut- & Event-Styling",
      description: "Für Ihren besonderen Tag kreieren wir bei LOCCA ein individuelles Design, das perfekt zu Ihrem Kleidausschnitt, Hochzeitskonzept und Ihrer Gesichtsform passt. Fernab von steifen, künstlich wirkenden Spray-Looks — wir gestalten natürliche, elegante Frisuren, die die ganze Nacht ihre Form behalten.",
      features: [
        "Brautfrisur-Probe und Accessoire-Abstimmung vor der Hochzeit",
        "Professioneller Halt die ganze Feier über",
        "Ästhetische Platzierung von Schleier, Diadem und frischen Blumen"
      ]
    },
    ru: {
      category: "Особый случай и дизайн",
      title: "Свадебная причёска и стилизация",
      serviceName: "Свадебная и вечерняя укладка",
      description: "Для вашего самого особенного дня мы создаём в LOCCA индивидуальный дизайн, идеально дополняющий вырез платья, концепцию свадьбы и черты лица. Никаких жёстких, искусственных лаковых образов — мы создаём естественные, элегантные причёски, сохраняющие форму всю ночь, даже во время танцев.",
      features: [
        "Пробная укладка и подбор аксессуаров до свадьбы",
        "Профессиональная фиксация на всё торжество",
        "Эстетичное размещение фаты, диадем и живых цветов"
      ]
    },
    fr: {
      category: "Occasion Spéciale & Design",
      title: "Coiffure de Mariée & Événements",
      serviceName: "Coiffure Mariée & Événements",
      description: "Pour votre jour le plus spécial, nous créons chez LOCCA un design sur-mesure qui s'harmonise parfaitement avec le décolleté de votre robe, le concept du mariage et votre morphologie. Loin des looks rigides et artificiels — nous réalisons des coiffures naturelles et élégantes qui gardent leur forme toute la nuit.",
      features: [
        "Essai coiffure et coordination des accessoires avant le mariage",
        "Tenue professionnelle qui dure toute la célébration",
        "Placement esthétique du voile, diadème et fleurs fraîches"
      ]
    }
  }
};

/**
 * Helper to get translated string with fallback to Turkish
 */
function t(key, lang = currentLang) {
  if (translations[lang] && translations[lang][key]) {
    return translations[lang][key];
  }
  if (translations.tr && translations.tr[key]) {
    return translations.tr[key];
  }
  return key;
}

// Current active language
let currentLang = 'tr';

/**
 * Initialize Language from localStorage or Browser
 */
function initLanguage() {
  const savedLang = localStorage.getItem('selected_lang');
  const validLangs = ['tr', 'en', 'de', 'ru', 'fr'];
  
  if (savedLang && validLangs.includes(savedLang.toLowerCase())) {
    currentLang = savedLang.toLowerCase();
  } else {
    // Check browser navigator language
    const browserLang = (navigator.language || navigator.userLanguage || '').slice(0, 2).toLowerCase();
    if (validLangs.includes(browserLang)) {
      currentLang = browserLang;
    } else {
      currentLang = 'tr';
    }
  }

  applyLanguage(currentLang);
}

/**
 * Switch language and re-render elements
 */
function setLanguage(lang) {
  const validLangs = ['tr', 'en', 'de', 'ru', 'fr'];
  if (!validLangs.includes(lang)) return;

  currentLang = lang;
  try {
    localStorage.setItem('selected_lang', lang);
  } catch (e) {
    console.warn('localStorage not accessible:', e);
  }

  applyLanguage(lang);
}

/**
 * Apply language to DOM elements with [data-i18n]
 */
function applyLanguage(lang) {
  // Update document lang attribute
  document.documentElement.lang = lang;

  // 1. Text Content Translations
  const translatables = document.querySelectorAll('[data-i18n]');
  translatables.forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = t(key, lang);
    if (translation) {
      // Check if translation has HTML (e.g. <br>)
      if (translation.includes('<')) {
        el.innerHTML = translation;
      } else {
        el.textContent = translation;
      }
    }
  });

  // 2. Placeholder Translations
  const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
  placeholders.forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const translation = t(key, lang);
    if (translation) {
      el.setAttribute('placeholder', translation);
    }
  });

  // 3. Update WhatsApp Booking Links
  updateWhatsAppLinks(lang);

  // 4. Update Language Selectors UI
  updateLangSelectorsUI(lang);

  // 5. Update Reels Mute Button if present
  const reelsMuteText = document.getElementById('reelsMuteText');
  if (reelsMuteText) {
    const isMutedNow = typeof isMuted !== 'undefined' ? isMuted : true;
    reelsMuteText.textContent = isMutedNow ? t('reels_mute_off', lang) : t('reels_mute_on', lang);
  }
}

/**
 * Generate localized WhatsApp booking message and link
 */
function generateWhatsAppUrl(options = {}) {
  const phone = "905071993424";
  const lang = options.lang || currentLang || 'tr';
  const { date = '', time = '', name = '', request = '' } = options;

  let text = '';
  if (date || time || name || request) {
    const customTemplates = {
      tr: `Merhaba, Locca Hair Studio için randevu talep etmek istiyorum.${date ? ` Tarih: ${date}` : ''}${time ? `, Saat: ${time}` : ''}${name ? `, İsim: ${name}` : ''}${request ? `, İşlem: ${request}` : ''}`,
      en: `Hello, I would like to request an appointment at Locca Hair Studio.${date ? ` Date: ${date}` : ''}${time ? `, Time: ${time}` : ''}${name ? `, Name: ${name}` : ''}${request ? `, Request: ${request}` : ''}`,
      de: `Hallo, ich möchte gerne einen Termin im Locca Hair Studio vereinbaren.${date ? ` Datum: ${date}` : ''}${time ? `, Uhrzeit: ${time}` : ''}${name ? `, Name: ${name}` : ''}${request ? `, Gewünschte Behandlung: ${request}` : ''}`,
      ru: `Здравствуйте, я хочу записаться на прием в салон Locca Hair Studio.${date ? ` Дата: ${date}` : ''}${time ? `, Время: ${time}` : ''}${name ? `, Имя: ${name}` : ''}${request ? `, Процедура: ${request}` : ''}`,
      fr: `Bonjour, je souhaite prendre rendez-vous chez Locca Hair Studio.${date ? ` Date: ${date}` : ''}${time ? `, Heure: ${time}` : ''}${name ? `, Nom: ${name}` : ''}${request ? `, Prestation: ${request}` : ''}`
    };
    text = customTemplates[lang] || customTemplates.tr;
  } else {
    const messages = {
      tr: "Merhaba, Locca Hair Studio için randevu almak istiyorum.",
      en: "Hello, I would like to request an appointment at Locca Hair Studio.",
      de: "Hallo, ich möchte gerne einen Termin im Locca Hair Studio vereinbaren.",
      ru: "Здравствуйте, я хочу записаться на прием в салон Locca Hair Studio.",
      fr: "Bonjour, je souhaite prendre rendez-vous chez Locca Hair Studio."
    };
    text = messages[lang] || messages.tr;
  }

  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

/**
 * Dynamic WhatsApp URL Generator tailored to language
 */
function updateWhatsAppLinks(lang) {
  const waUrl = generateWhatsAppUrl({ lang });

  // Update navbar booking buttons, drawer buttons, and floating WhatsApp buttons
  document.querySelectorAll('a[href^="https://wa.me/"]').forEach(a => {
    // Preserve service-specific modal links if open, or update generic booking buttons
    if (a.id === 'modalActionBtn') {
      return;
    }
    a.href = waUrl;
  });
}

/**
 * Update Language Switcher UI (Desktop & Mobile)
 */
function updateLangSelectorsUI(lang) {
  // Find all language buttons/options
  document.querySelectorAll('[data-lang-btn]').forEach(btn => {
    const btnLang = btn.getAttribute('data-lang-btn');
    if (btnLang === lang) {
      btn.classList.add('font-bold', 'text-luxedark', 'scale-105');
      btn.classList.remove('text-subtletext', 'opacity-60');
      btn.setAttribute('aria-current', 'true');
    } else {
      btn.classList.remove('font-bold', 'text-luxedark', 'scale-105');
      btn.classList.add('text-subtletext', 'opacity-60');
      btn.removeAttribute('aria-current');
    }
  });
}

/**
 * Get localized transformation data for modal
 */
function getTransformationData(key) {
  const data = transformationDataI18n[key];
  if (!data) return null;
  
  const lang = currentLang || 'tr';
  return data[lang] || data.tr;
}

// Auto-run on DOM load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLanguage);
} else {
  initLanguage();
}
