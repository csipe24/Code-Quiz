// Define Variables
var score = 0
// Timer Variables
var timeLeft = 25;
    timerEl = $("#timerLeft");

// Questions Variables

// Button Variables
var startBtn = $("#start-button"),
    choiceBtn = $(".btn-lg");


// Questions Variables
var questionNumberEl = $("#questionNumber"),
questionEl = $("#question"),
response1 = $("#response-1"),
response2 = $("#response-2"),
response3 = $("#response-3"),
response4 = $("#response-4"),
entry = '';

var questionIndex = 0
var questions = [
{
questionNumber:"1",
question: "What is meant by 'this' keyword in javascript?",
answers : [
    "It refers to the current object",
    "It is a muffin",
    "It refers to the previous object",
    "It is a variable which contains value"
   
],
correctAnswer: "It refers to the current object"
},

{
questionNumber:"2",
question: "JavaScript entities start with _______ and end with _________.",
answers : [
    "Ampersand, semicolon",
    "Semicolon, colon",
    "Semicolon, ampersand",
    "Peanut, ampersand"
],
correctAnswer: "Ampersand, semicolon"
},

{
questionNumber:"3",
question: "What should appear at the very end of your JavaScript?",
answers : [
    "The <body> tag",
    "The </script> tag",
    "A detailed README",
    "A link to an external URL"
],
correctAnswer: "The </script> tag"
},

{
questionNumber:"4",
question: "JavaScript?",
answers : [
    "The <body> tag",
    "The </script> tag",
    "A detailed README",
    "A link to an external URL"
],
correctAnswer: "The </script> tag"
},

{
questionNumber:"5",
question: "Sample Question 5?",
answers : [
    "The <body> tag",
    "The </script> tag",
    "A detailed README",
    "A link to an external URL"
],
correctAnswer: "The </script> tag"
},

];


// Function to set time and begin countdown on start button
function startTime(){
    $(timerEl).text(timeLeft);

    var timerInterval = setInterval(function(){
    timeLeft--;
    $(timerEl).text(timeLeft);

        if (questionIndex > 5){
        timeLeft = score
        clearInterval(timerInterval)};
        

        if (timeLeft === 0){
        clearInterval(timerInterval)};

        if (timeLeft <= 0){
            clearInterval(timerInterval)};

        // Make Form Appear when timer = 0
    },1000);
}

// Function to display questions
function displayQuestion(){
    $(questionNumberEl).text(questions[questionIndex].questionNumber);
    $(questionEl).text(questions[questionIndex].question);
    $(response1).text(questions[questionIndex].answers[0]);
    $(response2).text(questions[questionIndex].answers[1]);
    $(response3).text(questions[questionIndex].answers[2]);
    $(response4).text(questions[questionIndex].answers[3]);
};

function clearQuestion(){
    $(questionNumberEl).hide("");
    $(questionEl).hide("");
    $(response1).hide("");
    $(response2).hide("");
    $(response3).hide("");
    $(response4).hide("");
    console.log(entry);
};


function submitHighScore(){

};

// Start Button JS
$(startBtn).on( 'click', function( event ) {
    startTime();
    displayQuestion();
    console.log ("Game has started!");
    });
    
// Multiple Choice
$(choiceBtn).on( 'click', function( event ) {
    var entry = (this.text);
    questionIndex++;

    if (questionIndex<questions.length){
    displayQuestion();
    };

    if (questionIndex>=questions.length){
        clearQuestion();
        // submitHighScore();
    };

    if (entry != questions[questionIndex].correctAnswer){
        timeLeft = timeLeft - 3};




});

