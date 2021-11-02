
window.onload=init;

function init(){
    var startBtn = document.getElementsByClassName('box');
    startBtn[0].onclick=csBox;
    startBtn[1].onclick=elecBox;
    startBtn[2].onclick=mettBox;
    startBtn[3].onclick=mechBox;
}

function displayNone(){
    var startBtn = document.getElementsByClassName('box');
    startBtn[2].style.display="none";
}
