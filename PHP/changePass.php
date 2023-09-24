<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve the password and confirm password values from the form
    $password = $_POST["pwd"];
    $confirmPassword = $_POST["confPwd"];
    $user= $_COOKIE['user_name'];
    $hashed_pwd = password_hash($password, PASSWORD_BCRYPT);

    // Example validation: Check if passwords match
    if ($password === $confirmPassword) {
        // Construct the file path using a safe method
        $jsonFilePath = '/var/www/html/JSON/login/' . $user . '.json';

        // Check if the file exists and is writable
        if (is_writable($jsonFilePath)) {
            // Read the JSON data from the file into a PHP array
            $jsonData = file_get_contents($jsonFilePath);
            $tasksData = json_decode($jsonData, true);

            if (json_last_error() === JSON_ERROR_NONE) {
                // Update the avatar field in the data
                $tasksData['pwd'] = $hashed_pwd;

                // Encode the modified array back to JSON
                $jsonResult = json_encode($tasksData, JSON_PRETTY_PRINT);

                if (json_last_error() === JSON_ERROR_NONE) {
                    // Write the updated JSON data back to the file
                    if (file_put_contents($jsonFilePath, $jsonResult) !== false) {
                        echo "Password changed successfully.";
                    } else {
                        echo "Failed to change password.";
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
    }
    header("Location: $server/HTML/Settings.html");
    echo("Location: $server/HTML/Settings.html");
}
?>