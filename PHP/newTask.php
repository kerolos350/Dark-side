<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Specify the path to your JSON file
$jsonFilePath = '/srv/http/JSON/task.json';

// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if the 'nwTskName' field is set in the POST data
    if (isset($_POST['nwTskName'])) {
        // Get the task name from the form data
        $taskName = $_POST['nwTskName'];

        // Load the JSON data from the file into a PHP array
        $jsonData = file_get_contents($jsonFilePath);
        $tasksData = json_decode($jsonData, true);

        // Check if the JSON data was successfully decoded
        if ($tasksData === null) {
            echo "Failed to decode JSON data from the file.";
            exit;
        }

        // Create a new task with 'done' set to false
        $newTask = [
            "task_name" => $taskName,
            "done" => false
        ];

        // Add the new task to the 'tasks' array
        $tasksData['tasks'][] = $newTask;

        // Encode the modified array back to JSON
        $jsonResult = json_encode($tasksData);

        // Write the updated JSON data back to the file
        if (file_put_contents($jsonFilePath, $jsonResult) !== false) {
            echo "New task added successfully.";
        } else {
            echo "Failed to update JSON file.";
        }
    } else {
        echo "Task name not provided in the form data.";
    }
} else {
    echo "Invalid request method. Use POST to submit the form.";
}

$ip_server = $_SERVER['HTTP_CLIENT_IP'];
$server = $ip_server;

header("Location: $server/HTML/dashboard.html");
echo("Location: $server/HTML/dashboard.html");
?>