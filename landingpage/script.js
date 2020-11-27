window.onload = function() {
    setTimeout(logo, 1000);
    setTimeout(menu1, 1000);
    setTimeout(menu2, 1000);
    setTimeout(media, 1000);
    setTimeout(index, 1000);
}

function logo () {
    var h1 = document.querySelector('.logo h1');
    h1.style.opacity = '1';
}
function menu1 () {
    var l = document.querySelectorAll('#menu1 li');
    var i;
    for (i=0; i<l.length; i++) {
        l[i].style.opacity = '1';
        l[i].style.transform = 'translate(0)';
    }
}

function menu2 () {
    var l = document.querySelectorAll('#menu2 li');
    var i;
    for (i=0; i<l.length; i++) {
        l[i].style.opacity = '1';
        l[i].style.transform = 'translate(0)';
    }
}

function media () {
    var l = document.querySelectorAll('.media li');
    var i;
    for (i=0; i<l.length; i++) {
        l[i].style.opacity = '1';
        l[i].style.transform = 'translate(0)';
    }
}

function index () {
    var l = document.querySelectorAll('.index ul li');
    var i;
    for (i=0; i<l.length; i++) {
        l[i].style.opacity = '1';
        l[i].style.transform = 'translate(0)';
    }
}