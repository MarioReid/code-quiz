var timer = document.getElementById("timer");
var startButton = document.getElementById("startButton")
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");





//When hit start button: clear html, start timer, and ask 1st question



  // Clear todoList element and update todoCountSpan
  todoList.innerHTML = "";







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

