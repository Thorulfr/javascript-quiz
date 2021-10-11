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

// Populate question and answer buttons
function populateQuestion() {
    $("#quiz-header").text(questions[questionNumber]);
    $("#answer-one").text(answers[questionNumber][1]);
    $("#answer-two").text(answers[questionNumber][2]);
    $("#answer-three").text(answers[questionNumber][3]);
    $("#answer-four").text(answers[questionNumber][4]);
};

// Quiz Function
$("#start-button").click(function() {
    // Start timer countdown
    var timeInterval = setInterval(function() {
        // If there is still time remaining, decrease timeLeft and update display
        if (timeLeft > 1) {
            timeLeft--;
            $("#time-left").text("Time: " + timeLeft + "s");
        // If no time remaining, 
        } else {
            $("#time-left").text("Time Up!");
            clearInterval(timeInterval);
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
        $("#correctness").removeClass("d-none");
        if ($(this).text() === answers[questionNumber].solution) {
            $("#correctness").text("Correct!");
        } else {
            console.log("Wrong!");
            $("#correctness").text("Wrong!");
            timeLeft -= 5;
        }
        // Increment the question number and display next question after 3 seconds
        questionNumber++;
        setTimeout(function() {
            $("#correctness").addClass("d-none");
            populateQuestion();
        }, 3000);
    });
});