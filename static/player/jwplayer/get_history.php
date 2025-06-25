<?php
header('Content-Type: application/json');

$db_host = 'localhost';
$db_user = 'root';
$db_pass = '';
$db_name = 'ashamovie';

$user_id = intval($_GET['user_id'] ?? 0);
$vod_id = $_GET['vod_id'] ?? '';
$ep = $_GET['ep'] ?? '';

$seek_time = 0;
try {
    $pdo = new PDO("mysql:host=$db_host;dbname=$db_name;charset=utf8mb4", $db_user, $db_pass, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
    ]);
    $stmt = $pdo->prepare("SELECT `current_time` FROM user_history WHERE user_id=? AND vod_id=? AND episode=?");
    $stmt->execute([$user_id, $vod_id, $ep]);
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    if ($row && $row['current_time'] > 5) $seek_time = floatval($row['current_time']);
} catch (Exception $e) {}

echo json_encode(['seek_time' => $seek_time]);
