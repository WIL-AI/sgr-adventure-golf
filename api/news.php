<?php
/**
 * Gut Wissmannshof - News API Endpoint
 * Handles reading and saving news articles to data/news.json.
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$dataFile = __DIR__ . '/../data/news.json';

// GET: Read all news
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (file_exists($dataFile)) {
        $content = file_get_contents($dataFile);
        echo $content;
    } else {
        echo json_encode([]);
    }
    exit;
}

// POST: Save news
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

    // Save with pretty print and lock
    $dir = dirname($dataFile);
    if (!is_dir($dir)) {
        mkdir($dir, 0777, true);
    }

    $saved = file_put_contents($dataFile, json_encode($decoded, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES), LOCK_EX);

    if ($saved !== false) {
        echo json_encode(['success' => true, 'count' => count($decoded), 'timestamp' => date('c')]);
    } else {
        http_response_code(500);
        echo json_encode(['success' => false, 'error' => 'Konnte Datei nicht auf dem Server speichern. Schreibrechte prüfen.']);
    }
    exit;
}

http_response_code(405);
echo json_encode(['error' => 'Method not allowed']);
