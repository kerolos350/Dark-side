// Wrap your code in a DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function () {
    // Use JavaScript to make an AJAX request to the PHP script
    const fileCountDisplay = document.getElementById('pgNum');
    var serverIP = location.host;
    var link = "http://" + serverIP;
    const dir = link + '/PHP/allPageCount.php'; // Adjust the path to your PHP script

    fetch(dir)
        .then(response => response.json())
        .then(data => {
            fileCountDisplay.textContent = `${data.totalFileCount}`;
        })
        .catch(error => {
            console.error('Error:', error);
            fileCountDisplay.textContent = 'Error';
        });
});