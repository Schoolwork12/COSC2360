"use strict";

/*
Started 12/1/24
Ended 12/6/24
Created By Tony Dyer
Final Project COSC2360
*/

let map, geocoder, directionsService, directionsRenderer;
let markers = [];  // Array to keep track of markers

// Initialize Google Maps
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: { lat: 41.587624, lng: -109.203243 }, //default center (rock springs, wy)
  });
  geocoder = new google.maps.Geocoder();
  directionsService = new google.maps.DirectionsService();  //directions service
  directionsRenderer = new google.maps.DirectionsRenderer();  //directions renderer
  directionsRenderer.setMap(map);  //set directions renderer to show on the map
}

$(document).ready(function () {

  //excel file processing
  $("#excelFile").on("change", function (event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet);

      const output = $("#output");
      output.html(`
        <table>
          <tr>
            <th>Bar</th>
            <th>Avg Price</th>
            <th>Location</th>
          </tr>
          ${jsonData.map(row => `
            <tr>
              <td>${row.Bar || "Unknown"}</td>
              <td>${row["Avg Price"] || "N/A"}</td>
              <td><button class="view-map" data-bar="${row.Bar}">View on Map</button></td>
            </tr>
          `).join("")}
        </table>
      `);
    }; /* PS I hated trying to set this up, resources are,
            https://youtube.com/shorts/34QLMNwFVsI?si=v5ZxQpQqro3xnwa_-- how I got the idea
            https://www.youtube.com/watch?v=TDGsVqVzW4A&t=166s -- right idea but wrong execution for what I wanted
            https://www.youtube.com/watch?v=ru_YWeOh2kU -- getting closer but not exactly what I wanted
            https://www.youtube.com/watch?v=K8OLfmNsbD0 -- the big one, still had to modify it but I got what I wanted out of it even if it did take up -
            a majority of my time to set up :(
       */

    reader.readAsArrayBuffer(file);
  });

  //handle view on map button clicks
  $(document).on("click", ".view-map", function () {
    const barName = $(this).data("bar");
    if (!barName) {
      alert("Bar name not provided");
      return;
    }

    //clear existing markers, I hated how it would keep the last markers on the map it looked gross
    clearMarkers();

    geocoder.geocode({ address: barName }, (results, status) => {
      if (status === "OK") {
        const location = results[0].geometry.location;
        map.setCenter(location);

        //create a new marker for the selected bar
        const marker = new google.maps.Marker({
          map: map,
          position: location,
          title: barName,
        });

        //add the new marker to the markers array
        markers.push(marker);

        //display bars address in an info window since I wanted you to actually find the bar and not just point to it
        const infoWindow = new google.maps.InfoWindow({
          content: `<strong>${barName}</strong><br>${results[0].formatted_address}`,
        });
        infoWindow.open(map, marker);

        //get users current location and calculate directions
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            const userLocation = new google.maps.LatLng(
              position.coords.latitude,
              position.coords.longitude
            );

            //create a directions request to calculate the route from the users location to the bar
            const directionsRequest = {
              origin: userLocation,
              destination: location,
              travelMode: google.maps.TravelMode.DRIVING,
            };

            //call directions API to get the route
            directionsService.route(directionsRequest, (result, status) => {
              if (status === google.maps.DirectionsStatus.OK) {
                directionsRenderer.setDirections(result);  //show directions on the map
              } else {
                alert("Could not get directions: " + status);
              }
            });
          });
        } else {
          alert("Geolocation is not supported by this browser.");
        }
      } else {
        alert("Geocode was not successful: " + status);
      }
    });
  });
});

//function to clear existing markers
function clearMarkers() {
  //loop through the markers array and set the map to null for each marker
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  //clear the markers array
  markers = [];
}

//initialize google maps when the page loads
window.onload = initMap;

