// These are our required libraries to make the server work.
// We're including a server-side version of Fetch to build on your client-side work
const express = require('express');
const fetch = require('node-fetch');

// Here we instantiate the server we're going to turn on
const app = express();


// Servers are often subject to the whims of their environment.
// Here, if our server has a PORT defined in its environment, it will use that.
// Otherwise, it will default to port 3000
const port = process.env.PORT || 3000;

// Our server needs certain features - like the ability to send and read JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// And the ability to serve some files publicly, like our HTML.
app.use(express.static('public'));


function processDataForFrontEnd(req, res) {
	const baseURL = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';
	// Enter the URL for the data you would like to retrieve here

	// Your Fetch API call starts here
	// Note that at no point do you "return" anything from this function -
	// it instead handles returning data to your front end at line 34.
	fetch(baseURL)
		.then((r) => r.json())
		.then((data) => {
		// Here is where the Data processing will go

		// Gabe's spicy spaghetti meatball
		// Is there a more efficient way to do this?
		// Maybe to write the label and value at the same time
		// as counting them instead of using separate loops

		const dict = {};
			for (let i=0; i<data.length; i++) {
				let restCat = data[i].category;
				// console.log(restCat);
				if (restCat in dict) {
					dict[restCat] += 1;
				}
				else {
					dict[restCat] = 1;
				}
			};
			console.log(dict);
			return dict;})

		.then((dict) => {
			const dataPoints = [];

			// this code is modified from stack overflow:
			// https://stackoverflow.com/questions/684672/how-do-i-loop-through-or-enumerate-a-javascript-object
			// from user Andreas Grech
			// There has to be a better way to iterate through js objects, but
			// Not sure what that is

			let i=0;
			for (var property in dict) {
				if(!dict.hasOwnProperty(property)) {
					continue;
				}
				let datapoint = {};
				let key = Object.keys(dict)[i];
				datapoint["label"] = key;
				datapoint["y"] = dict[key];
				dataPoints.push(datapoint);
				i++;
			}


			console.log(dataPoints);
			res.send({ dataPoints }); // here's where we return data to the front end
      		})
	.catch((err) => {
		console.log(err);
		res.redirect('/error');
	});
}

// This is our first route on our server.
// To access it, we can use a "GET" request on the front end
// by typing in: localhost:3000/api or 127.0.0.1:3000/api
app.get('/api', (req, res) => {processDataForFrontEnd(req, res) });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
