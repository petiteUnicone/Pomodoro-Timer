const start = document.getElementById("start");
const sto = document.getElementById("stop");
const reset = document.getElementById("reset");
const timer = document.getElementById("timer");

let timeLeft = 1500;
let interval;

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds  = timeLeft % 60;

    timer.innerHTML = 
    `${minutes.toString().padStart(2,"0")}
    :
    ${seconds.toString().padStart(2,"0")}`;
};

function startTimer() {
    interval = setInterval( () => {
        timeLeft--;
        updateTimer();

        if (timeLeft === 0){
            clearInterval(interval);
            alert("Time's up!");
            timeLeft = 1500;
            updateTimer();
        };
    }, 1000);
};

function stopTimer(){
    clearInterval(interval);
}

function resetTimer() {
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer();
};

start.addEventListener("click", startTimer);
sto.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);