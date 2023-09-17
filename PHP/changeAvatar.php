<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve the data sent from JavaScript
    $data = $_POST["data"];
    
    // Do something with the data (e.g., echo it)
    echo "Received data: " . $data;
}
?>