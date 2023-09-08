function menu () {
    var side = document.getElementById("side");
    var main = document.getElementById("main");

    if (window.innerWidth < 800) {
        if (side.style.display != "flex") {
            side.style.display = "flex";
            side.style.zIndex = "100";
        } else {
            side.style.display = "none";
        }
    }
    if (window.innerWidth > 800) {
        if (side.style.display != "none") {
            side.style.display = "none";
            main.style.marginLeft = "0";
            main.style.width = "100vw";
        } else {
            side.style.display = "flex";
            main.style.marginLeft = "249px";
            main.style.width = "calc(100vw - 249px)";
        }
    }
}