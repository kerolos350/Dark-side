function checkAll () {
    var main = document.getElementById("main-check");
    var otherCheck = document.getElementsByClassName("tChk");

    if (main.checked == true){
        for (let index = 0; index <= otherCheck.length; index++) {
            otherCheck[index].checked = true;
        }
    } else {
        for (let index = 0; index <= otherCheck.length; index++) {
            otherCheck[index].checked = false;
        }
    }
}