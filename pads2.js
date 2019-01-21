 
 //Button play

 function audioPlay(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const pad = document.querySelector(`.pad[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    pad.classList.add('on');
}

function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('on');
}

const pads = document.querySelectorAll('.pad');
pads.forEach(pad => pad.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', audioPlay);

//Click play

const audio1 = new Audio("./sounds/boom.wav");
const audio2 = new Audio("./sounds/clap.wav");
const audio3 = new Audio("./sounds/hihat.wav");
const audio4 = new Audio("./sounds/kick.wav");
const audio5 = new Audio("./sounds/openhat.wav");
const audio6 = new Audio("./sounds/ride.wav");
const audio7 = new Audio("./sounds/snare.wav");
const audio8 = new Audio("./sounds/tink.wav");
const audio9 = new Audio("./sounds/tom.wav");

function clickBtn1(e){
    audio1.play();
    audio1.currentTime = 0;
    const pad = document.getElementById('pad1')
    pad.classList.add('on');
}
function clickBtn2(e){
    audio2.play();
    audio2.currentTime = 0;
    const pad = document.getElementById('pad2')
    pad.classList.add('on');
}
function clickBtn3(e){
    audio3.play();
    audio3.currentTime = 0;
    const pad = document.getElementById('pad3')
    pad.classList.add('on');
}
function clickBtn4(e){
    audio4.play();
    audio4.currentTime = 0;
    const pad = document.getElementById('pad4')
    pad.classList.add('on');
}
function clickBtn5(e){
    audio5.play();
    audio5.currentTime = 0;
    const pad = document.getElementById('pad5')
    pad.classList.add('on');
}
function clickBtn6(e){
    audio6.play();
    audio6.currentTime = 0;
    const pad = document.getElementById('pad6')
    pad.classList.add('on');
}
function clickBtn7(e){
    audio7.play();
    audio7.currentTime = 0;
    const pad = document.getElementById('pad7')
    pad.classList.add('on');
}
function clickBtn8(e){
    audio8.play();
    audio8.currentTime = 0;
    const pad = document.getElementById('pad8')
    pad.classList.add('on');
}
function clickBtn9(e){
    audio9.play();
    audio9.currentTime = 0;
    const pad = document.getElementById('pad9')
    pad.classList.add('on');
}