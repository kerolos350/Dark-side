<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Specify the path to your JSON file
$jsonFilePath = '/srv/http/JSON/task.json';

// Decode the JSON data sent from JavaScript
$inputData = json_decode(file_get_contents('php://input'), true);

if ($inputData === null || !isset($inputData['num'])) {
    echo "Invalid JSON data received.";
    exit;
}

$num = $inputData['num'];

// Load the JSON data from the file into a PHP array
$jsonData = file_get_contents($jsonFilePath);
$tasksData = json_decode($jsonData, true);

// Check if the JSON data was successfully decoded
if ($tasksData === null) {
    echo "Failed to decode JSON data from the file.";
    exit;
}

// Perform any desired operations with the retrieved "num" value

// Example: Output the "num" value
echo "Received num: " . $num . "\n";

$indexToRemove = $num;

// Check if the index exists in the "tasks" array
if (array_key_exists($indexToRemove, $tasksData['tasks'])) {
    // Remove the task at the specified index
    array_splice($tasksData['tasks'], $indexToRemove, 1);

    // Encode the modified array back to JSON
    $jsonResult = json_encode($tasksData);

    // Write the updated JSON data back to the file
    if (file_put_contents($jsonFilePath, $jsonResult) !== false) {
        echo "Task removed successfully.";
    } else {
        echo "Failed to update JSON file.";
    }
} else {
    echo "Index does not exist in the 'tasks' array.";
}
?>