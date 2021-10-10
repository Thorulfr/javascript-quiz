// Questions Object
var questions = [
    "The condition in an if/else statement is enclosed with:",
    "A variable inside of a function can be used by other functions.",
    "How do you add comments to JavaScript?",
    "A 'switch' statement must always include a default option.",
    "How do you increment an integer variable in JavaScript?",
    "'Const' variables' values can be reassigned."
];

// Answers Object
var answers = [
    ["( )", "[ ]", "{ }", "< >"],
    ["True", "False"],
    ["(( ))", "<!-- -->", "//", "/* */"],
    [""]
];

// Timer Functionality
var timeLeft = 60;
function countdown() {
    timeLeft--;
    $("#time-left").text("Time: " + timeLeft + "s");
} 

var questionNumber = 0;

// When the start button is clicked, start the quiz
$("#start-button").click(function() {
    // Start timer countdown
    setInterval(countdown, 1000);
    // Hide start button and instructions
    $("#start-button").addClass("d-none");
    $("#instructions").addClass("d-none");
    // Change header to first question
    $("#quiz-header").text(questions[0]);
    // Show answer buttons and replace text with question one answers
    $("#answer-one").removeClass("d-none");
    $("#answer-one").addClass("d-inline-block");
    $("#answer-one").text(answers[0][0]);
    $("#answer-two").removeClass("d-none");
    $("#answer-two").addClass("d-inline-block");
    $("#answer-two").text(answers[0][1]);
    $("#answer-three").removeClass("d-none");
    $("#answer-three").addClass("d-inline-block");
    $("#answer-three").text(answers[0][2]);
    $("#answer-four").removeClass("d-none");
    $("#answer-four").addClass("d-inline-block");
    $("#answer-four").text(answers[0][3]);
    questionNumber++;
})

// After quiz is initialized, progress the questions/answer buttons
function remainingQuestions() {
    
}