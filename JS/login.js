var serverIP = location.host;
var link = "http://" + serverIP;


var value = document.cookie.valueOf('loged_in');

if (value != "loged_in=True") {
    window.location.href = link + "/HTML/login.html";
}