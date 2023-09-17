function changeAvatar(file) {
    var dataToSend = file;
    console.log(file);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/PHP/changeAvatar.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Handle the response from PHP if needed
            console.log(xhr.responseText);
        }
    };

    xhr.send("data=" + dataToSend);
    }