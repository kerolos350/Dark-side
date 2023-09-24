<?php
$folderPath = '/var/www/html/Pages/In-prog/'; // Replace with your server folder path
$files = scandir($folderPath);

$fileCount = count(array_filter($files, function ($file) use ($folderPath) {
    return is_file($folderPath . $file);
}));

// Check if the folder is empty
if ($fileCount === 0) {
    $response = array('fileCount' => 0);
} else {
    $response = array('fileCount' => $fileCount);
}

// Send the response as JSON
header('Content-Type: application/json');
echo json_encode($response);
?>