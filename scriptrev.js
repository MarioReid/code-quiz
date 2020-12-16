var timer = document.getElementById("timer");
var startButton = document.getElementById("startButton");
var mainContentEl = document.getElementById("mainContent");

var currentQuestionNumber = 0;

var question1Object = {
  questionText: "Commonly used data types Do Not include:",
  answers: [
    "1. string", "2. booleans", "3. alerts", "4. numbers"
  ],
  correctAnswer: "alerts"
}
var question2Object = {
  questionText: "The condition in an if/else statement is enclosed within ____.",
  answers: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
  correctAnswer: "parentheses"
}
var question3Object = {
  questionText: "Arrays in JavaScript can be used to store ____.",
  answers: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
  correctAnswer: "all of the above"
}
var question4Object = {
  questionText: "String values must be enclosed within ____ when being assigned to variables.",
  answers: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
  correctAnswer: "parentheses"
}
var question5Object = {
  questionText: "A very useful tool used during development and debugging for printing content to the debugger is:",
  answers: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"],
  correctAnswer: "console.log"
}

var questionObjects = [
  question1Object,
  question2Object,
  question3Object,
  question4Object,
  question5Object,
]
//Function for starter page
function showQuestion(number) {
  var question = document.createElement("h1");
  question.textContent = questionObjects[number].questionText;
  mainContentEl.appendChild(question);
//For loops for questions and answers with buttons.
  for (i = 0; i < questionObjects[number].answers.length; i++) {
    var buttons = document.createElement("button")
        buttons.textContent = questionObjects[number].answers[i]
        buttons.setAttribute("id", "button" + parseInt(i+1))
        buttons.setAttribute("class", "buttonClass")

        buttons.setAttribute("style", "display:block; margin-bottom:5px; background-color:purple; color: white")
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
  // question1()
  showQuestion(0);
});

document.addEventListener("click", function (event) {
  if(event.target.className === 'buttonClass') {
    console.log(event.target.textContent + " vs. " + questionObjects[currentQuestionNumber].correctAnswer)
    if(event.target.textContent === questionObjects[currentQuestionNumber].correctAnswer) {
      console.log("Correct!")
    } else {
      console.log("Wrong!");
    }

    console.log("Answer was clicked!")
    mainContentEl.innerHTML = "";

    currentQuestionNumber++;
    showQuestion(currentQuestionNumber);
  }
})