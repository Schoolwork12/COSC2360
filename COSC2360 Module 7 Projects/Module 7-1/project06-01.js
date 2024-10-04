"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-01

      Project to validate a form used for setting up a new account
      Author: Tony Dyer
      Date:   10/3/2024

      Filename: project06-01.js
*/

// declaring variables for the submission and pass fields
let submitButton = document.getElementById("submitButton");
let pwd = document.getElementById("pwd");
let pwd2 = document.getElementById("pwd2");
let message = document.getElementById("message");

// creating the listener for the click event ont he submit button
submitButton.addEventListener("click", function(event){

// checking if password field fails pattern matching 
if (!pwd.value.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
      //display the message for incorrect password
      
      pwd.setCustomValidity("Your password must be at least 8 characters with at least one letter and one number!");
      pwd.reportValidity();
      event.preventDefault();
}
else if (pwd.value !== pwd2.value){
      // Display if both passwords dont match
      
      pwd2.setCustomValidity("Your passwords must match silly!");
      pwd2.reportValidity();
      event.preventDefault();
}
// if both checks pass, clear validation message
else {
      pwd.setCustomValidity("");
      pwd2.setCustomValidity("");
}


});