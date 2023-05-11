var startTime;
var elapsedTime = 0;
var timerInterval;

function startChronometer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function () {
    var currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    displayTime(elapsedTime);
  }, 10); // Mise à jour toutes les 10 millisecondes
}

function pauseChronometer() {
  clearInterval(timerInterval);
}

function resetChronometer() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  displayTime(elapsedTime);
}

function displayTime(time) {
  var minutes = Math.floor(time / 60000);
  var seconds = Math.floor((time % 60000) / 1000);
  var milliseconds = Math.floor((time % 1000) / 10);

  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  milliseconds = milliseconds < 10 ? "0" + milliseconds : milliseconds;

  var timerDisplay = document.getElementById("timer");
  timerDisplay.textContent = minutes + ":" + seconds + "." + milliseconds;
}
