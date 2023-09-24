<?php

$ip_server = $_SERVER['HTTP_CLIENT_IP'];

// The username & password from the login form
$usrName = $_POST["usrName"];
$pwd = $_POST["pwd"];

// Get the data form the json file
$file = "/var/www/html/JSON/login/$usrName.json";
$data = file_get_contents($file);
$json_data = json_decode($data,true);

// The username & password from the json file
$user = $json_data['usrName'];
$hashed_pwd = $json_data['pwd'];

$verify = password_verify($pwd, $hashed_pwd);

$server = $ip_server;


// Get the current timestamp
$currentTimestamp = time();

// Set the cookie with the current timestamp
$name = 'currentTime';
$time = $currentTimestamp;

// Set the expiration time (optional)
$expireTime = $currentTimestamp + 3600; // Expires in 1 hour

// Set the path to '/' so that the cookie is accessible from the entire domain
$cookiePath = '/';

// Do not set HttpOnly to allow JavaScript to access the cookie
$cookieOptions = array(
    'expires' => time() + (60 * 60 * 5),
    'path' => $cookiePath,
    'httponly' => false // Important: Do not set as HttpOnly
);


if ($usrName == $user and $verify) {
    $cookie_name = "loged_in";
    $cookie_value = "True";
    setcookie($cookie_name, $cookie_value, time() + (60 * 60 * 5), "/"); // 86400 = 1 day (counted by sec)
    setcookie("user_name", $user, time() + (60 * 60 * 5), "/");
    setcookie($name, $time, $cookieOptions);
    header("Location: $server/HTML/dashboard.html");
    echo("Location: $server/HTML/dashboard.html");
    die();
} else {
    header("Location: $server/HTML/login.html");
    echo("Location: $server/HTML/login.html");
}

?>