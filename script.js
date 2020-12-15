var quizQuestions = document.getElementById("quiz-questions");
var questionNum = 0;

var questions = [
    {q: }
]




















    var score = 0
























//index of the question that were a
function displyedQuestion(index) {
    console.log(questions[index]);

    var questionHeader = document.createElement(h1);
    questionHeader.textContent = questions[questionNum].q;
    quizQuestions.append(questionHeader);

    for(var i=o; i< questions[questionNum].answsers.length; i++){
        var answserButton = document.createElement("button");
        answserButton.textContent = questions[questionNum].answsers[i];
        quizQuestions.append(answerButton);
    }
}