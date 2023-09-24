<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Check if the user and data parameters are set
    if (isset($_POST["user"]) && isset($_POST["data"])) {
        // Retrieve and sanitize user and data inputs
        $user = htmlspecialchars($_POST["user"]);
        $data = htmlspecialchars($_POST["data"]);

        // Validate user input to prevent directory traversal
        if (preg_match('/^[a-zA-Z0-9_]+$/', $user)) {
            // Construct the file path using a safe method
            $jsonFilePath = '/var/www/html/JSON/login/' . $user . '.json';

            // Check if the file exists and is writable
            if (is_writable($jsonFilePath)) {
                // Read the JSON data from the file into a PHP array
                $jsonData = file_get_contents($jsonFilePath);
                $tasksData = json_decode($jsonData, true);

                if (json_last_error() === JSON_ERROR_NONE) {
                    // Update the avatar field in the data
                    $tasksData['avatar'] = '/Icons/Account/' . $data;

                    // Encode the modified array back to JSON
                    $jsonResult = json_encode($tasksData, JSON_PRETTY_PRINT);

                    if (json_last_error() === JSON_ERROR_NONE) {
                        // Write the updated JSON data back to the file
                        if (file_put_contents($jsonFilePath, $jsonResult) !== false) {
                            echo "Avatar changed successfully.";
                        } else {
                            echo "Failed to change avatar.";
                        }
                    } else {
                        echo "JSON encoding error occurred.";
                    }
                } else {
                    echo "JSON decoding error occurred.";
                }
            } else {
                echo "File is not writable.";
            }
        } else {
            echo "Invalid user input.";
        }
    } else {
        echo "Missing user or data parameters.";
    }
} else {
    echo "Invalid request method.";
}
?>