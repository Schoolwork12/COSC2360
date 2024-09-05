/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: Tony Dyer
      Date:  9/4/2024

      Filename: project02-01.js
 */

function CelsiusToFahrenheit(degree){
    return degree * 1.8 + 32
}
function fahrenheitToCelsius(degree){
    return (degree -32) /1.8
}

document.getElementById('cValue').onchange = function() {
    var cDegree = parseFloat(document.getElementById('cValue').value)
    if (!isNaN(cDegree)) {
        document.getElementById('fValue').value = CelsiusToFahrenheit(cDegree).toFixed(2)
    }
}

    document.getElementById('fValue').onchange = function() {
        var fDegree = parseFloat(document.getElementById('fValue').value)
        if (!isNaN(fDegree)) {
            document.getElementById('cValue').value = fahrenheitToCelsius(fDegree).toFixed(2)
        }
    }