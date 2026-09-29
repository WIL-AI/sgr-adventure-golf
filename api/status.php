<?php
/**
 * Gut Wissmannshof - Resort Status API Endpoint
 * Handles reading and saving live status (Öffnungszeiten, Trolleys, Carts, Platzstatus) to data/status.json.
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$dataFile = __DIR__ . '/../data/status.json';

// GET: Read current resort status
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (file_exists($dataFile)) {
        $content = file_get_contents($dataFile);
        echo $content;
    } else {
        echo json_encode([
            'openingHours' => ['title' => 'Öffnungszeiten Shop & Sekretariat', 'text' => 'täglich 08:00 – 18:00 Uhr'],
            'trolleys' => ['status' => 'erlaubt', 'label' => 'Erlaubt', 'note' => ''],
            'carts' => ['status' => 'erlaubt', 'label' => 'Erlaubt', 'note' => ''],
            'courseStatus' => ['status' => 'open', 'course' => '27-Loch regulär geöffnet', 'greens' => 'Sommergrüns', 'note' => ''],
            'lastUpdated' => date('c')
        ]);
    }
    exit;
}

// POST: Save status
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = file_get_contents('php://input');
    if (!$input) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => 'Keine Daten empfangen.']);
        exit;
    }

    $decoded = json_decode($input, true);
    if (!is_array($decoded)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => 'Ungültiges JSON-Format.']);
        exit;
    }

    $dir = dirname($dataFile);
    if (!is_dir($dir)) {
        mkdir($dir, 0777, true);
    }

    $saved = file_put_contents($dataFile, json_encode($decoded, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES), LOCK_EX);

    if ($saved !== false) {
        echo json_encode(['success' => true, 'timestamp' => date('c')]);
    } else {
        http_response_code(500);
        echo json_encode(['success' => false, 'error' => 'Konnte Datei nicht auf dem Server speichern. Schreibrechte prüfen.']);
    }
    exit;
}
