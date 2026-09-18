<?php
/**
 * LOCCA Hair Studio - Online Randevu & Slot Yönetim API'si
 * 
 * Hostinger ve standart PHP sunucularında harici veritabanı (MySQL/PostgreSQL) 
 * gerektirmeden çalışır. Verileri aynı dizindeki 'randevular.json' dosyasında saklar.
 */

// Hata raporlama ayarları ve JSON/CORS başlıkları
error_reporting(0);
ini_set('display_errors', '0');

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');

// OPTIONS Preflight kontrolü
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Randevuların saklanacağı JSON dosyası yolu
$jsonFile = __DIR__ . '/randevular.json';

/**
 * JSON dosyasından randevu verilerini güvenli bir şekilde okur.
 */
function getRandevular($file) {
    if (!file_exists($file)) {
        file_put_contents($file, json_encode([], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT), LOCK_EX);
        return [];
    }
    
    $fp = fopen($file, 'r');
    if (!$fp) {
        $content = file_get_contents($file);
        $decoded = json_decode($content, true);
        return is_array($decoded) ? $decoded : [];
    }
    
    flock($fp, LOCK_SH);
    $filesize = filesize($file);
    $content = $filesize > 0 ? fread($fp, $filesize) : '';
    flock($fp, LOCK_UN);
    fclose($fp);
    
    if (empty($content)) {
        return [];
    }
    
    $decoded = json_decode($content, true);
    return is_array($decoded) ? $decoded : [];
}

/**
 * Randevu verilerini JSON dosyasına kilitli (LOCK_EX) şekilde kaydeder.
 */
