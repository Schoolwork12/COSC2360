/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Tony Dyer
      Date:   9/11/2024

      Filename: project03-01.js
*/

//getting menu checkboxes
var menuItems = document.getElementsByClassName("menuItem");

//adding event listeners to each box to trigger calcTotal when clicked
for (var i = 0; i <menuItems.length; i++) {
    menuItems[i].addEventListener("click", calcTotal);
}
// function to calculate total price of item menu
function calcTotal(){
    var orderTotal = 0; //starts at 0

    //loop through menu items to add the value of checked items
    for (var i = 0; i <menuItems.length; i++) {
        if (menuItems[i].checked){ //item is checked
            orderTotal += Number(menuItems[i].value); //add the item value to orderTotal
        }
    }
    //update the total bill amount 
    document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
}


 // Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }