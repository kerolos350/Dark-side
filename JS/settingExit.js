function exit() {
    var form = document.getElementById('addUser');
    var active = document.activeElement;
    var inputUser = document.getElementById('username');
    var inputPwd = document.getElementById('password');
    var inputConfPwd = document.getElementById('confirmPassword');
    var hidden = document.getElementsByClassName('hidden');
    var main = document.getElementsByClassName('asideItems');

    if (form.style.display !== 'none') {
        if (active !== inputUser && active !== inputPwd && active !== inputConfPwd) {
        form.style.display = 'none';
        form.style.zIndex = 0;
        hidden[0].style.zIndex = 0;
        hidden[0].style.display = 'none';
        main[0].style.zIndex = 1000;
        main[0].focus()
        }
    };
    
}

function avatarExit() {
    var avatar = document.getElementById('avtrChange');
    var active = document.activeElement;
    var avatarInput = document.getElementsByClassName('uploadAv');
    var main = document.getElementsByClassName('asideItems');
    var hidden = document.getElementsByClassName('hidden');
    
    if (avatar.style.display !== 'none') {
        if (active !== avatarInput) {
            avatar.style.display = "none";
            avatar.style.zIndex = 0;
            hidden[0].style.zIndex = 0;
            hidden[0].style.display = 'none';
            main[0].style.zIndex = 1000;
            main[0].focus()
        }
    };

}

function chPassExit() {
    var chPassForm = document.getElementById('chPass');
    var active = document.activeElement;
    var inputChPwd = document.getElementById('chPassword');
    var inputChConfPwd = document.getElementById('chConfirmPassword');
    var hidden = document.getElementsByClassName('hidden');
    var main = document.getElementsByClassName('asideItems');
    
    if (chPassForm.style.display !== 'none') {
        if (active !== inputChPwd && active !== inputChConfPwd) {
            chPassForm.style.display = 'none';
            chPassForm.style.zIndex = 0;
            hidden[0].style.zIndex = 0;
            hidden[0].style.display = 'none';
            main[0].style.zIndex = 1000;
            main[0].focus()
        }
    };

}