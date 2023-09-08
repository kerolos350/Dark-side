var value = document.cookie.valueOf('loged_in');

if (value != "loged_in=True") {
    window.location.href = "http://192.168.1.2/HTML/login.html";
}
