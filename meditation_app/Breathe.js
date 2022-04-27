//Get DOM elements
const container = document.querySelector(".container");
const time = document.getElementById("time");
const text = document.getElementById("text");
const circle = document.querySelector(".circle");
const pointerContainer = document.querySelector(".pointer-container");
const pointer = document.querySelector(".pointer");
const gradient = document.querySelector(".gradient-circle");

//function showTime
function showTime() {
    let today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();

    //Set AM and PM
    const amPM = hour >= 12 ? "PM" : "AM";

    if(hour < 10){
        hour = "0" + hour;
    }

    if(minute < 10) {
        minute = "0" + minute
    }

    if(second < 10){
        second = "0" + second
    }

    time.innerHTML = `${hour}:${minute}:<small>${second}|${amPM}</small>`;
    setTimeout(showTime,1000)
};

//set time for breathe in, hold and breathe out
const totalTime = 7500
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5

function breatheAnimation(){
    text.innerHTML = "Breathe In";
    container.className = "container grow";


    setTimeout(() => {
        text.innerText = "Hold"

        setTimeout(() => {
            text.innerText = "Breathe Out";
            container.className = "container shrink"
        },holdTime)
    }, breatheTime)
}

setInterval(breatheAnimation, totalTime)


showTime();
breatheAnimation();