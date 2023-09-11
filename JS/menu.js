function menu () {
    var side = document.getElementById("side");
    var main = document.getElementById("main");
    var nav = document.getElementById("nCon");
    var menuIcon = document.getElementById("menu");

    if (window.innerWidth < 800) {
        if (side.style.display != "flex") {
            side.style.display = "flex";
            side.style.zIndex = "100";
            nav.style.width = "calc(100vw - 249px)";
            nav.style.left = "249px";
            menuIcon.classList.add("nMenu");
        } else {
            side.style.display = "none";
            nav.style.left = "0px";
            nav.style.width = "100vw";
            menuIcon.classList.remove("nMenu");
        }
    }
    if (window.innerWidth > 800) {
        if (side.style.display != "none") {
            side.style.display = "none";
            main.style.marginLeft = "0";
            main.style.width = "100vw";
            nav.style.width = "100vw";
        } else {
            side.style.display = "flex";
            main.style.marginLeft = "249px";
            main.style.width = "calc(100vw - 249px)";
            nav.style.width = "calc(100vw - 249px)";
        }
    }
}