// Define Variables
var score = 0
// Timer Variables
var timeLeft = 80;
    timerEl = $("#timerLeft");

// Form Variables
var highScoreFormEl =$("form"),
    score =$("#score");
    submit =$("#submit");
    initialSub =$("#initials");
    hsInitials =$("#hsinitials");
    hsscore =$("#hsscore");


// Button Variables
var startBtn = $("#start-button"),
    choiceBtn = $(".btn-md"),
    restartEl = $("#restart");

// Questions Variables
var questionNumberEl = $("#questionNumber"),
questionEl = $("#question"),
response1 = $("#response-1"),
response2 = $("#response-2"),
response3 = $("#response-3"),
response4 = $("#response-4"),
entry = "",
choicesEl = $("#choicesEl");

var questionIndex = 0
var questions = [
{
questionNumber:"1",
question: "What is meant by 'this' keyword in javascript?",
answers : ["It refers to the current object","It is a muffin","It refers to the previous object","It is a variable which contains value"
   
],
correctAnswer:"It refers to the current object"
},

{
questionNumber:"2",
question: "JavaScript entities start with _______ and end with _________.",
answers : ["Ampersand, semicolon","Semicolon, colon","Semicolon, ampersand","Peanut, ampersand"
],
correctAnswer:"Ampersand, semicolon"
},

{
questionNumber:"3",
question: "What should appear at the very end of your JavaScript?",
answers : ["The <body> tag","The </script> tag","A detailed README","A link to an external URL"
],
correctAnswer:"The </script> tag"
},

{
questionNumber:"4",
question: "Which built-in method calls a function for each element in the array?",
answers : ["While()","loop()","forEach()","None of the above"
],
correctAnswer: "forEach()"
},

{
questionNumber:"5",
question: "Which of the following function of Array object joins all elements of an array into a string?",
answers : ["concat()","join()","pop()","map()"
],
correctAnswer: "concat()"
},
];

// Function to set time and begin countdown on start button
function startTime(){
    $(timerEl).text(timeLeft);

    var timerInterval = setInterval(function(){

        if (questionIndex < 5) {
        timeLeft--;
        $(timerEl).text(timeLeft);
        };

        if (questionIndex > 4){
        timeLeft = score;
        clearInterval(timerInterval);
        return};
        
        if (timeLeft === 0){
        clearInterval(timerInterval)};

        if (timeLeft <= 0){
            clearInterval(timerInterval)};

        // Make Form Appear when timer = 0
    },1000);
}

// Function to display questions
function displayQuestion(){
  $(questionNumberEl).text("Question Number - " + questions[questionIndex].questionNumber);
    $(questionEl).text(questions[questionIndex].question);
    $(response1).text(questions[questionIndex].answers[0]);
    $(response2).text(questions[questionIndex].answers[1]);
    $(response3).text(questions[questionIndex].answers[2]);
    $(response4).text(questions[questionIndex].answers[3]);
};

function clearQuestion(){
    $(choicesEl).hide("");
};


function submitHighScore(){
    $(highScoreFormEl).show();
    $(score).text(timeLeft);
};

// Start Button JS
$(startBtn).on( 'click', function( event ) {
    startTime();
    var questionIndex = 0;
    displayQuestion();
    console.log ("Game has started!");
    $(restartEl).show();
    $(startBtn).hide();
    $(choiceBtn).show();
    });
    
// Multiple Choice
$(choiceBtn).on( 'click', function( event ) {
    var entry = this.text;
    var corAnswer = questions[questionIndex].correctAnswer;
    console.log(this.text);
    console.log(corAnswer);
    (questions[questionIndex].correctAnswer)
    questionIndex++;

    if (questionIndex<questions.length){
    displayQuestion();
    };

    if (questionIndex>=questions.length){
    clearQuestion();
    submitHighScore();
    };

    if (entry === corAnswer){
        console.log("Correct Answer!")}
    else {
        timeLeft = timeLeft - 10;
        console.log("Wrong answer");}
    });

// Submit Highscore
$(submit).on( 'click', function( event ) {
    event.preventDefault();
    console.log("prevent default");
    console.log(this.value);
    
    localStorage.setItem("Initials", JSON.stringify(initialSub));
    console.log(JSON.parse(localStorage.getItem("Initials")));

    // $(initialSub).html(localStorage.setItem);

    // $(score).html(localStorage.setItem);

    // $(hsInitials).html("localStorage.getItem");
    // $(hsscore).text(localStorage.getItem);

    $(startBtn).show();
    console.log("test");
});


// Add media quieres