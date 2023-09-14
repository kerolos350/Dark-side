function addProfile() {
    var form = document.getElementById('addUser');
    var usr = document.getElementById('username');
    var main = document.getElementsByClassName('asideItems');
    var hidden = document.getElementsByClassName('hidden');

    if (form.style.display != 'flex') {
        form.style.display = 'flex';
        form.style.zIndex = 1000;
        hidden[0].style.zIndex = 1000;
        main[0].style.zIndex = 0;
        usr.focus();
    } else {
        form.style.display = 'none';
        form.style.zIndex = 0;
        hidden[0].style.zIndex = 0;
        main[0].style.zIndex = 1000;
    }
}