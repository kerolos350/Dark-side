<?php
// The username & password from the login form
$usrName = $_POST["username"];
$pwd = $_POST["pwd"];

// Hash the password
$pwdHash = password_hash($pwd, PASSWORD_BCRYPT);



// Create a PHP data structure (array or object) to be converted to JSON
$data = [
    "usrName" => $usrName,
    "pwd" => $pwdHash,
    "avatar" => "/Icons/Account/defualt.svg"
];

// Encode the data as JSON
$jsonData = json_encode($data, JSON_PRETTY_PRINT);

// Specify the file path where you want to create the JSON file
$fileName = $usrName . ".json";
$filePath = '/var/www/html/JSON/login/' . $fileName;

// Write the JSON string to the file
if (file_put_contents($filePath, $jsonData) !== false) {
    echo "JSON file created successfully.";
} else {
    echo "Error creating JSON file.";
}


$tasks = [
    "tasks" => []
];

// Encode the data as JSON
$tasksData = json_encode($tasks, JSON_PRETTY_PRINT);

// Specify the file path where you want to create the JSON file
$fileName = $usrName . "-tasks.json";
$filePath = '/var/www/html/JSON/' . $fileName;

// Write the JSON string to the file
if (file_put_contents($filePath, $tasksData) !== false) {
    echo "JSON file created successfully.";
} else {
    echo "Error creating JSON file.";
}


header("Location: $server/HTML/Settings.html");
echo("Location: $server/HTML/Settings.html");

?>