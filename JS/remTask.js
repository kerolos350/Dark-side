function tskRem() {
    document.addEventListener("click", function (event) {
        var selectedElement = event.target; // Get the selected element
        var selectedElementId = selectedElement.id; // Get the id attribute of the selected element

        if (selectedElementId) {
            var num = selectedElementId[0];

            // You can also use the following line to directly get the numeric value of "num":
            // var num = parseInt(selectedElementId[0], 10);

            var task = document.getElementsByClassName("R" + num);
            task[0].remove();

            var xhr = new XMLHttpRequest();
            var url = link + '/PHP/taskRemove.php';

            // Create an object to send as JSON data
            var jsonData = {
                num: num
            };

            // Convert the object to a JSON string
            var data = JSON.stringify(jsonData);

            xhr.open('POST', url, true);
            xhr.setRequestHeader('Content-type', 'application/json');

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

            xhr.send(data);
        } else {
            console.error("No id found for the selected element.");
        }
    });
}