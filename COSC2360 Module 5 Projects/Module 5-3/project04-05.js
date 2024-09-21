
"use strict";
/*    JavaScript 7th Edition
      Chapter 4
      Project 04-05

      Degrees <-> Radians Coverter
      Author: Tony Dyer
      Date:   9/20/24

      Filename: project04-05.js
 */


// Function to convert degrees to radians 
function degreesToRadians(degrees) {
   return degrees * Math.PI/180;
}

// Function to convert radians to degrees
function radiansToDegrees(radians) {
   return radians * 180/ Math.PI;
}

// Event handler that converts radians to degrees when the input box is changed
document.getElementById("rValue").onchange = function() {
   let radians = parseFloat(document.getElementById("rValue").value);

   console.log("Radians = " + radians); // console log
   
   // ensure radians is number
   if (!isNaN(radians)) {

   document.getElementById("aValue").value = formatValue3(radiansToDegrees(radians));
   } else {
      console.error("Invalid input for radians"); //error handling for radians
   }

}

// Event handler that converts degrees to radians when the input box is changed
document.getElementById("aValue").onchange = function() {
   let degrees = parseFloat(document.getElementById("aValue").value);

   console.log("Degrees = " + degrees); // console log

// once again ensuring that degrees is number
if (!isNaN(degrees)) {

   document.getElementById("rValue").value = formatValue3(degreesToRadians(degrees));
   } else {
      console.error("Invalid input for degrees"); //error handling for degrees
   }
}





/* ================================================================= */
 // Function to display a numeric value in the format ##.### 
 function formatValue3(value) {
    return value.toFixed(3);
 }