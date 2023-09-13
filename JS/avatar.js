var serverIP = location.host;
var link = "http://" + serverIP;

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

// URL to the JSON file on the server
const jsonUrl = link + '/JSON/login/' + username + '.json';

// Fetch the JSON data from the server
fetch(jsonUrl)
    .then(response => {
        // Check if the response status is OK (200)
        if (response.status === 200) {
        return response.json();
        } else {
        throw new Error('Failed to fetch JSON data');
        }
    })
    .then(data => {
        // Access the 'avatar' property from the JSON data
        const avatarPath = data.avatar;
        
        // You can now use the 'avatarPath' variable for further processing
        document.getElementById("avatar").src = avatarPath;
    })
    .catch(error => {
        console.error('Error:', error);
    });
