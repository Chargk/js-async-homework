let intervalId = null;

const timerDisplay = document.getElementById("timer");
const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");

startButton.addEventListener("click", () => {
  if (intervalId === null) {
    intervalId = setInterval(() => {
      timerDisplay.textContent = parseInt(timerDisplay.textContent) + 1;
    }, 1000);
    startButton.disabled = true;
    stopButton.disabled = false;
  }
});

stopButton.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
  startButton.disabled = false;
  stopButton.disabled = true;
});
