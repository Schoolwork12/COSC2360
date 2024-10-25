"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-02

      Project to add balls bouncing within a container
      Author: Tony Dyer
      Date:   10/23/2024

      Filename: project08-02.js
*/

/*---------------- CONSTANTS ---------------------*/
const BALL_RADIUS = 60; // radius of the ball in pixels
const BOX_HEIGHT = 400; // height of the container in pixels
const BOX_WIDTH = 800;  // width of the container in pixels

/*--------------- Object Code --------------------*/

// object literal representing the box
const box = {
   width: BOX_WIDTH,
   height: BOX_HEIGHT,
   xPos: 0,
   yPos: 0,
 };
 
 // constructor function for the ball class
 function Ball(size) {
   this.radius = size;
   this.xPos = null;
   this.yPos = null;
   this.xVelocity = null;
   this.yVelocity = null;
 }
 
 // adding the moveWithin() method to ball's prototype
 Ball.prototype.moveWithin = function (container) {
   let ballTop = this.yPos;
   let ballLeft = this.xPos;
   let ballBottom = this.yPos + this.radius;
   let ballRight = this.xPos + this.radius;
 
   // bounce the ball vertically
   if (ballTop < 0 || ballBottom > container.height) {
     container.yPos += this.yVelocity;
     this.yVelocity = -this.yVelocity;
   }
 
   // bounce the ball horizontally
   if (ballLeft < 0 || ballRight > container.width) {
     container.xPos += this.xVelocity;
     this.xVelocity = -this.xVelocity;
   }
 
   // move the ball within the container
   this.yPos += this.yVelocity;
   this.xPos += this.xVelocity;
 };
 
 /*--------------- Interface Code -----------------*/
 
 // reference to the container box
 let boxImage = document.getElementById("box");
 boxImage.style.width = BOX_WIDTH + "px";
 boxImage.style.height = BOX_HEIGHT + "px";
 boxImage.style.top = "0px";
 boxImage.style.left = "0px";
 
 // reference to the add ball button
 let addBall = document.getElementById("addBall");
 
 addBall.onclick = function () {
   // create a new ball element
   let ballImage = document.createElement("div");
   ballImage.className = "ball";
   ballImage.style.width = BALL_RADIUS + "px";
   ballImage.style.height = BALL_RADIUS + "px";
   
   // create an instance of the ball object
   let newBall = new Ball(BALL_RADIUS);
   newBall.xPos = (BOX_WIDTH - BALL_RADIUS) / 2;
   newBall.yPos = (BOX_HEIGHT - BALL_RADIUS) / 2;
   newBall.xVelocity = rand(-10, 10);
   newBall.yVelocity = rand(-10, 10);
 
   // center the ball in the container
   ballImage.style.left = newBall.xPos + "px";
   ballImage.style.top = newBall.yPos + "px";
 
   // append the ball to the box
   boxImage.appendChild(ballImage);
 
   // animate the ball movement
   window.setInterval(function () {
     newBall.moveWithin(box);
     ballImage.style.left = newBall.xPos + "px";
     ballImage.style.top = newBall.yPos + "px";
 
     // shake the container image
     boxImage.style.top = box.yPos + "px";
     boxImage.style.left = box.xPos + "px";
   }, 25);
 };
 
 /* function to return a random value between minVal and maxValue */
 function rand(minVal, maxVal) {
   let size = maxVal - minVal + 1;
   return Math.floor(minVal + size * Math.random());
 }