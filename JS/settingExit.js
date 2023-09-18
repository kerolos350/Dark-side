function exit() {
    var form = document.getElementById('addUser');
    var main = document.getElementsByClassName('asideItems');
    var hidden = document.getElementsByClassName('hidden');
    var avatar = document.getElementById('avtrChange');
    var inputUser = document.getElementById('username');
    var inputPwd = document.getElementById('password');
    var inputConfPwd = document.getElementById('confirmPassword');
    var avatarInput = document.getElementById('newAvatar');
    var active = document.activeElement;

    if (form.style.display !== 'none') {
        if (active !== inputUser && active !== inputPwd && active !== inputConfPwd) {
        form.style.display = 'none';
        form.style.zIndex = 0;
        avatar.style.display = "none";
        avatar.style.zIndex = 0;
        hidden[0].style.zIndex = 0;
        hidden[0].style.display = 'none';
        main[0].style.zIndex = 1000;
        main[0].focus()
        }
    } if (avatar.style.display !== 'none') {
            if (active !== avatarInput) {
                form.style.display = 'none';
                form.style.zIndex = 0;
                avatar.style.display = "none";
                avatar.style.zIndex = 0;
                hidden[0].style.zIndex = 0;
                hidden[0].style.display = 'none';
                main[0].style.zIndex = 1000;
                main[0].focus()
            }
    };
    

}