function saveRandevular($file, $data) {
    $cleanData = array_values($data);
    $json = json_encode($cleanData, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    return file_put_contents($file, $json, LOCK_EX) !== false;
}

/**
 * XSS ve özel karakter temizleme fonksiyonu.
 */
function temizle($val) {
    if ($val === null) return '';
    return htmlspecialchars(trim((string)$val), ENT_QUOTES, 'UTF-8');
}

$requestMethod = $_SERVER['REQUEST_METHOD'];

// ============================================================================
// 1. GET İSTEKLERİ: Randevu ve Boş/Dolu Slot Sorgulama
// ============================================================================
if ($requestMethod === 'GET') {
    $randevular = getRandevular($jsonFile);

    // URL'den 'tarih' parametresi gelmişse
    if (isset($_GET['tarih']) && !empty(trim($_GET['tarih']))) {
        $tarih = temizle($_GET['tarih']);

        // Seçilen tarihe ait randevuları filtrele
        $gunlukKayitlar = array_values(array_filter($randevular, function($item) use ($tarih) {
            return isset($item['tarih']) && $item['tarih'] === $tarih && ($item['durum'] ?? 'dolu') === 'dolu';
        }));

        // Admin veya detaylı inceleme modu (?detay=1)
        if (isset($_GET['detay']) && $_GET['detay'] == '1') {
            echo json_encode([
                'success' => true,
                'tarih' => $tarih,
                'randevular' => $gunlukKayitlar
            ], JSON_UNESCAPED_UNICODE);
            exit;
        }

        // Müşteri ekranı için o tarihteki DOLU saatlerin listesi
        $doluSaatler = array_values(array_unique(array_map(function($item) {
            return $item['saat'];
        }, $gunlukKayitlar)));

        echo json_encode($doluSaatler, JSON_UNESCAPED_UNICODE);
        exit;
    }

    // Tarih parametresi yoksa tüm kayıtları dönsün
    echo json_encode($randevular, JSON_UNESCAPED_UNICODE);
    exit;
}

// ============================================================================
// 2. POST İSTEKLERİ: Randevu Ekleme veya Silme (Saati Boşa Çıkarma)
// ============================================================================
if ($requestMethod === 'POST') {
    // Hem standart POST (FormData / form-urlencoded) hem de JSON gövdesi desteği
    $input = $_POST;
    if (empty($input)) {
        $rawPayload = file_get_contents('php://input');
        if (!empty($rawPayload)) {
            $jsonParsed = json_decode($rawPayload, true);
            if (is_array($jsonParsed)) {
                $input = $jsonParsed;
            }
        }
    }

    $action = temizle($input['action'] ?? '');
    $randevular = getRandevular($jsonFile);

    // ------------------------------------------------------------------------
    // ACTION: 'ekle' (Yeni Randevu Kaydetme / Saati Kilitleme)
    // ------------------------------------------------------------------------
    if ($action === 'ekle') {
        $tarih    = temizle($input['tarih'] ?? '');
        $saat     = temizle($input['saat'] ?? '');
        $islem    = temizle($input['islem'] ?? 'Genel Kuaför Hizmeti');
        $ad_soyad = temizle($input['ad_soyad'] ?? '');
        $telefon  = temizle($input['telefon'] ?? '');
        $not      = temizle($input['not'] ?? $input['musteri_notu'] ?? '');
        $id       = temizle($input['id'] ?? '');

        // Gerekli alan kontrolleri
        if (empty($tarih) || empty($saat) || empty($ad_soyad)) {
            http_response_code(400);
            echo json_encode([
                'success' => false,
                'error'   => 'EKSIK_BILGI',
                'mesaj'   => 'Lütfen tarih, saat ve ad soyad alanlarını eksiksiz doldurun.'
            ], JSON_UNESCAPED_UNICODE);
            exit;
        }

        // Benzersiz ID yoksa otomatik üret
        if (empty($id)) {
            $id = 'rnd_' . date('YmdHis') . '_' . bin2hex(random_bytes(4));
        }

        // Çakışma / Çift Rezervasyon Kontrolü (Slot zaten dolu mu?)
        foreach ($randevular as $r) {
            if ($r['tarih'] === $tarih && $r['saat'] === $saat && ($r['durum'] ?? 'dolu') === 'dolu') {
                http_response_code(409); // 409 Conflict
                echo json_encode([
                    'success' => false,
                    'error'   => 'SLOT_DOLU',
                    'mesaj'   => 'Bu saat az önce doldu, lütfen başka bir saat seçin.'
                ], JSON_UNESCAPED_UNICODE);
                exit;
            }
        }

        // Yeni randevu nesnesi
        $yeniRandevu = [
            'id'               => $id,
            'tarih'            => $tarih,
            'saat'             => $saat,
            'islem'            => $islem,
            'ad_soyad'         => $ad_soyad,
            'telefon'          => $telefon,
            'not'              => $not,
            'durum'            => 'dolu',
            'olusturma_tarihi' => date('Y-m-d H:i:s')
        ];

        $randevular[] = $yeniRandevu;

        if (saveRandevular($jsonFile, $randevular)) {
            echo json_encode([
                'success' => true,
                'mesaj'   => 'Randevu talebiniz başarıyla kaydedildi.',
                'randevu' => $yeniRandevu
            ], JSON_UNESCAPED_UNICODE);
        } else {
            http_response_code(500);
            echo json_encode([
                'success' => false,
                'error'   => 'DOSYA_YAZMA_HATASI',
                'mesaj'   => 'Randevu veritabanı dosyasına yazılamadı. Lütfen sunucu klasör yazma izinlerini kontrol edin.'
            ], JSON_UNESCAPED_UNICODE);
        }
        exit;
    }

    // ------------------------------------------------------------------------
    // ACTION: 'sil' (Randevu İptali / Saati Tekrar Boşa Çıkarma)
    // ------------------------------------------------------------------------
    if ($action === 'sil') {
        $silinecekId = temizle($input['id'] ?? '');

        if (empty($silinecekId)) {
            http_response_code(400);
            echo json_encode([
                'success' => false,
                'error'   => 'ID_GEREKLI',
                'mesaj'   => 'Silinecek randevu ID belirtilmedi.'
            ], JSON_UNESCAPED_UNICODE);
            exit;
        }

        $bulundu = false;
        $guncelRandevular = [];

        foreach ($randevular as $item) {
            if ($item['id'] === $silinecekId) {
                $bulundu = true;
            } else {
                $guncelRandevular[] = $item;
            }
        }

        if (!$bulundu) {
            http_response_code(404);
            echo json_encode([
                'success' => false,
                'error'   => 'KAYIT_BULUNAMADI',
                'mesaj'   => 'Silinmek istenen randevu bulunamadı.'
            ], JSON_UNESCAPED_UNICODE);
            exit;
        }

        if (saveRandevular($jsonFile, $guncelRandevular)) {
            echo json_encode([
                'success' => true,
                'mesaj'   => 'Randevu başarıyla silindi ve saat tekrar boşa çıkarıldı.'
            ], JSON_UNESCAPED_UNICODE);
        } else {
            http_response_code(500);
            echo json_encode([
                'success' => false,
                'error'   => 'DOSYA_YAZMA_HATASI',
                'mesaj'   => 'Kayıt silinirken dosya güncellenemedi.'
            ], JSON_UNESCAPED_UNICODE);
        }
        exit;
    }

    // Geçersiz action
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'error'   => 'GECERSIZ_ACTION',
        'mesaj'   => "Geçersiz işlem parametresi. 'ekle' veya 'sil' bekleniyor."
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

// Desteklenmeyen HTTP Metodu
http_response_code(405);
echo json_encode([
    'success' => false,
    'error'   => 'METOD_DESTEKLENMIYOR',
    'mesaj'   => 'Sadece GET ve POST istekleri desteklenmektedir.'
], JSON_UNESCAPED_UNICODE);
