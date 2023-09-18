// JavaScript to trigger form submission when a file is selected
const fileInput = document.getElementById("newAvatar");
const uploadForm = document.getElementById("uploadForm");

fileInput.addEventListener("change", function () {
    // Check if a file is selected before submitting the form
    if (fileInput.files.length > 0) {
        uploadForm.submit(); // Submit the form

        // Extract the username from the cookie (your existing code)
        var user = document.cookie;
        var parts = user.split('; ');
        var username = '';
        for (var i = 0; i < parts.length; i++) {
            if (parts[i].startsWith('user_name=')) {
                username = parts[i].substring('user_name='.length);
                break;
            }
        }

        // Create a FormData object to hold the username
        var formData = new FormData();
        formData.append('user', username);

        // Send a POST request to the PHP script with formData
        var xhr = new XMLHttpRequest();
        var url = '/PHP/addAvatar.php';

        xhr.open('POST', url, true);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    // Handle the PHP script's response here, if needed
                    console.log(xhr.responseText);
                } else {
                    console.error("Error: " + xhr.status + " - " + xhr.statusText);
                }
            }
        };

        // Send the FormData object as the request body
        xhr.send(formData);
    }
});