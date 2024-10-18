"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-04

      Project to create a customer queue
      Author: Tony Dyer
      Date:   10/17/2024

      Filename: project07-04.js
*/

let customers = ["Alisha Jordan","Kurt Cunningham", "Ricardo Lopez", "Chanda Rao",
                 "Kevin Grant", "Thomas Bey", "Elizabeth Anderson", "Shirley Falk",
                 "David Babin", "Arthur Blanding", "Brian Vick", "Jaime Aguilar",
                 "Eileen Rios", "Gail Watts", "Margaret Wolfe", "Kathleen Newman",
                 "Jason Searl", "Stephen Gross", "Robin Steinfeldt", "Jacob Bricker",
                 "Gene Bearden", "Charles Sorensen", "John Hilton", "David Johnson",
                 "Wesley Cho"];

let customerName = document.getElementById("customerName");
let customerList = document.getElementById("customerList");

let addButton = document.getElementById("addButton");
let searchButton = document.getElementById("searchButton");
let removeButton = document.getElementById("removeButton");
let topButton = document.getElementById("topButton");

let status = document.getElementById("status");

generateCustomerList();

// function to generate the ordered list based on the contents of the customers array
function generateCustomerList() {
   customerList.innerHTML = "";
   for (let i = 0; i < customers.length; i++) {
      let customerItem = document.createElement("li");      
      customerItem.textContent = customers[i];     
      customerList.appendChild(customerItem);
   }
}

// event handler for adding a customer
addButton.onclick = function () {
   customers.push(customerName.value); // add customer to the end of the array
   generateCustomerList(); // update the customer list
   status.textContent = `${customerName.value} added to the end of the queue.`;
 };
 
 // event handler for searching a customer
 searchButton.onclick = function () {
   let index = customers.indexOf(customerName.value); // find the customer index
   let place = index + 1;
 
   if (index === -1) {
     status.textContent = `${customerName.value} is not found in the queue.`;
   } else {
     status.textContent = `${customerName.value} found in position ${place} of the queue.`;
   }
 };
 
 // event handler for removing a customer
 removeButton.onclick = function () {
   let index = customers.indexOf(customerName.value); // find the customer index
 
   if (index !== -1) {
     customers.splice(index, 1); // remove the customer
     generateCustomerList(); // update the customer list
     status.textContent = `${customerName.value} removed from the queue.`;
   } else {
     status.textContent = `${customerName.value} is not found in the queue.`;
   }
 };
 
 // event handler for removing the top customer
 topButton.onclick = function () {
   let topCustomer = customers.shift(); // remove the first customer
   generateCustomerList(); // update the customer list
   status.textContent = `Top customer ${topCustomer} removed from the queue.`;
 };