// Wrap your code in a DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function () {
    // Use JavaScript to make an AJAX request to the PHP script
    const fileCountDisplay = document.getElementById('fnNum');
    var serverIP = location.host;
    var link = "http://" + serverIP;
    const dir = link + '/PHP/pageCount.php';

    fetch(dir)
        .then(response => response.json())
        .then(data => {
            fileCountDisplay.textContent = `${data.fileCount}`;
        })
        .catch(error => {
            console.error('Error:', error);
            fileCountDisplay.textContent = 'Error';
        });
});  