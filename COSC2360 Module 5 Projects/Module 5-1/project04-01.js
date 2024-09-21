
"use strict";


/*    JavaScript 7th Edition
      Chapter 4
      Project 04-01

      Application to calculate total moving cost
      Author: Tony Dyer
      Date:  9/20/24

      Filename: project04-01.js
*/

// Global Constants
const COST_PER_LB = 0.50;
const COST_PER_MILE = 0.75;
const SETUP_COST = 500;

// Global Variables
let wgtBox = document.getElementById("wgtBox");
let distBox = document.getElementById("distBox");
let msgBox = document.getElementById("msgBox");


// Event Handlers
document.getElementById("wgtBox").onchange = calcTotal;
document.getElementById("distBox").onchange = calcTotal;
document.getElementById("setupBox").onclick = calcTotal;

// Function to calculate an estimate of the total moving cost
function calcTotal() {
   let totalCost = 0;      // Set the initial estimate to $0
   msgBox.innerHTML = "";  // Erase any warnings in the message box

   // try-catch block for invalid weight unput 
   try {
      let weight = wgtBox.value || 0;
      // tests if wgtbox.value is not greater than 0
      if (!(weight > 0)) {
         throw "!! Enter a positive weight";
      }
      // if no, then add the weight cost to totalCost
      totalCost += weight * COST_PER_LB; 

   } catch (error){

      /// if user does something silly, display error message
      msgBox.innerHTML = error;

      return; // stop further shaming of user 
   }

   try {

      let distance = distBox.value || 0;
      // tests if distbox.value is not greater than 0
      if (!(distBox.value > 0)) {
         throw "!! Enter a positive distance";
      }
      // if no, then add the distance cost to totalCost
      totalCost += distance * COST_PER_MILE; 

   } catch (error){

      /// if user does something silly, display error message
      msgBox.innerHTML = error;

      return; // stop further shaming of user 
   }
   
   if (document.getElementById("setupBox").checked) {
      totalCost += SETUP_COST
   }
   
   // Display the moving cost estimate in the totalBox, formatted as currency
   document.getElementById("totalBox").innerHTML = formatCurrency(totalCost);
}



 // Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }