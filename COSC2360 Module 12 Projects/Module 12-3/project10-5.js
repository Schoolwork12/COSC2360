"use strict";
/*  JavaScript 7th Edition
    Chapter 10
    Project 10-05

    Crossword Puzzle Code for Keyboard Actions
    
    Author: Tony Dyer
    Date:   11/8/2024

    Filename: project10-05.js

*/


// Event handler to for keydown events within the current document
document.onkeydown = selectLetter;  //onkeypress was depreciated so I had to look up an alternative https://github.com/facebook/react/issues/25888

// Function to apply keyboard actions to select a letter or navigate the puzzle
function selectLetter(e) {
         
   e.preventDefault();
   if (!currentLetter) return("dang it");

   // Reference the letter to the left of the current letter
   let leftLetter = document.getElementById(currentLetter.dataset.left);
   
   // Reference the letter above the current letter
   let upLetter = document.getElementById(currentLetter.dataset.up);
   
   // Reference the letter to the right of the current letter
   let rightLetter = document.getElementById(currentLetter.dataset.right); 
   
   // Reference the letter below the current letter
   let downLetter = document.getElementById(currentLetter.dataset.down); 
   
   // Get the key typed by the player
   let userKey = e.key.toLowerCase(); //should have been e.key instead of e.code
 
   if (userKey === "arrowleft") { // Move left 
      formatPuzzle(leftLetter);  
      
   } else if (userKey === "arrowup") { // Move up
      formatPuzzle(upLetter);  
      
   } else if (userKey === "arrowright" || userKey === "tab") { // Move right
      formatPuzzle(rightLetter);  
      
   } else if (userKey === "arrowdown" || userKey === "enter") { // Move down
      formatPuzzle(downLetter);  
      
   } else if (userKey === "backspace" || userKey === "delete") { // Delete the character
      currentLetter.textContent = ""; 
      
   } else if (userKey === " ") { // Toggle the typing direction     got rid of space value
      switchTypeDirection();  
      
   } 
   
   else if (userKey >="a" && userKey <="z") { // Write the character
      currentLetter.textContent = userKey.toUpperCase();  //converts the character to uppercase
      
      if (typeDirection === "right") {
         formatPuzzle(rightLetter);  // Move right after typing the letter
      } else {
         formatPuzzle(downLetter);  // Move down after typing the letter
      }
   }

}

/*
finally got everything to work RAAAAA

 still an issue with being able to type
 control key and shift as well as some special keys
 such as page down and page up etc 
 but when I try to fix these issues it breaks
 the program so (╯°□°）╯︵ ┻━┻

 although the questions didnt ask for it to be fixed
 still annoys me!
*/