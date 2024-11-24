"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-01

      Project to display a dropdown menu
      Author: Tony Dyer
      Date:   11/21/2024

      Filename: project12-01.js
*/



//jquery code to run when the page is loaded and ready
$(document).ready(function () {
      //select the li.submenu elements and attach mouseover and mouseout events
      $("li.submenu")
          .mouseover(function (e) {
              //show the dropdown menu during mouseover
              $(e.currentTarget).children("ul").show();
          })
          .mouseout(function (e) {
              //hide the dropdown menu during mouseout
              $(e.currentTarget).children("ul").hide();
          });
  });


                                                