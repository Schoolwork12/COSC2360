"use strict";
/*  JavaScript 7th Edition
    Chapter 10
    Project 10-03

    Boulder Cycling Directions
    Author: Tony Dyer
    Date:   11/7/2024

    Filename: project10-03.js
*/


function showMap() {
   
   // Page objects
   let bikeMap = document.getElementById("bikeMap");
   let bikeDirections = document.getElementById("bikeDirections");
   let startingPoint = document.getElementById("startingPoint");
   let endingPoint = document.getElementById("endingPoint");   

 //create directions service object
 let bikeFind = new google.maps.DirectionsService();

 //create directions renderer object
 let bikeDraw = new google.maps.DirectionsRenderer();

 //create latLng object for boulder colorado
 let Boulder = new google.maps.LatLng(40.01753, -105.26496);

 //google map centered on boulder with zoom level 12
 let myMap = new google.maps.Map(bikeMap, {
    zoom: 12,
    center: Boulder
 });

 //associate the directions renderer with the map
 bikeDraw.setMap(myMap);
 bikeDraw.setPanel(bikeDirections);

 //add event listeners for starting point and ending point dropdowns
 startingPoint.addEventListener("change", drawRoute);
 endingPoint.addEventListener("change", drawRoute);

 //define the draw route function
 function drawRoute() {
    //check that both starting and ending points are selected
    if (startingPoint.selectedIndex !== 0 && endingPoint.selectedIndex !== 0) {
       // define a route object with origin/destination/travel mode
       let bikeRoute = {
          origin: startingPoint.value,
          destination: endingPoint.value,
          travelMode: google.maps.TravelMode.BICYCLING
       };

       //generate directions using the bike find object
       bikeFind.route(bikeRoute, function(result, status) {
          if (status === "OK") {
             //display the route and directions on the map and panel
             bikeDraw.setDirections(result);
             bikeDraw.setMap(myMap);
             bikeDraw.setPanel(bikeDirections);
          } else {
             // display an error message if directions are unavailable
             bikeDirections.textContent = "Directions Unavailable: " + status;
          }
       });
    }
 }
}




