"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-03

      Project to create a table of headings from an article
      Author: Tony Dyer
      Date:   9/28/2024

      Filename: project05-03.js
*/

// declaring the req vars
let sourceDoc = document.getElementById("source_doc");
let toc = document.getElementById("toc");
let headingCount = 1;
const heading = "H2";

// created loop to iterate through the child nodes
for (let n = sourceDoc.firstElementChild; n !== null; n = n.nextElementSibling){
      //checking to see if the node is an H2 heading, dont want to mess it up afterall!
      if (n.nodeName === heading){
            // creating an anchor before the first child of the heading
            let anchor = document.createElement("a");
            anchor.setAttribute("name", "doclink" + headingCount);

            // inserting the anchor before the first child of the heading 
            n.insertBefore(anchor, n.firstChild);
            
            //creating the list item and link for the toc
            let listItem = document.createElement("li");
            let link = document.createElement("a");

            // setting link text and href
            link.textContent = n.textContent;
            link.href = "#doclink" + headingCount;

            //append link to the list item, and list item to the toc
            listItem.appendChild(link);
            toc.appendChild(listItem);

            //incrementing the heading count to cycle through
            headingCount++;

      }
}