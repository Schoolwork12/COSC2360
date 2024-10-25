"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-04

      Retrieve Staff Data from a JSON File
      Author: Tony Dyer
      Date:   10/23/2024

      Filename: project08-04.js
*/


let getFileButton = document.getElementById("getFile");
let containerBox = document.getElementById("container");

getFileButton.onchange = function (event) {
  // ensure at least one file is selected
  if (event.target.files.length === 0) {
    console.error("No file selected.");
    return;
  }

  let JSONfile = event.target.files[0]; // get the selected file
  console.log("Selected file:", JSONfile); // debugging

  let fr = new FileReader();

  // check if the file is a valid Blob      really had some issues in it not saying its valid for some reason
  if (!(JSONfile instanceof Blob)) {
    console.error("Selected item is not a valid Blob.");
    return;
  }

  fr.readAsText(JSONfile); // read the file as text

  fr.onload = function () {
    try {
      let staff = JSON.parse(fr.result); // parse json data
      console.log("Parsed JSON:", staff); // debugging
      makeStaffTable(staff); // call the function to create the table
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  };

  fr.onerror = function () {
    console.error("Error reading file:", fr.error);
  };
};

function makeStaffTable(staff) {
  let staffTable = document.createElement("table");
  let headerRow = document.createElement("tr");

  // create headers from the first object's properties
  for (let prop in staff.directory[0]) {
    let headerCell = document.createElement("th");
    headerCell.textContent = prop;
    headerRow.appendChild(headerCell);
  }
  staffTable.appendChild(headerRow);

  // create rows for each entry in the directory
  for (let entry of staff.directory) {
    let tableRow = document.createElement("tr");

    for (let prop in entry) {
      let tableCell = document.createElement("td");
      tableCell.textContent = entry[prop];
      tableRow.appendChild(tableCell);
    }
    staffTable.appendChild(tableRow);
  }

  containerBox.appendChild(staffTable);
}