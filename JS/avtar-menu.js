function avMn () {
    var avatar = document.getElementById("avMenu");

    if (avatar.classList.contains("hide")) {
        avatar.classList.remove("hide");
    } else {
        avatar.classList.add("hide")
    }
}