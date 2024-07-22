<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

// Inclure le fichier de configuration de la base de données
include('../config/database.php');

$query = 'SELECT * FROM services';

try {
    $stmt = $dbh->prepare($query);
    $stmt->execute();
    $services = $stmt->fetchAll(PDO::FETCH_ASSOC);

    if (!$services) {
        echo json_encode(["message" => "No services found."]);
    } else {
        echo json_encode($services);
    }
} catch (PDOException $e) {
    echo json_encode(["error" => "Query failed: " . $e->getMessage()]);
}
?>