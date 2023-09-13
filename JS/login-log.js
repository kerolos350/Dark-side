var serverIP = location.host;
var link = "http://" + serverIP;


var value = document.cookie.valueOf('loged_in');
var data = value.includes("loged_in=True")

if (data != false) {
    window.location.href = link + "/HTML/dashboard.html";
}