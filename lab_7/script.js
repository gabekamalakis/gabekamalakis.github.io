// Map Script

const mymap = L.map('mapid').setView([38.993781, -76.945118], 14);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	    	maxZoom: 20,
    		id: 'mapbox/streets-v11',
    		tileSize: 512,
    		zoomOffset: -1,
    		accessToken: 'pk.eyJ1IjoiZWxhbGJhdHJvc3MiLCJhIjoiY2s4aXUxN2VyMDVudTNkazJsOWRlYTZqYyJ9.gxgHoN67BYMUxSoO9SJnPw'
	}).addTo(mymap);


// Marker
const marker = L.marker([38.993781, -76.945118], {
		title: "Eppley"
		}).addTo(mymap);

const tenrens = L.marker([38.981327, -76.937978],{
		title: "Ten Ren's"})
		.addTo(mymap);

const pizzahut = L.marker([38.999878, -76.931327],{
	title: "Pizza Hut"})
	.addTo(mymap);

const potbelly = L.marker([38.98151, -76.93798],{
	title: "PotBelly"})
	.addTo(mymap);

marker.bindPopup("Eppley Recreation Center", {'className': 'gabe'}).openPopup();
tenrens.bindPopup("Ten Ren's", {'className': 'gabe'});
pizzahut.bindPopup("Pizza Hutt", {'className': 'gabe'});
potbelly.bindPopup("PotBelly", {'className': 'gabe'});

// Locations of Random 3 Restaurants in case Fetch API misbehaves before
// I need to turn it in
// Ten Ren's [-76.937978,38.981327]
// Pizza Hut [-76.931327,38.999878]
// PotBelly [-76.93798,38.98151]

// Fetch API

//fetch('https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json', {method: 'GET'})
//	.then((response) => {
//		return response.json();
//			})
//	.then(function(json) {

//			};
//console.log(restaurants);
//for (var i = 0; i < 3; i++) {
//	console.log(restaurants[i]);
//}
////<!-- const locs = JSON.parse(restaurants); -->
//<!-- console.log(locs.geocoded_column_1.coordinates); -->

