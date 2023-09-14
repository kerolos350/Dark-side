function exit() {
    var form = document.getElementById('addUser');
    var usr = document.getElementById('username');
    var main = document.getElementsByClassName('asideItems');
    var hidden = document.getElementsByClassName('hidden');


    form.style.display = 'none';
    form.style.zIndex = 1;
    hidden[0].style.zIndex = 0;
    hidden[0].style.display = 'none';
    main[0].style.zIndex = 1000;
    main[0].focus()
}