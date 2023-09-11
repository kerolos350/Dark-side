<?php

function countFilesInFolder($folderPath) {
    $files = scandir($folderPath);
    
    if ($files === false) {
        // Log the error and return 0
        error_log("Error: Failed to scan directory: $folderPath");
        return 0;
    }
    
    $fileCount = count(array_filter($files, function ($file) use ($folderPath) {
        return is_file($folderPath . $file);
    }));
    
    return $fileCount;
}

$folderPaths = ['/srv/http/Pages/', '/srv/http/In-prog/'];
$totalFileCount = 0;

foreach ($folderPaths as $folderPath) {
    $totalFileCount += countFilesInFolder($folderPath);
}

// Create an associative array to hold the total count
$response = array('totalFileCount' => $totalFileCount);

// Send the response as JSON
header('Content-Type: application/json');
echo json_encode($response);
?>