"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-01

      Project to retrieve the Astronomy Picture of the Day from NASA
      Author: Tony Dyer
      Date:   11/14/2024

      Filename: project11-01.js
*/

let imageBox = document.getElementById("nasaImage");
let dateBox = document.getElementById("dateBox");

dateBox.onchange = function() {   
      let dateStr = dateBox.value;

      //fetch the data for the nasa api
      fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${dateStr}`)
            .then(Response =>{
                  //parse response as json
                  return Response.json();
            })
            .then(json =>{
                  //call show picture function with the json object
                  showPicture(json);
            })
            .catch(error =>{
                  //display errors in console if any
                  console.error("Error fetching the NASA APOD data:", error);
            });
};

// define the show picture function
function showPicture(json) {
      // check the media type
      if (json.media_type === "video") {
          // display video
          imageBox.innerHTML = `
              <iframe src="${json.url}" frameborder="0" allowfullscreen></iframe>
              <h3>${json.title}</h3>
              <p>${json.explanation}</p>
          `;
      } else if (json.media_type === "image") {
          // display image
          imageBox.innerHTML = `
              <img src="${json.url}" alt="${json.title}">
              <h3>${json.title}</h3>
              <p>${json.explanation}</p>
          `;
      } else {
          // handle unknown media types
          imageBox.innerHTML = "Image not Available";
      }
  }
