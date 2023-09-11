<?php

$ip_server = $_SERVER['HTTP_CLIENT_IP'];

// The username & password from the login form
$usrName = $_POST["usrName"];
$pwd = $_POST["pwd"];

// Get the data form the json file
$file = "/srv/http/JSON/login/$usrName.json";
$data = file_get_contents($file);
$json_data = json_decode($data,true);

// The username & password from the json file
$user = $json_data['usrName'];
$hashed_pwd = $json_data['pwd'];

$verify = password_verify($pwd, $hashed_pwd);

$server = $ip_server;

if ($usrName == $user and $verify) {
    $cookie_name = "loged_in";
    $cookie_value = "True";
    setcookie($cookie_name, $cookie_value, time() + (60 * 60 * 5), "/"); // 86400 = 1 day
    header("Location: $server/HTML/dashboard.html");
    echo("Location: $server/HTML/dashboard.html");
    die();
} else {
    header("Location: $server/HTML/login.html");
    echo("Location: $server/HTML/login.html");
}

?>