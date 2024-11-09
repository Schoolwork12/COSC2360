"use strict";
/*    JavaScript 7th Edition
      Chapter 10
      Project 10-01

      Project to create a drag and drop jigsaw puzzle
      Author: Tony Dyer
      Date:   11/6/2024

      Filename: project10-01.js
*/

// Reference to the puzzle board
let puzzleBoard = document.getElementById("puzzleBoard");
// Counter for the zIndex style of each puzzle piece
let zCounter = 1;
// Array of integers from 1 to 48
let intList = new Array(48);
// pointerX and pointerY will contain the initial coordinates of the pointerX
// pieceX and pieceY will contain the initial coordinates of a puzzle piece
let pointerX, pointerY, pieceX, pieceY;

// Sort the integers from 1 to 48 in random order
for (let i = 0; i < 48 ; i++) {
   intList[i] = i+1;
}
intList.sort(function() {
   return 0.5 - Math.random();
});

// generate randomly-sorted puzzle pieces
for (let i = 0; i < 48; i++) {
   let piece = document.createElement("img");
   piece.src = "piece" + intList[i] + ".png";
   let rowNum = Math.ceil((i+1)/8);
   let colNum = (i + 1) - (rowNum - 1)*8;
   piece.style.top = (rowNum - 1)*98 + 7 + "px";
   piece.style.left = (colNum - 1)*98 + 7 + "px";
   piece.draggable = false; // override the default draggability of images
   puzzleBoard.appendChild(piece);      
}

// Node list representing the puzzle pieces
let pieces = document.querySelectorAll("div#puzzleBoard img");

// loop to add event listeners to each puzzle piece
for (let i = 0; i < pieces.length; i++) {
   pieces[i].addEventListener("pointerdown", grabPiece);
}

// define the grabpiece function
function grabPiece(e) {
   // set pointer x and pointer y to the current pointer position
   pointerX = e.clientX;
   pointerY = e.clientY;

   // disabling touch actions for this element
   e.target.style.touchAction = "none";

   // increase z counter and apply it to the elements z index for stacking
   zCounter++;
   e.target.style.zIndex = zCounter;

   // set piece x and piece y to the elements current position
   pieceX = e.target.offsetLeft;
   pieceY = e.target.offsetTop;

   // adding listeners for moving and releasing the piece
   e.target.addEventListener("pointermove", movePiece);
   e.target.addEventListener("pointerup", dropPiece);
}

// define the movepiece function
function movePiece(e) {
   // calculate the difference in pointer position
   const diffX = e.clientX - pointerX;
   const diffY = e.clientY - pointerY;

   // update the position of the piece
   e.target.style.left = pieceX + diffX + "px";
   e.target.style.top = pieceY + diffY + "px";
}

// define the droppiece function
function dropPiece(e) {
   // remove the movepiece and droppiece event listeners
   e.target.removeEventListener("pointermove", movePiece);
   e.target.removeEventListener("pointerup", dropPiece);
}

/*
This was fun to make but by god can I not
complete a puzzle to save my life ;(
*/
