<?php
// Receive the JSON data from the AJAX request
$data = json_decode(file_get_contents('php://input'), true);

if ($data !== null) {
    try {
        // Load the JSON data from the file
        $jsonFile = '/srv/http/JSON/task.json';
        $jsonData = file_get_contents($jsonFile);

        if ($jsonData === false) {
            throw new Exception("Failed to read JSON data from $jsonFile");
        }

        // Parse the JSON data into a PHP array
        $tasksData = json_decode($jsonData, true);

        if ($tasksData === null) {
            throw new Exception("Failed to parse JSON data from $jsonFile");
        }

        // Array of indices to update
        $indicesToUpdate = $data; // Replace with your own indices

        // Loop through the indices and update the "done" state
        foreach ($indicesToUpdate as $index) {
            if (isset($tasksData['tasks'][$index])) {
                $tasksData['tasks'][$index]['done'] = true;
            }
        }

        // Convert the updated array back to JSON format
        $updatedJsonData = json_encode($tasksData, JSON_PRETTY_PRINT);

        if ($updatedJsonData === false) {
            throw new Exception("Failed to encode JSON data");
        }

        // Write the updated JSON data back to the file
        $result = file_put_contents($jsonFile, $updatedJsonData);

        if ($result === false) {
            throw new Exception("Failed to write JSON data to $jsonFile");
        }

        echo "Tasks updated successfully.";
    } catch (Exception $e) {
        // Handle exceptions and provide detailed error messages
        echo "Error: " . $e->getMessage();
    }
} else {
    echo "No data received.";
}
?>