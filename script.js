var timer = document.getElementById("timer");
var startButton = document.getElementById("startButton")
var mainContentEl = document.getElementById("mainContent")




//When hit start button: clear html, start timer, and ask 1st question



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

startButton.addEventListener("click", function() {
   // Clear todoList element and update todoCountSpan
    mainContentEl.innerHTML = "";
    setTime();

});








