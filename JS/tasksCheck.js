function checkAll () {
    var main = document.getElementById("main-check");
    var otherCheck = document.getElementsByClassName("tChk");

    if (main.checked == true){
        for (let index = 0; index < otherCheck.length; index++) {
            otherCheck[index].checked = true;
        }
    } else {
        for (let index = 0; index < otherCheck.length; index++) {
            otherCheck[index].checked = false;
        }
    }
}

function allChecked() {
    var main = document.getElementById("main-check");
    var otherCheck = document.getElementsByClassName("tChk");
    var num = 0;

    for (let index = 0; index < otherCheck.length; index++) {
        if (otherCheck[index].checked === true) {
            num = num + 1;
        }
    }

    if (num === otherCheck.length) {
        main.checked = true;
    } else {
        main.checked = false;
    }
}


setInterval(allChecked, 50)