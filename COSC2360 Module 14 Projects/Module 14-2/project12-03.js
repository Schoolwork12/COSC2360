"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-03

      Project to show a recipe with expanding/contracting content
      Author: Tony Dyer
      Date:   11/22/2024

      Filename: project12-03.js
*/


//jquery code to handle click events on article > h2
$("article > h2").click(function (e) {
      //declare the list variable refer the target of the click event
      let heading = $(e.target);
      
      //declare the list variable refer the next sibling element of the heading variable
      let list = heading.next();
      
      //declare the headingimage variable refer the children of the heading variable whose tag name is img
      let headingImage = heading.children("img");
      
      //alternate between hiding and showing the content of the lists using slidetoggle() method
      list.slideToggle(500); //500 ms interval
      
      //change the symbol displayed in the headings
      if (headingImage.attr("src") === "plus.png") {
          headingImage.attr("src", "minus.png");
      } else {
          headingImage.attr("src", "plus.png");
      }
  });

  //I had fun coding this one and it looks really clean to see it in action!