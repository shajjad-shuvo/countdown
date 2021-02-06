// GET ALL ELEMENTS FROM HTML;

const countDown = document.getElementById('countDown');
const year = document.getElementById('year');
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

// GET CURRENT DATE AND NEXT YEAR DATE
const currentYear = new Date().getFullYear();
const nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);

// WRITE A FUNCTION TO CALCULATE COUNTDOWN
function countDownTimer()
{
    const currentTime = new Date();
    const diff = nextYear - currentTime;
    
    const d = Math.floor(diff /1000 / 60 / 60 / 24);
    const h = Math.floor(diff /1000 / 60 / 60 ) % 24;
    const m = Math.floor(diff /1000 / 60 ) % 60;
    const s = Math.floor(diff /1000 ) % 60;
    
    seconds.innerHTML = s < 10 ? '0' + s : s;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    hours.innerHTML = h < 10 ? '0' + h : h;
    days.innerHTML = d < 10 ? '0' + d : d;
}

//  JS TIMING --- BOM
setInterval(countDownTimer,1000);

//TO PRINT NEXT YEAR IN HTML
year.innerHTML = nextYear.getFullYear();
