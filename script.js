var timer = document.getElementById("timer");
var startButton = document.getElementById("startButton")
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");



//Set Timer
var secondsLeft = 75;

function setTime() {
    setInterval(function() {
    secondsLeft--;
    timer.textContent = secondsLeft
    // if(secondsLeft === 0) {
    //   clearInterval(timerInterval);
    //   sendMessage();
    // }

  }, 1000);
}
    setTime();

