"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-01

      Project to read field values from a query string
      Author: Tony Dyer
      Date:   11/1/2024

      Filename: project09-01b.js
*/

// extract the query string from the URL
let query = location.search.slice(1);

// replace all '+' characters with spaces
query = query.replace(/\+/g, " ");

// decode uri-encoded characters in the query string
query = decodeURIComponent(query);

// split the query string at each '&' to create an array
let cardFields = query.split("&");

// loop through each item in the cardFields array
for (let field of cardFields) {
   // split each item at the '=' character to get name and value
   let nameValue = field.split("=");
   
   // store the first item in nameValue as the name and the second as the value
   let name = nameValue[0];
   let value = nameValue[1];
   
   // set the text content of the element with the id matching the name to the value
   if (document.getElementById(name)) {
       document.getElementById(name).textContent = value;
   }
}

