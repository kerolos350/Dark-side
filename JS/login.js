var serverIP = location.host;
var link = "http://" + serverIP;


var value = document.cookie.valueOf('loged_in');
var data = value.includes("loged_in=True")

if (data != true) {
    window.location.href = link + "/HTML/login.html";
}