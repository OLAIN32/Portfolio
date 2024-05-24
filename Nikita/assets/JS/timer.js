document.addEventListener("DOMContentLoaded", function() {
    const timerDiv = document.querySelector(".timer");
    let startTime;
    let timerInterval;

    function startTimer() {
        startTime = Date.now();
        timerInterval = setInterval(updateTimer, 1000);
    }

    function updateTimer() {
        const elapsedTime = Date.now() - startTime;
        const minutes = Math.floor(elapsedTime / 60000);
        const seconds = Math.floor((elapsedTime % 60000) / 1000);
        timerDiv.textContent = padNumber(minutes) + ":" + padNumber(seconds);
    }

    function padNumber(num) {
        return (num < 10 ? "0" : "") + num;
    }

    startTimer();
});
