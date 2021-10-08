// When the start button is clicked, start the quiz
$("#start-button").click(function() {
    $("#start-button").remove();
    $("#quiz-header").html("<h1>The condition in an if/else statement is enclosed with:</h1>");
    $("#quiz-body").html("<button type='button' class='btn btn-primary' id='start-button'>Start Quiz</button>");
})