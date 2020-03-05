// Javascript for lab_4
// Author: Gabe Kamalakis

'use strict';

// Text Changer

function textChanger(cname, content) {
	var object = document.getElementsByClassName(cname);
	object.innerHTML = content
}

// Change header to Your Name
textChanger("header", "Gabe Kamalakis' Demo page")

// Insert Two paragraphs with the class "content" and a distinct class name


// First paragraph: insert "my name has" + len of your name + "characters"
// Second paragraph: insert the 3rd character of your name and capitalize
// "The third character in my name is" + character
// Add a new line to paragraph
// Return final 3 characters of your name to line
// substring your first and last name into two separate variables
// Add the total lenght of your first/last name together
// Display that number next to the header in your title
