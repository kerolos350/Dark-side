var checkArray = document.getElementsByClassName("tChk");
var checkStat = [];

function checkChecker() {
    

    for (let index = 0; index < checkArray.length; index++) {
        if (checkArray[index].checked == true) {
            if (checkStat.includes(index) != true) {
                checkStat.push(index)
                checkStat.sort((a,b)=> a -b)
            }
        }
    }
}



setInterval(checkChecker, 5000);