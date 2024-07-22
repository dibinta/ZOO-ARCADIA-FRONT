<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

// Inclure le fichier de configuration de la base de données
include('../config/database.php');

$query = '
    SELECT 
        habitats.id AS habitat_id, habitats.nom AS habitat_nom, habitats.description AS habitat_description, habitats.images AS habitat_images,
        animaux.id AS animal_id, animaux.prenom AS animal_prenom, animaux.race AS animal_race, animaux.description AS animal_description, animaux.images AS animal_images
    FROM habitats
    LEFT JOIN animaux ON habitats.id = animaux.habitat_id
';

try {
    $stmt = $dbh->prepare($query);
    $stmt->execute();
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $result = [];
    foreach ($rows as $row) {
        $habitat_id = $row['habitat_id'];
        if (!isset($result[$habitat_id])) {
            $result[$habitat_id] = [
                'id' => $row['habitat_id'],
                'nom' => $row['habitat_nom'],
                'description' => $row['habitat_description'],
                'images' => $row['habitat_images'],
                'animaux' => []
            ];
        }
        if ($row['animal_id']) {
            $result[$habitat_id]['animaux'][] = [
                'id' => $row['animal_id'],
                'prenom' => $row['animal_prenom'],
                'race' => $row['animal_race'],
                'description' => $row['animal_description'],
                'images' => $row['animal_images']
            ];
        }
    }

    echo json_encode(array_values($result));
} catch (PDOException $e) {
    echo json_encode(["error" => "Query failed: " . $e->getMessage()]);
}
?>
