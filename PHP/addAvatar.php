<?php

$ip_server = $_SERVER['HTTP_CLIENT_IP'];
$server = $ip_server;
// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Check if a file was uploaded successfully
    if (isset($_FILES["newAvatar"]) && $_FILES["newAvatar"]["error"] === UPLOAD_ERR_OK) {
        $uploadDir = "/srv/http/Icons/Account/"; // Specify the destination directory (create this directory if it doesn't exist)
        $uploadFile = $uploadDir . basename($_FILES["newAvatar"]["name"]); // Generate the full path for the uploaded file

        // Check if the destination directory exists; if not, create it with appropriate permissions
        if (!file_exists($uploadDir)) {
            if (!mkdir($uploadDir, 0777, true)) {
                echo "Failed to create the upload directory.";
                exit;
            }
        }

        // Move the uploaded file to the destination directory
        if (move_uploaded_file($_FILES["newAvatar"]["tmp_name"], $uploadFile)) {
            echo "File uploaded successfully.\n";
            echo $uploadFile;
        } else {
            echo "Sorry, there was an error moving the uploaded file.";
        }
    } else {
        switch ($_FILES["newAvatar"]["error"]) {
            case UPLOAD_ERR_INI_SIZE:
                echo "The uploaded file exceeds the upload_max_filesize directive in php.ini.";
                break;
            case UPLOAD_ERR_FORM_SIZE:
                echo "The uploaded file exceeds the post_max_size directive in php.ini.";
                break;
            case UPLOAD_ERR_PARTIAL:
                echo "The uploaded file was only partially uploaded.";
                break;
            case UPLOAD_ERR_NO_FILE:
                echo "No file was uploaded.";
                break;
            default:
                echo "Sorry, there was an unknown error uploading your file.";
        }
    }
} else {
    echo "Invalid request.";
}


if (isset($_COOKIE['user_name'])) {
    $user = $_COOKIE['user_name'];
    $data = $_FILES["newAvatar"]["name"];

    // Validate user input to prevent directory traversal
    if (preg_match('/^[a-zA-Z0-9_]+$/', $user)) {
        // Construct the file path using a safe method
        $jsonFilePath = '/srv/http/JSON/login/' . $user . '.json';

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
    echo "user_name cookie not found";
}


header("Location: $server/HTML/Settings.html");
echo("Location: $server/HTML/Settings.html");

?>