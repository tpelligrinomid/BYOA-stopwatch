let startTime;
let elapsedTime = 0;
let timerInterval;

const display = {
    hours: document.getElementById('hours'),
    minutes: document.getElementById('minutes'),
    seconds: document.getElementById('seconds'),
    milliseconds: document.getElementById('milliseconds')
};

const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

function startTimer() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTime, 10);
    startBtn.disabled = true;
    stopBtn.disabled = false;
    showRunningIcon();
}

function stopTimer() {
    clearInterval(timerInterval);
    startBtn.disabled = false;
    stopBtn.disabled = true;
    showStoppedIcon();
}

function resetTimer() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    updateDisplay(0);
    startBtn.disabled = false;
    stopBtn.disabled = false;
    showDefaultIcon();
}

function updateTime() {
    elapsedTime = Date.now() - startTime;
    updateDisplay(elapsedTime);
}

function updateDisplay(time) {
    const hours = Math.floor(time / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);

    display.hours.textContent = padNumber(hours);
    display.minutes.textContent = padNumber(minutes);
    display.seconds.textContent = padNumber(seconds);
    display.milliseconds.textContent = padNumber(milliseconds);
}

function padNumber(number) {
    return number.toString().padStart(2, '0');
}

function showRunningIcon() {
    document.querySelectorAll('.status-icon i').forEach(icon => icon.classList.remove('active'));
    document.querySelector('.icon-running').classList.add('active');
}

function showStoppedIcon() {
    document.querySelectorAll('.status-icon i').forEach(icon => icon.classList.remove('active'));
    document.querySelector('.icon-stopped').classList.add('active');
}

function showDefaultIcon() {
    document.querySelectorAll('.status-icon i').forEach(icon => icon.classList.remove('active'));
    document.querySelector('.icon-clock').classList.add('active');
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer); 