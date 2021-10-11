// Questions Object
var questions = [
    "The condition in an if/else statement is enclosed with:",
    "What is NOT a way to declare a variable in JavaScript?",
    "How do you add comments to JavaScript?",
    "A 'switch' statement's options are defined using:",
    "How do you increment an integer variable in JavaScript?",
    "How do you assign a new value 'const' variables?"
];

// Answers
const one = {1:"( )", 2:"[ ]", 3:"{ }", 4:"< >", solution:"( )"};
const two = {1:"var", 2:"let", 3:"const", 4:"decl", solution:"decl"};
const three = {1:"(( ))", 2:"<!-- -->", 3:"//", 4: "/* */", solution:"//"};
const four = {1:"option", 2:"case", 3:"choice", 4:"path", solution:"case"};
const five = {1:"+", 2: "++", 3:"inc", 4:"inc+", solution:"++"};
const six = {1: "let", 2:"[constant name] = [new value]", 3:"reassign", 4:"'const' variables cannot be changed", solution:"'const' variables cannot be changed"};
var answers = [one, two, three, four, five, six];

var timeLeft = 60;
var questionNumber = 0;
var scores = {};

// Populate question and answer buttons
function populateQuestion() {
    $("#quiz-header").text(questions[questionNumber]);
    $("#answer-one").text(answers[questionNumber][1]);
    $("#answer-two").text(answers[questionNumber][2]);
    $("#answer-three").text(answers[questionNumber][3]);
    $("#answer-four").text(answers[questionNumber][4]);
};

// End the quiz and display final score
function endQuiz() {
    $("#quiz-header").text("All done!");
    $("#instructions").removeClass("d-none");
    $("#instructions").text("Your final score is " + timeLeft +".");
    $("#score-submit").removeClass("d-none");
    $("#quiz-body").addClass("d-none");
};

// Save user's high score
function saveScore() {
    var tempArray = [];
    var score = timeLeft;
    var initials = $("#initials-input").val().trim();
    tempArray.push({
        score: score,
        initials: initials
    })
    scores = tempArray;
    localStorage.setItem("scores", JSON.stringify(scores));
}

// Display high scores
function displayScores() {
    $("#quiz-header").text("High Scores:");
    $("#instructions").addClass("d-none");
    $("#start-button").addClass("d-none");
    $("#high-scores-column").addClass("d-none");
    $("#time-left").addClass("d-none");
    JSON.parse(localStorage.getItem("scores"));
    $("#high-scores").removeClass("d-none");
}

// Reset Quiz
function resetQuiz() {
    $("#instructions").removeClass("d-none");
    $("#start-button").removeClass("d-none");
    $("#high-scores-column").removeClass("d-none");
    $("#time-left").removeClass("d-none");
    $("#high-scores").addClass("d-none");
    timeLeft = 60;
    questionNumber = 0;
}

// Quiz Function
$("#start-button").click(function() {
    // Start timer countdown
    var timeInterval = setInterval(function() {
        // If there is still time remaining, decrease timeLeft and update display
        if (timeLeft > 0) {
            timeLeft--;
            $("#time-left").text("Time: " + timeLeft + "s");
        // If no time remaining, 
        } else {
            $("#time-left").text("Time Up!");
            clearInterval(timeInterval);
            endQuiz();
        }
    }, 1000);
    // Hide start button and instructions
    $("#start-button").addClass("d-none");
    $("#instructions").addClass("d-none");
    // Create first question
    populateQuestion();
    // Show answer buttons 
    $("#quiz-body").removeClass("d-none");
    $("#quiz-body").addClass("d-inline-block");
    // When user selects an answer, tell them if they were correct and display the next question and set of answers
    $("#quiz-body").find("button").click(function() {
        if (questionNumber < 5) {
            $("#correctness").removeClass("d-none");
            if ($(this).text() === answers[questionNumber].solution) {
                $("#correctness").text("Correct!");
            } else {
                $("#correctness").text("Wrong!");
                timeLeft -= 10;
                if (timeLeft >= 0) {
                    $("#time-left").text("Time: " + timeLeft + "s");
                } else {
                    timeLeft = 0;
                    endQuiz();
                    return false;
                }
            }
                // Increment the question number and display next question
                questionNumber++;
                populateQuestion();
        } else {
            clearInterval(timeInterval);
            endQuiz();
            return false;
        }
    });
});

// When user submits score, save score and display high scores
$("#initials-submit").click(function(){
    saveScore();
});

// When user clicks View High Scores, display scores
$("#high-scores-button").click(function(){
    displayScores();
})

// When user clicks Go Back, reset quiz
$("#go-back").click(function(){
    resetQuiz();
})