function addProfile() {
    var form = document.getElementById('addUser');
    var usr = document.getElementById('username');
    var main = document.getElementsByClassName('asideItems');
    var hidden = document.getElementsByClassName('hidden');
    var avatar = document.getElementById('avtrChange');

    if (form.style.display != 'flex') {
        form.style.display = 'flex';
        form.style.zIndex = 1001;
        hidden[0].style.zIndex = 1000;
        hidden[0].style.display = 'block';
        main[0].style.zIndex = 0;
        usr.focus();
        avatar.style.display = 'none';
    } else {
        form.style.display = 'none';
        form.style.zIndex = 1;
        hidden[0].style.zIndex = 0;
        hidden[0].style.display = 'none';
        main[0].style.zIndex = 1000;
        main[0].focus()
        avatar.style.display = 'none';
    }
}