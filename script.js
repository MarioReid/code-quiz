var timer = document.getElementById("timer");
var startButton = document.getElementById("startButton");
var mainContentEl = document.getElementById("mainContent");

var questions = [
  "Commonly used data types Do Not include:",
  "The condition in an if/else statement is enclosed within ____.",
  "Arrays in JavaScript can be used to store ____.",
  "String values must be enclosed within ____ when being assigned to variables.",
  "A very useful tool used during development and debugging for printing content to the debugger is:",];

var answers = [
  ["string", "booleans", "alerts", "numbers"],
  ["quotes", "curly brackets", "parentheses", "square brackets"],
  ["numbers and strings", "other arrays", "booleans", "all of the above"],
  ["commas", "curly brackets", "quotes", "parentheses"],
  ["JavaScript", "terminal/bash", "for loops", "console.log"],
];
var correctAnswers = ["alerts", "parentheses", "all of the above", "parentheses", "console.log"];

//When hit start button: clear html, start timer, and ask 1st question
function question1(){
    var question1 = document.createElement("h1");
    question1.textContent = questions[0]
    mainContentEl.appendChild(question1)

    for ( i = 0; i < answers[0].length; i++){
        var buttons = document.createElement("button")
        buttons.textContent = answers[0][i]
        mainContentEl.appendChild(buttons)
    }
}



//Set Timer
var secondsLeft = 75;

function setTime() {
  setInterval(function () {
    secondsLeft--;
    timer.textContent = secondsLeft;
    // if(secondsLeft === 0) {
    //   clearInterval(timerInterval);
    //   sendMessage();
    // }
  }, 1000);
}

startButton.addEventListener("click", function () {
  // Clear todoList element and update todoCountSpan
  mainContentEl.innerHTML = "";
  setTime();
  question1()
});