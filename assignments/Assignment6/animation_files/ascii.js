"use strict";
window.onload = onLoad;

function onLoad() {
   
    let btnStart = document.getElementById("start");
    let btnStop = document.getElementById("stop");
    let animationDropdown = document.getElementById("animation");
    let sizeDropdown = document.getElementById("size");
    let speedCheck = document.getElementById("speed");
   
    
    btnStart.onclick = start;
    btnStop.onclick = stop;
    speedCheck.onchange = onChangeSpeed;
    animationDropdown.onchange = onChangeAnimation;  
    sizeDropdown.onchange = onChangeSize;

   
}
var intervalId;
var intervalSpeed;
var animationText;
function start() {
    let textarea = document.getElementById("text");
    animationText = textarea.value;
    setTimer();
    enableStartButton(false);

}

function setTimer() {
    let textarea = document.getElementById("text");
    let speedCheck = document.getElementById("speed");
    intervalSpeed = speedCheck.checked ? 50 : 250;
    let animationArray = animationText.split("=====\n");
    let index = 0;
    intervalId = setInterval(() => {
        if (index == animationArray.length)
            index = 0;
        textarea.value = animationArray[index];
        index++;
    }, intervalSpeed );

   
}

function stop() {
    clearInterval(intervalId);
    let textarea = document.getElementById("text");
    textarea.value = animationText;
    enableStartButton(true);
}

function onChangeAnimation() {
    let textarea = document.getElementById("text");
    let animationDropdown = document.getElementById("animation");
    textarea.value = ANIMATIONS[animationDropdown.value];
}

function onChangeSize() {
    let textarea = document.getElementById("text");
    let sizeDropdown = document.getElementById("size");
    textarea.style.fontSize = sizeDropdown.value;
}

function onChangeSpeed() {
    clearInterval(intervalId);
    setTimer();
    
}

function enableStartButton(enable){
    let btnStart = document.getElementById("start");
    let btnStop = document.getElementById("stop");
    let animationDropdown = document.getElementById("animation");
    btnStart.disabled = !enable;
    animationDropdown.disabled = !enable;
    btnStop.disabled = enable;
}