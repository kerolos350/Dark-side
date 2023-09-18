function avatarMenu() {
    var hidden = document.getElementsByClassName('hidden');
    var avatar = document.getElementById('avtrChange');
    var aside = document.getElementsByClassName('asideItems');
    var form = document.getElementById('addUser');

    if (avatar.style.display === 'none') {
        avatar.style.display = 'flex';
        avatar.style.zIndex = '100';
        hidden[0].style.display = 'block';
        hidden[0].style.zIndex = '10';
        aside[0].style.zIndex = '0';
        form.style.display = 'none';
    } else {
        avatar.style.display = 'none';
        avatar.style.zIndex = '10';
        hidden[0].style.display = 'none';
        hidden[0].style.zIndex = '0';
        aside[0].style.zIndex = '100';
        form.style.display = 'none';
    }
}