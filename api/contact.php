<?php
/**
 * Gut Wissmannshof - Unified Contact & Inquiry API Endpoint
 * Handles incoming web inquiries from all forms across wissmannshof.golf.
 * Sends email to info@wissmannshof.de with "[via Webseite]" tag and logs submission.
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Nur POST-Anfragen erlaubt.']);
    exit;
}

// Read payload (supports JSON and application/x-www-form-urlencoded)
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);
if (!$data || !is_array($data)) {
    $data = $_POST;
}

$name = trim($data['name'] ?? '');
$email = trim($data['email'] ?? '');
$phone = trim($data['phone'] ?? '');
$subject = trim($data['subject'] ?? 'Kontaktanfrage');
$message = trim($data['message'] ?? $data['msg'] ?? '');
$formSource = trim($data['source'] ?? 'Webseite');
$details = $data['details'] ?? [];

if (empty($name) || empty($email)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Name und E-Mail sind Pflichtfelder.']);
    exit;
}

// Ensure "[via Webseite]" is in the subject
if (stripos($subject, 'via Webseite') === false && stripos($subject, 'via Website') === false) {
    $mailSubject = '[via Webseite] ' . $subject;
} else {
    $mailSubject = $subject;
}

// Compose Email Body
$mailBody = "Neue Anfrage über das Webportal (via Webseite)\n";
$mailBody .= "====================================================\n\n";
$mailBody .= "Herkunft / Formular: " . $formSource . "\n";
$mailBody .= "Datum / Uhrzeit:    " . date('d.m.Y H:i:s') . "\n\n";
$mailBody .= "Kontaktdaten des Absenders:\n";
$mailBody .= "----------------------------------------------------\n";
$mailBody .= "Name:    " . $name . "\n";
$mailBody .= "E-Mail:  " . $email . "\n";
if (!empty($phone)) {
    $mailBody .= "Telefon: " . $phone . "\n";
}
$mailBody .= "\n";

if (!empty($details) && is_array($details)) {
    $mailBody .= "Details zur Anfrage:\n";
    $mailBody .= "----------------------------------------------------\n";
    foreach ($details as $key => $val) {
        if (!empty($val)) {
            $mailBody .= ucfirst($key) . ": " . (is_array($val) ? json_encode($val, JSON_UNESCAPED_UNICODE) : $val) . "\n";
        }
    }
    $mailBody .= "\n";
}

$mailBody .= "Nachricht / Anmerkungen:\n";
$mailBody .= "----------------------------------------------------\n";
$mailBody .= (!empty($message) ? $message : '(Keine gesonderte Nachricht angegeben)') . "\n\n";
$mailBody .= "====================================================\n";
$mailBody .= "Hinweis: Diese Nachricht wurde automatisch über das Kontaktformular auf wissmannshof.golf (via Webseite) generiert.\n";
$mailBody .= "Sie können direkt auf diese E-Mail antworten, um dem Absender (" . $email . ") zu schreiben.\n";

$targetEmail = 'info@wissmannshof.de';
$senderDomain = $_SERVER['SERVER_NAME'] ?? 'wissmannshof.golf';
if (empty($senderDomain) || $senderDomain === 'localhost') {
    $senderDomain = 'wissmannshof.golf';
}

$headers = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-Type: text/plain; charset=UTF-8';
$headers[] = 'From: Gut Wissmannshof Webportal <noreply@' . $senderDomain . '>';
$headers[] = 'Reply-To: ' . $name . ' <' . $email . '>';
$headers[] = 'X-Mailer: PHP/' . phpversion();
$headers[] = 'X-Origin-Form: ' . $formSource . ' (via Webseite)';

// Send mail via PHP mail()
$mailSent = @mail($targetEmail, '=?UTF-8?B?' . base64_encode($mailSubject) . '?=', $mailBody, implode("\r\n", $headers));

// Log inquiry to data/inquiries.json as safety backup
$logFile = __DIR__ . '/../data/inquiries.json';
$logDir = dirname($logFile);
if (!is_dir($logDir)) {
    @mkdir($logDir, 0777, true);
}

$logEntry = [
    'timestamp' => date('c'),
    'source' => $formSource,
    'name' => $name,
    'email' => $email,
    'phone' => $phone,
    'subject' => $mailSubject,
    'message' => $message,
    'details' => $details,
    'mailSent' => $mailSent
];

$existingLogs = [];
if (file_exists($logFile)) {
    $raw = @file_get_contents($logFile);
    if ($raw) {
        $existingLogs = json_decode($raw, true) ?: [];
    }
}
$existingLogs[] = $logEntry;
// Keep max last 100 entries
if (count($existingLogs) > 100) {
    $existingLogs = array_slice($existingLogs, -100);
}
@file_put_contents($logFile, json_encode($existingLogs, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES), LOCK_EX);

echo json_encode([
    'success' => true,
    'mailSent' => $mailSent,
    'message' => 'Vielen Dank! Ihre Nachricht (via Webseite) wurde erfolgreich übermittelt.'
]);
