document.addEventListener('DOMContentLoaded', function () {
    var avatarForm = document.getElementById('avatarForm');
    var serverIP = location.host;
    var url = "http://" + serverIP;
    const dir = url + '/Icons/Account/';

    fetch(dir)
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(htmlContent => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlContent, 'text/html');
        const links = doc.querySelectorAll('a');

        const allowedExtensions = ['.svg', '.png', '.jpg'];
        const files = [];
        links.forEach(link => {
        const href = link.getAttribute('href');
        if (allowedExtensions.some(ext => href.endsWith(ext))) {
            files.push(href);
        }
        });

        files.forEach(file => {
            const newDiv = document.createElement("div");
            var img = '<img onclick="changeAvatar(' + "'" + file + "'" + ')" class="imgChoice" src="' + dir + file + '" alt="" srcset="">'
            newDiv.innerHTML = img;

            avatarForm.appendChild(newDiv);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
});