function dropMenu(id) {
    var menu = document.getElementById(id);

    if (menu.style.display != "block") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}