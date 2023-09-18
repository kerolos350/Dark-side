function checkChecker() {
    var serverIP = location.host;
    var link = "http://" + serverIP;

    var checkArray = document.getElementsByClassName("tChk");
    var checkStat = [];
    var uncheckStat = [];

    for (let index = 0; index < checkArray.length; index++) {
        if (checkArray[index].checked == true) {
            if (checkStat.includes(index) != true) {
                checkStat.push(index)
                checkStat.sort((a,b)=> a -b)
            }
        }
    }

    var xhr = new XMLHttpRequest();
    var url = link + '/PHP/taskCheck.php';
    var data = JSON.stringify(checkStat); // Convert the array to a JSON string

    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-type', 'application/json');

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Handle the PHP script's response here, if needed
            // console.log(xhr.responseText);
        }
    };

    xhr.send(data);


    for (let index = 0; index < checkArray.length; index++) {
        if (checkArray[index].checked == false) {
            if (uncheckStat.includes(index) != true) {
                uncheckStat.push(index)
                uncheckStat.sort((a,b)=> a -b)
            }
        }
    }

    var xhr = new XMLHttpRequest();
    var url = link + '/PHP/taskUncheck.php';
    var data = JSON.stringify(uncheckStat); // Convert the array to a JSON string

    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-type', 'application/json');

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Handle the PHP script's response here, if needed
            // console.log(xhr.responseText);
        }
    };

    xhr.send(data);
}

setInterval(checkChecker, 1000);