var questions = [
    "<h1>The condition in an if/else statement is enclosed with:</h1>",
    "<h1>A variable inside of a function can be used by other functions.</h1>",
    "<h1>How do you add comments to JavaScript?</h1>",
    "<h1>A 'switch' statement must always include a default option.</h1>",
    "<h1>How do you increment an integer variable in JavaScript?</h1>",
    "<h1>'Const' variables' values can be reassigned.</h1>"
];

var questionNumber = 0;

// When the start button is clicked, start the quiz
$("#start-button").click(function() {
    $("#start-button").addClass("d-none");
    $("#instructions").addClass("d-none");
    $("#quiz-header").html(questions[0]);
    $("#answer-one").removeClass("d-none");
    $("#answer-one").addClass("d-inline-block");
    $("#answer-two").removeClass("d-none");
    $("#answer-two").addClass("d-inline-block");
    $("#answer-three").removeClass("d-none");
    $("#answer-three").addClass("d-inline-block");
    $("#answer-four").removeClass("d-none");
    $("#answer-four").addClass("d-inline-block");
})