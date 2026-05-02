let resetBtn = document.getElementById("reset");
let stopBtn = document.getElementById("stop");
let startBtn = document.getElementById("start");
let clock = document.getElementById("clock");

let h = 0;
let m = 0;
let s = 0;

let timeOut = null;

let isRunning = false;

const updateDisplay = () => {
    clock.textContent = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

// Fonctions de contôles

const start = () => {
    if (!isRunning){
        isRunning = true;
        run();
    }
}

const stop = () => {
    if (isRunning){
        isRunning = false;
        clearTimeout(timeOut);
    }
}

const  reset = () => {
    isRunning = false;
    clearTimeout(timeOut);

    h = 0;
    m = 0;
    s = 0;

    updateDisplay ();
}

// Logique Chnomètre

const run = () => {
    if (!isRunning){
        return;
    }

    s++;
    if (s === 60){
        s = 0;
        m++;
    }
    if (m === 60){
        m = 0;
        h++;
    }
    if (h === 24){
        reset();
    }

    updateDisplay();
    timeOut = setTimeout(run, 1000);
}

// Evènements

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);

// Affichage du chronomètre
updateDisplay ();