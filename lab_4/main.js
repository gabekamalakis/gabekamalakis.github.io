// Javascript for lab_4
// Author: Gabe Kamalakis

'use strict';

// Text Changer
const name = "Gabe Kamalakis";
const content = document.querySelector("div.content");

function textChanger(cname, content) {
	const object = document.querySelector(cname);
	object.textContent = content
}


// Insert Two paragraphs with the class "content" and a distinct class name
function doubleParagraph() {
	const newelement1  = document.createElement('p');
		newelement1.className = "first";
	// First paragraph: insert "my name has" + len of your name + "characters"
		var text1 = `My name has ${name.length} characters`;
		newelement1.textContent = text1;


	const newelement2 = document.createElement('p');
	newelement2.className = "second";
	// Second paragraph: insert the 3rd character of your name and capitalize
	// "The third character in my name is" + character
	// Add a new line to paragraph
	// Return final 3 characters of your name to line
		var text2 = `The third character in my name is ${name[2].toUpperCase()} \n` +
			    `${name.slice(-3)}`;
	newelement2.textContent = text2;

	content.appendChild(newelement1);
	content.appendChild(newelement2);
}

function nameSplitnumber(name) {
	var splitted = name.split(" ");
	var first = splitted[0]
	var last = splitted[1]
	var totallen = first.length + last.length
	return totallen
}

// Change header to Your Name
var lengthOfName = nameSplitnumber(name)
textChanger(".header", `${name}'s Demo page --> ${lengthOfName}`);
textChanger("title", name);
doubleParagraph()


// substring your first and last name into two separate variables
// Add the total lenght of your first/last name together
// Display that number next to the header in your title
