"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-01

      Project to validate a form used for setting up a new account
      Author: Tony Dyer
      Date:   10/17/2024

      Filename: project07-01.js
*/

let signupForm = document.getElementById("signup");

// add event listener for form submission
signupForm.addEventListener("submit", function(e) {
    // preventing default form submission
    e.preventDefault();

    // get the password value and feedback element
    let pwd = document.getElementById("pwd").value;
    let feedback = document.getElementById("feedback");

    // regular expressions for validation
    const regex1 = /[A-Z]/;  // matches uppercase letters A-Z
    const regex2 = /\d/;     // matches any digit (0-9)
    const regex3 = /[!$#%]/; // matches any of the characters !$#%

    // password validation
    if (pwd.length < 8) {
        feedback.textContent = "Your password must be at least 8 characters.";
    } else if (!regex1.test(pwd)) {
        feedback.textContent = "Your password must include an uppercase letter.";
    } else if (!regex2.test(pwd)) {
        feedback.textContent = "Your password must include a number.";
    } else if (!regex3.test(pwd)) {
        feedback.textContent = "Your password must include one of the following: !$#%.";
    } else {
        feedback.textContent = ""; // clear any previous feedback
        signupForm.submit(); // submit the form only if all conditions are met
    }
});