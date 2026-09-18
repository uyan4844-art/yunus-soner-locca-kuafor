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
    "hero_subtitle": "imzanız olacak",
    "hero_title": "KUSURSUZ DÖNÜŞÜM",
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
    "sec_signature_sub": "ustalıkla seçilmiş",
    "sec_signature_title": "İMZA DÖNÜŞÜMLER",
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
    "sec_philosophy_sub": "manavgat'ta bir saç durağı",
    "sec_philosophy_title": "LOCCA HAIR STUDIO",
    "sec_philosophy_desc": "\"Aşağı Hisar Mahallesi'nde, kendi yerimizde samimi ve profesyonel bir ortamda hizmet veriyoruz. Saçınızı yıpratmadan uzatmak, doğal tonlarda renklendirmek ve hak ettiğiniz özeni göstermek için buradayız.\"",
    "btn_about_locca": "LOCCA KUAFÖR HAKKINDA",

    // 4 Main Services Grid
    "sec_services_sub": "ayrıcalıklı dokunuşlar",
    "sec_services_title": "UZMANLIK ALANLARIMIZ",
    "srv_1_title": "MİKRO KAYNAK",
    "srv_1_desc": "Hissedilmeyen nano kapsül ve doğal yoğun hacim",
    "srv_2_title": "BUZ SARISI",
    "srv_2_desc": "Kademeli açma ve yıpranmayan soğuk sarı tonlar",
    "srv_3_title": "DOĞAL IŞILTI",
    "srv_3_desc": "Güneşten açılmış gibi incecik babylights geçişleri",
    "srv_4_title": "KERATİN TERAPİ",
    "srv_4_desc": "Keratin botoks ve aynamsı parlaklık veren nem kürü",

    // Reviews Section
    "sec_reviews_sub": "gerçek deneyimler",
    "sec_reviews_title": "MÜŞTERİ YORUMLARI",
    "reviews_rating_note": "Google'da doğrulanmış 370+ misafir deneyimi",
    "review_verified": "Doğrulandı",
    "review_owner_reply": "İşletme Sahibinin Yanıtı",

    // LOCCA Ritüeli (3 Steps)
    "ritual_sub": "nasıl çalışıyoruz",
    "ritual_title": "KUSURSUZLUĞA GİDEN 3 ADIM",
    "ritual_1_title": "SAÇ ANALİZİ & KONSÜLTASYON",
    "ritual_1_desc": "\"Yüz anatominize, saç yoğunluğunuza ve geçmiş boya geçmişinize özel planlama.\"",
    "ritual_2_title": "KORUYUCU VE ÖZENLİ UYGULAMA",
    "ritual_2_desc": "\"Saç bağlarını koruyan özel açıcılar ve hissedilmeyen mikro kapsül teknolojisi.\"",
    "ritual_3_title": "İMZA DOKUNUŞ & TAKİP",
    "ritual_3_desc": "\"Aylarca formunu koruyan pürüzsüz saçlar ve evde bakım tavsiyeleri.\"",

    // Instagram Reels Section
    "reels_live_badge": "Canlı Stüdyo Çekimleri",
    "reels_sub": "canlı dönüşümler & reels",
    "reels_title": "INSTAGRAM'DA LOCCA",
    "reels_desc": "@yunus_soner_loca_hairdesing • Canlı stüdyo seanslarımızı, mikro kaynak montajlarını ve kristal sarı dönüşüm anlarını kaydırarak keşfedin.",
    "reels_more_btn": "Daha Fazla Reels İçin Instagram",
    "reels_mute_off": "Ses Kapalı",
    "reels_mute_on": "Ses Açık",

    // FAQ Section
    "sec_faq_sub": "merak edilenler",
    "sec_faq_title": "SIKÇA SORULAN SORULAR",
    "faq_q1": "Mikro kaynak kendi saçlarıma zarar verir mi?",
    "faq_a1": "\"Hayır. Kullandığımız mikro kapsüller saç teline ağırlık yapmaz, hava almasını engellemez ve çıkarma işleminde saça zarar vermez.\"",
    "faq_q2": "İşlem fiyatları neden salonda belirleniyor?",
    "faq_a2": "\"Her kadının saç boyu, yoğunluğu ve geçmiş işlem durumu farklıdır. Size en doğru ve dürüst fiyatı sunabilmek için analiz sonrası netleştiriyoruz.\"",
    "faq_q3": "Saç açma ve renklendirmede yıpranma yaşar mıyım?",
    "faq_a3": "\"Bağ koruyucu özel solüsyonlar ve kademeli açma teknikleriyle saç tellerinizin elastikiyetini koruyoruz.\"",
    "faq_q4": "Randevumu ne kadar önceden almalıyım?",
    "faq_a4": "\"Özellikle mikro kaynak ve ombre gibi kapsamlı işlemler için en az 2-3 gün öncesinden randevu oluşturmanızı öneriyoruz.\"",

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
    "hp_sub": "ustalık ve samimi özenle",
    "hp_title": "UZMANLIK ALANLARIMIZ VE TEKNİKLERİMİZ",
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
    "hp_cta_sub": "saçınızın hikayesi burada başlar",
    "hp_cta_title": "HAYALİNİZDEKİ SAÇ İÇİN BİZE DANIŞIN",
    "hp_cta_desc": "Size en uygun seansı belirlemek için salon sahibimiz Yunus Soner ile yüz yüze veya telefonla görüşebilirsiniz.",
    "hp_cta_book": "Hemen Randevu Al",
    "hp_cta_consult": "WhatsApp İle Danışın",

    // ===== HAKKIMIZDA PAGE =====
    "ap_sub": "hikayemiz ve felsefemiz",
    "ap_title": "YUNUS SONER & LOCCA KUAFÖR",
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
    "ap_cta_sub": "sizi dinlemek için buradayız",
    "ap_cta_title": "SAÇINIZI BİRLİKTE PLANLAYALIM",
    "ap_cta_desc": "Saç durumunuzu değerlendirmek, uygun seansı seçmek ve merak ettiklerinizi sormak için hemen bizimle iletişime geçin.",
    "ap_cta_consult": "WhatsApp Danışma",

    // WhatsApp Default Templates
    "wa_booking_msg": "Merhaba, Locca Hair Studio için randevu almak istiyorum."
  },

  en: {
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
    "hero_subtitle": "your signature",
    "hero_title": "NATURAL HAIR DESIGN & EXTENSIONS",
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
    "sec_signature_sub": "masterfully curated",
    "sec_signature_title": "SIGNATURE TRANSFORMATIONS",
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
    "sec_philosophy_sub": "a premier hair destination in manavgat",
    "sec_philosophy_title": "LOCCA HAIR STUDIO",
    "sec_philosophy_desc": "\"Located in Aşağı Hisar, we offer warm and professional bespoke care in our dedicated studio. We are here to extend your hair gently, color in natural tones, and give your hair the luxury care it deserves.\"",
    "btn_about_locca": "ABOUT LOCCA SALON",

    // 4 Main Services Grid
    "sec_services_sub": "exclusive touches",
    "sec_services_title": "OUR SPECIALTIES",
    "srv_1_title": "MICRO EXTENSIONS",
    "srv_1_desc": "Undetectable nano-capsules and natural, voluminous density",
    "srv_2_title": "ICE BLONDE & SOMBRE",
    "srv_2_desc": "Damage-free gradual lifting and luminous cool blonde tones",
    "srv_3_title": "NATURAL BABYLIGHTS",
    "srv_3_desc": "Subtle, sun-kissed delicate babylight transitions",
    "srv_4_title": "KERATIN THERAPY",
    "srv_4_desc": "Keratin botox and mirror-shine deep conditioning treatment",

    // Reviews Section
    "sec_reviews_sub": "authentic experiences",
    "sec_reviews_title": "CLIENT REVIEWS",
    "reviews_rating_note": "370+ verified guest reviews on Google",
    "review_verified": "Verified",
    "review_owner_reply": "Owner's Response",

    // LOCCA Ritüeli (3 Steps)
    "ritual_sub": "how we work",
    "ritual_title": "3 STEPS TO PERFECTION",
    "ritual_1_title": "HAIR ANALYSIS & CONSULTATION",
    "ritual_1_desc": "\"Custom planning based on your facial anatomy, hair density, and previous color history.\"",
    "ritual_2_title": "PROTECTIVE & METICULOUS APPLICATION",
    "ritual_2_desc": "\"Bond-preserving lighteners and undetectable micro-capsule technology.\"",
    "ritual_3_title": "SIGNATURE FINISH & AFTERCARE",
    "ritual_3_desc": "\"Silky smooth hair that holds its form for months, plus at-home care guidance.\"",

    // Instagram Reels Section
    "reels_live_badge": "Live Studio Sessions",
    "reels_sub": "live transformations & reels",
    "reels_title": "LOCCA ON INSTAGRAM",
    "reels_desc": "@yunus_soner_loca_hairdesing • Swipe to explore our live studio sessions, micro extension applications and crystal blonde transformations.",
    "reels_more_btn": "More Reels on Instagram",
    "reels_mute_off": "Sound Off",
    "reels_mute_on": "Sound On",

    // FAQ Section
    "sec_faq_sub": "frequently asked",
    "sec_faq_title": "FREQUENTLY ASKED QUESTIONS",
    "faq_q1": "Will micro extensions damage my natural hair?",
    "faq_a1": "\"No. Our micro capsules are weightless, allow your hair to breathe, and do not cause any damage during removal.\"",
    "faq_q2": "Why are prices determined at the salon?",
    "faq_a2": "\"Every woman's hair length, density, and treatment history is different. We finalize pricing after an in-person analysis to give you the most honest quote.\"",
    "faq_q3": "Will I experience damage from coloring and lightening?",
    "faq_a3": "\"We use bond-protecting solutions and gradual lightening techniques to preserve your hair's elasticity.\"",
    "faq_q4": "How far in advance should I book?",
    "faq_a4": "\"For comprehensive treatments like micro extensions and ombre, we recommend booking at least 2-3 days ahead.\"",

    // CTA / Footer
    "cta_sub": "plan your visit",
    "cta_title": "TAKE THE FIRST STEP TOWARDS YOUR DREAM HAIR",
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
    "hp_sub": "with expertise and genuine care",
    "hp_title": "OUR SPECIALTIES & TECHNIQUES",
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
    "hp_s3_how_desc": "Without disturbing your hair's natural base and color, we add delicate, sun-kissed highlights. Instead of harsh foils with visible lines, we apply micro-strands (babylights) that blend seamlessly with your hair's natural flow.",
    "hp_s3_approach_desc": "We design low-maintenance colorings that don't require root touch-ups and maintain their natural look as your hair grows out.",
    "hp_s4_label": "04 / DEEP REPAIR & CARE",
    "hp_s4_badge": "Silky Repair",
    "hp_s4_title": "Hair Therapy & Keratin Botox",
    "hp_s4_how_desc": "We infuse keratin and amino acids into hair strands damaged by heat and chemicals that have lost their moisture. By sealing the cuticle, we achieve a smooth, frizz-free, light-reflecting silky texture.",
    "hp_s4_approach_desc": "Without artificially straightening hair like permanent treatments, we restore a healthy, full, and glossy look while preserving your hair's natural movement and wave.",
    "hp_cta_sub": "your hair story begins here",
    "hp_cta_title": "CONSULT US FOR YOUR DREAM HAIR",
    "hp_cta_desc": "To determine the best session for you, you can meet with our salon owner Yunus Soner in person or by phone.",
    "hp_cta_book": "Book Now",
    "hp_cta_consult": "Consult via WhatsApp",

    // ===== HAKKIMIZDA PAGE =====
    "ap_sub": "our story and philosophy",
    "ap_title": "YUNUS SONER & LOCCA SALON",
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
    "ap_cta_sub": "we are here to listen",
    "ap_cta_title": "LET'S PLAN YOUR HAIR TOGETHER",
    "ap_cta_desc": "Contact us now to evaluate your hair condition, choose the right session, and ask any questions you may have.",
    "ap_cta_consult": "WhatsApp Consultation",

    // WhatsApp Default Templates
    "wa_booking_msg": "Hello, I would like to request an appointment at Locca Hair Studio."
  },

  de: {
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
    "hero_subtitle": "Ihre Signatur",
    "hero_title": "NATÜRLICHES HAARDESIGN & EXTENSIONS",
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
    "sec_signature_sub": "meisterhaft kreiert",
    "sec_signature_title": "SIGNATUR VERWANDLUNGEN",
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
    "sec_philosophy_sub": "eine erstklassige haaroase in manavgat",
    "sec_philosophy_title": "LOCCA HAIR STUDIO",
    "sec_philosophy_desc": "\"In Aşağı Hisar bieten wir Ihnen in unserem Salon eine herzliche und professionelle Betreuung. Wir verlängern Ihr Haar schonend, färben in natürlichen Tönen und schenken Ihnen die Aufmerksamkeit, die Sie verdienen.\"",
    "btn_about_locca": "ÜBER LOCCA KUAFÖR",

    // Services Grid
    "sec_services_sub": "exklusive akzente",
    "sec_services_title": "UNSERE SPEZIALGEBIETE",
    "srv_1_title": "MIKRO EXTENSIONS",
    "srv_1_desc": "Kaum spürbare Nano-Kapseln und natürliches, volles Volumen",
    "srv_2_title": "EISBLOND & SOMBRE",
    "srv_2_desc": "Haarschonende Aufhellung und langanhaltend kühle Nuancen",
    "srv_3_title": "NATÜRLICHE HIGHLIGHTS",
    "srv_3_desc": "Wie von der Sonne geküsste, feine Babylights-Reflexe",
    "srv_4_title": "KERATIN THERAPIE",
    "srv_4_desc": "Keratin Botox und spiegelglänzende Tiefenpflege",

    // Reviews
    "sec_reviews_sub": "echte erfahrungen",
    "sec_reviews_title": "KUNDENBEWERTUNGEN",
    "reviews_rating_note": "Über 370 verifizierte Kundenstimmen auf Google",
    "review_verified": "Verifiziert",
    "review_owner_reply": "Antwort des Inhabers",

    // Ritual
    "ritual_sub": "wie wir arbeiten",
    "ritual_title": "3 SCHRITTE ZUR PERFEKTION",
    "ritual_1_title": "HAARANALYSE & BERATUNG",
    "ritual_1_desc": "\"Individuelle Planung basierend auf Ihrer Gesichtsform, Haardichte und Farbhistorie.\"",
    "ritual_2_title": "SCHONENDE & SORGFÄLTIGE ANWENDUNG",
    "ritual_2_desc": "\"Bindungsschonende Aufheller und kaum spürbare Mikro-Kapseltechnologie.\"",
    "ritual_3_title": "SIGNATUR-FINISH & NACHSORGE",
    "ritual_3_desc": "\"Monatelang seidig glattes Haar und professionelle Pflegehinweise für zu Hause.\"",

    // Reels
    "reels_live_badge": "Live Studio-Aufnahmen",
    "reels_sub": "live verwandlungen & reels",
    "reels_title": "LOCCA AUF INSTAGRAM",
    "reels_desc": "@yunus_soner_loca_hairdesing • Entdecken Sie unsere Live-Studio-Sitzungen, Mikro-Extensions-Anwendungen und kristallblonde Verwandlungen.",
    "reels_more_btn": "Mehr Reels auf Instagram",
    "reels_mute_off": "Ton aus",
    "reels_mute_on": "Ton an",

    // FAQ
    "sec_faq_sub": "oft gefragt",
    "sec_faq_title": "HÄUFIG GESTELLTE FRAGEN",
    "faq_q1": "Schaden Mikro Extensions meinem Eigenhaar?",
    "faq_a1": "\"Nein. Unsere Mikro-Kapseln sind federleicht, lassen Ihr Haar atmen und verursachen bei der Entfernung keinen Schaden.\"",
    "faq_q2": "Warum werden die Preise im Salon festgelegt?",
    "faq_a2": "\"Jede Frau hat unterschiedliche Haarlängen, -dichten und Behandlungshistorien. Um Ihnen den fairsten Preis zu nennen, klären wir dies nach einer persönlichen Analyse.\"",
    "faq_q3": "Wird mein Haar durch Aufhellung und Färbung beschädigt?",
    "faq_a3": "\"Wir verwenden bindungsschützende Lösungen und stufenweise Aufhellungstechniken, um die Elastizität Ihres Haares zu bewahren.\"",
    "faq_q4": "Wie weit im Voraus sollte ich buchen?",
    "faq_a4": "\"Für umfassende Behandlungen wie Mikro Extensions und Ombre empfehlen wir eine Buchung mindestens 2-3 Tage im Voraus.\"",

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
    "hp_cta_sub": "Ihre Haargeschichte beginnt hier",
    "hp_cta_title": "BERATEN SIE SICH MIT UNS FÜR IHR TRAUMHAAR",
    "hp_cta_desc": "Um die beste Sitzung für Sie zu bestimmen, können Sie unseren Saloninhaber Yunus Soner persönlich oder telefonisch treffen.",
    "hp_cta_book": "Jetzt buchen",
    "hp_cta_consult": "Per WhatsApp beraten",

    // Hakkımızda Page
    "ap_sub": "unsere Geschichte und Philosophie",
    "ap_title": "YUNUS SONER & LOCCA SALON",
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
    "ap_cta_sub": "wir sind hier, um zuzuhören",
    "ap_cta_title": "LASSEN SIE UNS IHR HAAR GEMEINSAM PLANEN",
    "ap_cta_desc": "Kontaktieren Sie uns jetzt, um Ihren Haarzustand zu beurteilen, die richtige Sitzung zu wählen und alle Fragen zu stellen.",
    "ap_cta_consult": "WhatsApp Beratung",

    "wa_booking_msg": "Hallo, ich möchte gerne einen Termin im Locca Hair Studio vereinbaren."
  },

  ru: {
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
    "hero_subtitle": "ваш стиль",
    "hero_title": "НАТУРАЛЬНЫЙ ДИЗАЙН И НАРАЩИВАНИЕ ВОЛОС",
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
    "sec_signature_sub": "мастерство и стиль",
    "sec_signature_title": "ФИРМЕННЫЕ ПРЕОБРАЖЕНИЯ",
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
    "sec_philosophy_sub": "лучшее место для ваших волос в манавгате",
    "sec_philosophy_title": "LOCCA HAIR STUDIO",
    "sec_philosophy_desc": "\"В районе Aşağı Hisar мы создаем стильные образы в уютной и профессиональной обстановке. Мы бережно удлиняем волосы, красим в натуральные оттенки и окружаем вас заботой.\"",
    "btn_about_locca": "О САЛОНЕ LOCCA",

    // Services Grid
    "sec_services_sub": "премиальный уход",
    "sec_services_title": "НАШИ НАПРАВЛЕНИЯ",
    "srv_1_title": "МИКРОНАРАЩИВАНИЕ",
    "srv_1_desc": "Неощутимые нанокапсулы и естественный густой объем",
    "srv_2_title": "ЛЕДЯНОЙ БЛОНД",
    "srv_2_desc": "Бережное осветление без повреждений и стойкие холодные оттенки",
    "srv_3_title": "НАТУРАЛЬНЫЕ БЛИКИ",
    "srv_3_desc": "Эффект выгоревших на солнце прядей техникой Babylights",
    "srv_4_title": "КЕРАТИН И БОТОКС",
    "srv_4_desc": "Глубокое восстановление, питание и зеркальный блеск",

    // Reviews
    "sec_reviews_sub": "реальные впечатления",
    "sec_reviews_title": "ОТЗЫВЫ КЛИЕНТОВ",
    "reviews_rating_note": "Более 370 подтвержденных отзывов на Google",
    "review_verified": "Проверено",
    "review_owner_reply": "Ответ владельца",

    // Ritual
    "ritual_sub": "как мы работаем",
    "ritual_title": "3 ШАГА К СОВЕРШЕНСТВУ",
    "ritual_1_title": "АНАЛИЗ ВОЛОС И КОНСУЛЬТАЦИЯ",
    "ritual_1_desc": "\"Индивидуальное планирование с учётом анатомии лица, густоты волос и истории окрашивания.\"",
    "ritual_2_title": "БЕРЕЖНОЕ И ТЩАТЕЛЬНОЕ НАНЕСЕНИЕ",
    "ritual_2_desc": "\"Осветлители, сохраняющие связи волос, и незаметная микрокапсульная технология.\"",
    "ritual_3_title": "ФИРМЕННЫЙ ФИНИШ И УХОД",
    "ritual_3_desc": "\"Шелковисто-гладкие волосы, сохраняющие форму месяцами, и советы по домашнему уходу.\"",

    // Reels
    "reels_live_badge": "Живые съёмки в студии",
    "reels_sub": "живые преображения и reels",
    "reels_title": "LOCCA В INSTAGRAM",
    "reels_desc": "@yunus_soner_loca_hairdesing • Листайте, чтобы увидеть наши живые сеансы, наращивание и трансформации в кристальный блонд.",
    "reels_more_btn": "Больше Reels в Instagram",
    "reels_mute_off": "Звук выкл",
    "reels_mute_on": "Звук вкл",

    // FAQ
    "sec_faq_sub": "частые вопросы",
    "sec_faq_title": "ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ",
    "faq_q1": "Навредит ли микронаращивание моим волосам?",
    "faq_a1": "\"Нет. Наши микрокапсулы невесомы, позволяют волосам дышать и не повреждают их при снятии.\"",
    "faq_q2": "Почему цены определяются в салоне?",
    "faq_a2": "\"У каждой женщины разная длина, густота и история обработки волос. Чтобы назвать вам максимально честную цену, мы уточняем её после личного осмотра.\"",
    "faq_q3": "Повредится ли волосы при осветлении и окрашивании?",
    "faq_a3": "\"Мы используем связезащитные растворы и методы постепенного осветления для сохранения эластичности волос.\"",
    "faq_q4": "За сколько дней нужно записываться?",
    "faq_a4": "\"Для комплексных процедур, таких как микронаращивание и омбре, рекомендуем записываться минимум за 2-3 дня.\"",

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
    "hp_cta_sub": "история ваших волос начинается здесь",
    "hp_cta_title": "ПРОКОНСУЛЬТИРУЙТЕСЬ С НАМИ",
    "hp_cta_desc": "Чтобы подобрать оптимальный сеанс, вы можете встретиться с владельцем салона Юнусом Сонером лично или по телефону.",
    "hp_cta_book": "Записаться сейчас",
    "hp_cta_consult": "Консультация в WhatsApp",

    // Hakkımızda Page
    "ap_sub": "наша история и философия",
    "ap_title": "ЮНУС СОНЕР И САЛОН LOCCA",
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
    "ap_cta_sub": "мы здесь, чтобы выслушать вас",
    "ap_cta_title": "СПЛАНИРУЕМ ВАШИ ВОЛОСЫ ВМЕСТЕ",
    "ap_cta_desc": "Свяжитесь с нами сейчас, чтобы оценить состояние волос, выбрать подходящий сеанс и задать любые вопросы.",
    "ap_cta_consult": "Консультация в WhatsApp",

    "wa_booking_msg": "Здравствуйте, я хочу записаться на прием в салон Locca Hair Studio."
  },

  fr: {
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
    "hero_subtitle": "votre signature",
    "hero_title": "DESIGN CAPILLAIRE NATUREL & EXTENSIONS",
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
    "sec_signature_sub": "sélection d'excellence",
    "sec_signature_title": "TRANSFORMATIONS SIGNATURE",
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
    "sec_philosophy_sub": "une adresse d'exception à manavgat",
    "sec_philosophy_title": "LOCCA HAIR STUDIO",
    "sec_philosophy_desc": "\"Dans le quartier d'Aşağı Hisar, nous vous accueillons dans une ambiance chaleureuse et raffinée. Nous sublimons votre chevelure avec soin, dans des tons naturels et avec l'exigence que vous méritez.\"",
    "btn_about_locca": "À PROPOS DE LOCCA",

    // Services Grid
    "sec_services_sub": "touches exclusives",
    "sec_services_title": "NOS EXPERTISES",
    "srv_1_title": "MICRO EXTENSIONS",
    "srv_1_desc": "Nano-capsules imperceptibles et volume dense naturel",
    "srv_2_title": "BLOND POLAIRE & SOMBRE",
    "srv_2_desc": "Décoloration maîtrisée et reflets froids lumineux",
    "srv_3_title": "BABYLIGHTS NATURELS",
    "srv_3_desc": "Effet soleil délicat et fondus subtils",
    "srv_4_title": "THÉRAPIE KÉRATINE",
    "srv_4_desc": "Botox capillaire et soin profond brillance miroir",

    // Reviews
    "sec_reviews_sub": "expériences vécues",
    "sec_reviews_title": "AVIS CLIENTS",
    "reviews_rating_note": "Plus de 370 avis vérifiés sur Google",
    "review_verified": "Vérifié",
    "review_owner_reply": "Réponse du propriétaire",

    // Ritual
    "ritual_sub": "notre méthode de travail",
    "ritual_title": "3 ÉTAPES VERS LA PERFECTION",
    "ritual_1_title": "ANALYSE CAPILLAIRE & CONSULTATION",
    "ritual_1_desc": "\"Planification personnalisée selon votre morphologie, densité capillaire et historique colorimétrique.\"",
    "ritual_2_title": "APPLICATION PROTECTRICE & MINUTIEUSE",
    "ritual_2_desc": "\"Décolorants préservant les liaisons et technologie micro-capsule imperceptible.\"",
    "ritual_3_title": "FINITION SIGNATURE & SUIVI",
    "ritual_3_desc": "\"Des cheveux soyeux qui gardent leur forme pendant des mois et des conseils d'entretien à domicile.\"",

    // Reels
    "reels_live_badge": "Tournages en Direct du Studio",
    "reels_sub": "transformations en direct & reels",
    "reels_title": "LOCCA SUR INSTAGRAM",
    "reels_desc": "@yunus_soner_loca_hairdesing • Faites défiler pour découvrir nos séances en direct, applications micro-extensions et transformations blond cristallin.",
    "reels_more_btn": "Plus de Reels sur Instagram",
    "reels_mute_off": "Son coupé",
    "reels_mute_on": "Son activé",

    // FAQ
    "sec_faq_sub": "questions fréquentes",
    "sec_faq_title": "FOIRE AUX QUESTIONS",
    "faq_q1": "Les micro extensions abîment-elles mes cheveux naturels ?",
    "faq_a1": "\"Non. Nos micro-capsules sont ultra-légères, laissent respirer vos cheveux et ne causent aucun dommage lors du retrait.\"",
    "faq_q2": "Pourquoi les prix sont-ils déterminés au salon ?",
    "faq_a2": "\"Chaque femme a une longueur, densité et historique de traitement différents. Pour vous offrir le prix le plus juste, nous finalisons après une analyse en personne.\"",
    "faq_q3": "Mes cheveux seront-ils abîmés par la coloration et le décoloration ?",
    "faq_a3": "\"Nous utilisons des solutions protectrices de liaisons et des techniques d'éclaircissement progressif pour préserver l'élasticité de vos cheveux.\"",
    "faq_q4": "Combien de temps à l'avance dois-je réserver ?",
    "faq_a4": "\"Pour des traitements complets comme les micro extensions et l'ombre, nous recommandons de réserver au moins 2 à 3 jours à l'avance.\"",

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
    "hp_cta_sub": "l'histoire de vos cheveux commence ici",
    "hp_cta_title": "CONSULTEZ-NOUS POUR VOS CHEVEUX DE RÊVE",
    "hp_cta_desc": "Pour déterminer la meilleure séance pour vous, vous pouvez rencontrer notre propriétaire Yunus Soner en personne ou par téléphone.",
    "hp_cta_book": "Réserver Maintenant",
    "hp_cta_consult": "Conseil via WhatsApp",

    // Hakkımızda Page
    "ap_sub": "notre histoire et notre philosophie",
    "ap_title": "YUNUS SONER & SALON LOCCA",
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
    "ap_cta_sub": "nous sommes là pour vous écouter",
    "ap_cta_title": "PLANIFIONS VOS CHEVEUX ENSEMBLE",
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
