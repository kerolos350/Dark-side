function changeAvatar(file) {
    var dataToSend = file;
    console.log(file);

    // Get user_name from cookie
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

    // Create a FormData object to send the file
    var formData = new FormData();
    formData.append('data', dataToSend);
    formData.append('user', username);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/PHP/changeAvatar.php", true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                // Handle the response from PHP if needed
                console.log(xhr.responseText);
            } else {
                // Handle errors here
                console.error('Error:', xhr.status);
            }
        }
    };

    xhr.send(formData);
}