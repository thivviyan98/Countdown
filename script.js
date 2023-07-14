const hoursEl = document.getElementById("hours");
const daysEl = document.getElementById("days");
const minsEl = document.getElementById("mins");
const secondsEl =document.getElementById("seconds");

const newYears = '1 Jan 2024';

function  countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();


    const totalSeconds = (newYearsDate - currentDate)/1000;
    const days = Math.floor(totalSeconds /60 / 60 / 24);
    const hours = Math.floor(totalSeconds /3600) % 24;
    const mins = Math.floor(totalSeconds/60)%60;
    const seconds = Math.floor(totalSeconds % 60)

        
    hoursEl.innerHTML= formatTime(hours);
    daysEl.innerHTML= days;
    minsEl.innerHTML= formatTime(mins);
    secondsEl.innerHTML= formatTime(seconds);

}

function formatTime(time){ s
     return time < 10 ? (`0${time}`) : time ;
}



//initial call
countdown();

setInterval(countdown ,1000);