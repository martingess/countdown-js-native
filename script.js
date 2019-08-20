let deadLine = '2019-08-20'; //time when the timer stops

function getTimeRemaining(endTime) {
    let t = Date.parse(endTime) - Date.parse(new Date()),
        seconds = Math.floor((t / 1000) % 60),
        minutes = Math.floor((t / 1000 / 60) % 60),
        hours = Math.floor((t / (1000 * 60 * 60)));

    return {
        'total': t,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function setClock(id, endTime) {
    let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
        let t = getTimeRemaining(endTime);
        hours.textContent = t.hours;
        if (t.minutes > 10) {
            minutes.textContent = t.minutes;
        } else {
            minutes.textContent = '0' + t.minutes;
        }
        if (t.seconds > 10) {
            seconds.textContent = t.seconds;
        } else {
            seconds.textContent = '0' + t.seconds;
        }
        
        //set time to 00:00:00 at the end
        if (t.total <= 0) {
            clearInterval(timeInterval);
            seconds.textContent = '00'; 
            minutes.textContent = '00';
            hours.textContent = '00';
        }
    }
}

setClock("timer", deadLine);
