"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Tony Dyer
      Date:   9/27/2024

      Filename: project05-01.js
*/

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 20;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare the ID for timed commands
// and the node list for questions
let timeID;
const questionList = document.querySelectorAll("div#quiz input");

// add the on click event handler to start it
startQuiz.onclick = function () {
   // setting the class of the overlay object to show quiz
   overlay.className = "showquiz";

   // repeat the countdown function every 1 sec
   timeID = setInterval(countdown, 1000);

};

// creating the countdown function to pressure students
function countdown() {
   // checkinng if timeLeft is 0
   if (timeLeft === 0){
      //cancel the timed command
      clearInterval(timeID);

      // check answers to see if the student is as smart as we think they are
      let totalCorrect = checkAnswers();

      // checking if totalCorrect is equal to length of correctAnswers
      if (totalCorrect === correctAnswers.length){
         alert("Congratulations! You got 100% correct smarty pants!");

      } else {
         // display the shame score 
         alert(`You got ${correctAnswers.length - totalCorrect} incorrect answer/answers out of ${correctAnswers.length}, seems like you have got some learning to do!`);
         
         //reseting the timeLeft, updating quizclock, and hiding the quiz from prying eyes!
         timeLeft = quizTime;
         quizClock.value = timeLeft;

            //had some issues with actually hiding the quiz for some reason
            overlay.classList.replace("showquiz", "hidequiz");
               // overlay.className = "hidequiz";


         // little quality of life improvement that clears the input values for the next attempt 
         questionList.forEach(input =>{
            input.value = "";
         });

      }

   } else {
      // if timeleft is not 0 decrease the value of timeleft
      timeLeft -=1;

      // updating the quiz clock display
      quizClock.value = timeLeft;
   }
}

// I was going to do it exactly as shown in the picture but I just cant get this bit of code to work correctly
// so I'm just going with what was said in the instructions, a little lazy I know but its almost 6am at the time of writting

/*
function checkAnswers() {
   let correctCount = 0;

   // looping through questions to check the answers
   questionList.forEach((inpout, index) => {
      if (InputDeviceInfo.value === correctAnswers[index]) {
         correctCount++;
         //removing the wrong answer class if it's correct, just incase it was marked red for some reason
         InputDeviceInfo.classList.remove("wronganswer");

      } else {
         //adding the wronganswer class to mark incorrect answers
         InputDeviceInfo.classList.add("wronganswer");
      }
   });
   return correctCount;
}

*/

















/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
   let correctCount = 0;
   
   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "";
      } else {
         questionList[i].className = "wronganswer";
      }      
   }
   return correctCount;
}

