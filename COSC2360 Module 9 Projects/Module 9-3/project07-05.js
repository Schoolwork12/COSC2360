"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-05

      Project to compare the distribution of word lengths between two authors
      Author: Tony Dyer
      Date:   10/17/2024

      Filename: project07-05.js
*/

// Onchange event handler to load an external file for author 1
document.getElementById("button1").onchange = function (e) {
   // Retrieve the selected file for author 1 (fixing syntax error)
   let file = e.target.files[0];
   let doc = document.getElementById("document1");
   let count = document.getElementById("count1");

   // Generate the word frequency table for author 1
   generateWordFreq(file, doc, count);
};

// Onchange event handler to load an external file for author 2
document.getElementById("button2").onchange = function (e) {
   // Retrieve the selected file for author 2 (fixing syntax error)
   let file = e.target.files[0];
   let doc = document.getElementById("document2");
   let count = document.getElementById("count2");

   // Generate the word frequency table for author 2
   generateWordFreq(file, doc, count);
};

// Function to generate word frequencies from the input file
function generateWordFreq(inputFile, outputDoc, outputCount) {
   // Use FileReader to read the input file correctly
   let fr = new FileReader();
   fr.readAsText(inputFile); 

   // Once the file has been loaded, process the content
   fr.onload = function () {
      outputDoc.innerHTML = fr.result;

      // Store the text content without extra tags
      let sourceText = outputDoc.textContent;

      // Regular expression to remove non-alphabetic characters and extra spaces (fixing syntax error)
      let alphaRegx = /[^a-zA-Z\s]/g; 
      sourceText = sourceText.replace(alphaRegx, "");  

      // Split the text into words based on one or more whitespace characters
      let words = sourceText.split(/\s+/); 

      // Initialize frequency array with 16 elements (index 0-15)
      let freqs = new Array(16).fill(0);

      // Loop through every word correctly (fixing off-by-one error)
      for (let i = 0; i < words.length; i++) {
         let wordLength = words[i].length;
         if (wordLength >= 15) {
            freqs[15]++;
         } else {
            freqs[wordLength]++;
         }
      }

      // Total number of words in the text
      let totalWords = words.length;

      // Get paragraph elements for output
      let outputPara = outputCount.getElementsByTagName("p");

      // Calculate and display frequency percentages (fixing logic error)
      for (let i = 1; i <= 15; i++) {
         let percent = ((freqs[i] / totalWords) * 100).toFixed(1) + "%";
         outputPara[i - 1].textContent = percent;
      }
   };
}