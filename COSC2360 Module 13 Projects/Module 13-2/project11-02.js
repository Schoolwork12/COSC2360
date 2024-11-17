"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-02

      Project to city and state information from a provided postal code
      Author: Tony Dyer
      Date:   11/15/2024

      Filename: project11-02.js
*/

let postalCode = document.getElementById("postalCode");
let place = document.getElementById("place");
let region = document.getElementById("region");
let country = document.getElementById("country");

postalCode.onblur = function() {
      // declare code value and contry value variables
      let codeValue = postalCode.value;
      let countryValue = country.value;

      // clear the place and region elements
      place.value ="";
      region.value ="";

      // fetch data from the postal code api
      fetch(`https://api.zippopotam.us/${countryValue}/${codeValue}`)
            .then(Response =>{
                  //parse the response as json
                  if (!Response.ok){
                        throw new Error("Postal Code not found");
                  }
                  return Response.json();
            })
            .then(json => {
                  //set the place and region elements
                  place.value = json.places[0]["place name"];
                  region.value = json.places[0]["state abbreviation"]; 
            })
            .catch(error =>{
                  //log any errors to the console
                  console.error("Error fetching postal code data:", error);
            });
 
};



