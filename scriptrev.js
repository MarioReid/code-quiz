var timer = document.getElementById("timer");
var startButton = document.getElementById("startButton");
var mainContentEl = document.getElementById("mainContent");

var currentQuestionNumber = 0;

var questions = [
  "Commonly used data types Do Not include:",
  "The condition in an if/else statement is enclosed within ____.",
  "Arrays in JavaScript can be used to store ____.",
  "String values must be enclosed within ____ when being assigned to variables.",
  "A very useful tool used during development and debugging for printing content to the debugger is:",];

var answers = [
  ["1. string", "2. booleans", "3. alerts", "4. numbers"],
  ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
  ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
  ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
  ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"],
];
var correctAnswers = ["alerts", "parentheses", "all of the above", "parentheses", "console.log"];


var question1Object = {
  questionText: "Commonly used data types Do Not include:",
  answers: [
    "string", "booleans", "alerts", "numbers"
  ],
  correctAnswer: "alerts"
}
var question2Object = {
  questionText: "The condition in an if/else statement is enclosed within ____.",
  answers: ["quotes", "curly brackets", "parentheses", "square brackets"],
  correctAnswer: "parentheses"
}
var question3Object = {
  questionText: "The condiQuestion3tion in an if/else statement is enclosed within ____.",
  answers: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
  correctAnswer: "parentheses"
}
var question3Object = {
  questionText: "The condiQuestion3tion in an if/else statement is enclosed within ____.",
  answers: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
  correctAnswer: "parentheses"
}
var question3Object = {
  questionText: "The condiQuestion3tion in an if/else statement is enclosed within ____.",
  answers: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
  correctAnswer: "parentheses"
}











var questionObjects = [
  question1Object,
  question2Object,
  question3Object
]


function showQuestion(number) {
  var question = document.createElement("h1");
  question.textContent = questionObjects[number].questionText;
  mainContentEl.appendChild(question);

  for (i = 0; i < questionObjects[number].answers.length; i++) {
    var buttons = document.createElement("button")
        buttons.textContent = questionObjects[number].answers[i]
        buttons.setAttribute("id", "button" + parseInt(i+1))
        buttons.setAttribute("class", "buttonClass")

        buttons.setAttribute("style", "display:block; margin-bottom:5px")
        mainContentEl.appendChild(buttons)
  }
}


//When hit start button: clear html, start timer, and ask 1st question
// function question1(){
//     var count = 1
//     var question1 = document.createElement("h1");
//     question1.textContent = questions[0]
//     mainContentEl.appendChild(question1)
// //For loop for answers and blocks added
//     for ( i = 0; i < answers[0].length; i++){
//         var buttons = document.createElement("button")
//         buttons.textContent = answers[0][i]
//         buttons.setAttribute("class", "button" + count++)
//         buttons.setAttribute("style", "display:block; margin-bottom:5px")
//         mainContentEl.appendChild(buttons)
//     }


// }



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