document.addEventListener('DOMContentLoaded', function () {
    var user = document.cookie.valueOf("user_name");

    // Split the string by semicolon and space
    var parts = user.split('; ');

    // Initialize a variable to store the username
    var username = '';

    // Loop through the parts to find the one containing "user_name="
    for (var i = 0; i < parts.length; i++) {
        if (parts[i].startsWith('user_name=')) {
            // Extract the username part after "user_name="
            username = parts[i].substring('user_name='.length);
            break; // Exit the loop once found
        }
    }

    var activeusr = document.getElementsByClassName('usrName');

    activeusr[0].textContent = username;
});