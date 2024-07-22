<?php
// Fichier de configuration pour la connexion à la base de données
$dsn = 'mysql:host=localhost;dbname=zoo_arcadia';
$username = 'root';
$password = '';
$options = [];

try {
    $dbh = new PDO($dsn, $username, $password, $options);
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die('Connection failed: ' . $e->getMessage());
}
?>
