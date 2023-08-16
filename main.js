const Timer = document.getElementById("Timer");
const Start = document.getElementById("Start");
const Stop = document.getElementById("Stop");
const Reset = document.getElementById("Reset");

let hour = 0;
let minute = 0;
let second = 0;
let msecond = 0;

let stopwatch = () => {
    msecond++;
    if (msecond >= 10) {
        second++;
        msecond = 0;
    } else if (second % 60 === 0 && second !== 0 ) {
        minute++;
        second = 0;
    } else if (minute % 60 === 0 && minute !== 0 ) {
        hour++;
        minute = 0;
    }

    Timer.innerHTML = (hour + ":" + minute + ":" + second + ":" + msecond );
}

let interval;

Start.addEventListener('click' , () => {
    interval = setInterval(stopwatch, 100);
    Start.disabled = true;
    Stop.disabled = false;
    Reset.disabled = true;
})

Stop.addEventListener('click' , () => {
    clearInterval(interval);
    Start.disabled = false;
    Stop.disabled = true;
    Reset.disabled = false;
})

Reset.addEventListener('click' , () => {
    Timer.innerHTML = "0:0:0:0";
    hour = 0;
    minute = 0;
    second = 0;
    msecond = 0;
    Start.disabled = false;
    Stop.disabled = true;
    Reset.disabled = true;
    
})




const Timer = document.getElementById("Timer");
const Start = document.getElementById("Start");
const Stop = document.getElementById("Stop");
const Reset = document.getElementById("Reset");

let hour = 0;
let minute = 0;
let second = 0;
let msecond = 0;

let stopwatch = () => {
    msecond++;
    if (msecond >= 10) {
        second++;
        msecond = 0;
    } else if (second % 60 === 0 && second !== 0 ) {
        minute++;
        second = 0;
    } else if (minute % 60 === 0 && minute !== 0 ) {
        hour++;
        minute = 0;
    }

    Timer.innerHTML = (hour + ":" + minute + ":" + second + ":" + msecond );
}

let interval;

Start.addEventListener('click' , () => {
    interval = setInterval(stopwatch, 100);
    Start.disabled = true;
    Stop.disabled = false;
    Reset.disabled = true;
})

Stop.addEventListener('click' , () => {
    clearInterval(interval);
    Start.disabled = false;
    Stop.disabled = true;
    Reset.disabled = false;
})

Reset.addEventListener('click' , () => {
    Timer.innerHTML = "0:0:0:0";
    hour = 0;
    minute = 0;
    second = 0;
    msecond = 0;
    Start.disabled = false;
    Stop.disabled = true;
    Reset.disabled = true;
    
})
