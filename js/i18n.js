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

    // FAQ Section
    "sec_faq_sub": "merak edilenler",
    "sec_faq_title": "SIKÇA SORULAN SORULAR",

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

    // FAQ Section
    "sec_faq_sub": "frequently asked",
    "sec_faq_title": "FREQUENTLY ASKED QUESTIONS",

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

    // Bento / Signature Transformations
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

    // Philosophy / Studio Section
    "sec_philosophy_sub": "eine erstklassige haaroase in manavgat",
    "sec_philosophy_title": "LOCCA HAIR STUDIO",
    "sec_philosophy_desc": "\"In Aşağı Hisar bieten wir Ihnen in unserem Salon eine herzliche und professionelle Betreuung. Wir verlängern Ihr Haar schonend, färben in natürlichen Tönen und schenken Ihnen die Aufmerksamkeit, die Sie verdienen.\"",
    "btn_about_locca": "ÜBER LOCCA KUAFÖR",

    // 4 Main Services Grid
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

    // Reviews Section
    "sec_reviews_sub": "echte erfahrungen",
    "sec_reviews_title": "KUNDENBEWERTUNGEN",
    "reviews_rating_note": "Über 370 verifizierte Kundenstimmen auf Google",

    // FAQ Section
    "sec_faq_sub": "oft gefragt",
    "sec_faq_title": "HÄUFIG GESTELLTE FRAGEN",

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
    
    // Modal
    "modal_expertise_label": "LOCCA Hair Studio • Signatur Spezialität",
    "modal_advantages": "Besondere Vorteile",
    "modal_btn_book": "Diesen Service anfragen",
    "modal_notice": "* Ihre Terminanfrage wird direkt an unsere WhatsApp-Nummer +90 507 199 34 24 gesendet.",

    // WhatsApp Default Templates
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

    // Hero Section
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

    // Bento / Signature Transformations
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

    // Philosophy / Studio Section
    "sec_philosophy_sub": "лучшее место для ваших волос в манавгате",
    "sec_philosophy_title": "LOCCA HAIR STUDIO",
    "sec_philosophy_desc": "\"В районе Aşağı Hisar мы создаем стильные образы в уютной и профессиональной обстановке. Мы бережно удлиняем волосы, красим в натуральные оттенки и окружаем вас заботой.\"",
    "btn_about_locca": "О САЛОНЕ LOCCA",

    // 4 Main Services Grid
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

    // Reviews Section
    "sec_reviews_sub": "реальные впечатления",
    "sec_reviews_title": "ОТЗЫВЫ КЛИЕНТОВ",
    "reviews_rating_note": "Более 370 подтвержденных отзывов на Google",

    // FAQ Section
    "sec_faq_sub": "частые вопросы",
    "sec_faq_title": "ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ",

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
    
    // Modal
    "modal_expertise_label": "LOCCA Hair Studio • Фирменная услуга",
    "modal_advantages": "Главные преимущества",
    "modal_btn_book": "Записаться на эту процедуру",
    "modal_notice": "* Ваш запрос будет отправлен напрямую на номер WhatsApp +90 507 199 34 24.",

    // WhatsApp Default Templates
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

    // Hero Section
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

    // Bento / Signature Transformations
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

    // Philosophy / Studio Section
    "sec_philosophy_sub": "une adresse d'exception à manavgat",
    "sec_philosophy_title": "LOCCA HAIR STUDIO",
    "sec_philosophy_desc": "\"Dans le quartier d'Aşağı Hisar, nous vous accueillons dans une ambiance chaleureuse et raffinée. Nous sublimons votre chevelure avec soin, dans des tons naturels et avec l'exigence que vous méritez.\"",
    "btn_about_locca": "À PROPOS DE LOCCA",

    // 4 Main Services Grid
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

    // Reviews Section
    "sec_reviews_sub": "expériences vécues",
    "sec_reviews_title": "AVIS CLIENTS",
    "reviews_rating_note": "Plus de 370 avis vérifiés sur Google",

    // FAQ Section
    "sec_faq_sub": "questions fréquentes",
    "sec_faq_title": "FOIRE AUX QUESTIONS",

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
    
    // Modal
    "modal_expertise_label": "LOCCA Hair Studio • Spécialité Signature",
    "modal_advantages": "Avantages Clés",
    "modal_btn_book": "Réserver Cette Prestation",
    "modal_notice": "* Votre demande de rendez-vous sera transmise directement sur notre WhatsApp +90 507 199 34 24.",

    // WhatsApp Default Templates
    "wa_booking_msg": "Bonjour, je souhaite prendre rendez-vous chez Locca Hair Studio."
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

// Auto-run on DOM load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLanguage);
} else {
  initLanguage();
}
