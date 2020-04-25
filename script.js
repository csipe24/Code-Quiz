var totalTime =
var timeElapsed =

var startBUtton = document.getElementbyID("start-button)



-Questions -List or Array

    -Questions Object

    -List of possible answers Object

    -Correct answers Object




Form/Input to allow us to add our initials

Buttons for each answer

Current time HTML

#Things my code needs to do
Start time upon hitting start button

WHen a question is answered, 

-the response needs to be validated if correct
-the reponse needs to be validated if not correct to remove additional time off the clock.
-move to next question


use an interval to create a countdown from 75
setInterval(callback, 75000)

Increment elapsed time

Calc current time left by subtracting totalTIme by ElapsedTime

Check if elapsedTime = totalTime
    End the game

Update time left # in innerhtml



End game
Display score
Provide an input to enter initials

Add highscore and intitals to local storage.

Display list of highscores to users



Clicking the start button addeventlistener to start function

Clicking an answer to validation (another function)



Remember to clear out html then add



# 04 Web APIs: Code Quiz

As you proceed in your career as a web developer, you will probably be asked to complete a coding assessment, which is typically a combination of multiple-choice questions and interactive challenges. Build a timed code quiz with multiple-choice questions. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

## User Story

```
AS A coding bootcamp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
```

The following animation demonstrates the application functionality:

![code quiz](./Assets/04-web-apis-homework-demo.gif)

### Review

You are required to submit the following for review:

* The URL of the functional, deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.


Questions
Inside which HTML element do we put the JavaScript?
-<div>
-<script>
-<body>
-<head>



// List objects/questions here
var question 1

// Create your HTML Page via DOM Methods here!


var title1 =document.createElement("h1");

var title2 =document.createElement("h2");

title1.textContent = "Look Ma No Html";

title2.textContent = "Look Ma No Html";

title1.style.textAlign = "Center"
title2.style.textAlign = "Center"

document.body.appendChild(title1);

document.body.appendChild(title2);


var img = document.createElement("img")
img.setAttribute("style", "text-align: Center");
img.setAttribute("src", "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/33922223_2254250114602064_5631931250206834688_n.jpg?_nc_cat=108&_nc_sid=85a577&_nc_ohc=SknWiMUoJL4AX_h-Oue&_nc_ht=scontent-sea1-1.xx&oh=38bf71a1e514e53384f7cae48938354a&oe=5EBD4AB4");
img.style.width ="300px"
img.style.height ="300px"
img.style.display = "block"
img.style.justifyContent ="Center"
document.body.appendChild(img);

var caption =document.createElement("cap");
caption.textContent = "This is me";
caption.style.justifyContent= "center"
document.body.appendChild(caption);


// * A centered image, with a center caption under it.

// * A list of your favorite foods (or some other list of favorites).

// * Some extra styling to all elements.

// <div class="row">
// <div class="col-md-8">
// <form>
//   <div class="form-group">
//     <label for="contactName">Name</label>
//     <input type="name" class="form-control" id="nameInput1" placeholder="Will Smith">
//   </div>
//   <div class="form-group">
//     <label for="emailAddress">Email</label>
//     <input type="password" class="form-control" id="emailInput1" placeholder="Freshprince@belair.com">
//   </div>
//   <div class="form-group">
//       <label for="Message">Message</label>
//       <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
//     </div>

    
//   <button type="button" class="btn btn-secondary">Submit</button>
// </form>
// </div>
// </div>
