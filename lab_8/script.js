// Gabe's Spaghetti


function fetcher() {
	fetch('https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json')
		.then((data) => data.json())
		.then((data) => {
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

			// this code is modified from stack overflow:https://stackoverflow.com/questions/684672/how-do-i-loop-through-or-enumerate-a-javascript-object from user Andreas Grech
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

			// in theory, this data points object will picked up
			// by the chart generating function
			chartMaker(dataPoints);



			});
}

function chartMaker(fooddata) {

	const chart = new CanvasJS.Chart("chartContainer", {
		animationEnabled: true,
		// height: 600,
		title:
			{
			text: "Good places to eat"
			},
		axisX:
			{
			labelFontSize: 11,
			// labelAutoFit: true,
			interval: 1
			},
		axisY: {
			title: "Number of restaurants per category",
			// labelAutoFit: true,
			scaleBreaks: {
				type: "wavy",
				customBreaks: [{
					startValue: 10,
					endValue: 30
					},
					{
					startValue: 60,
					endValue: 100,
					},
					{
					startValue: 150,
					endValue: 200
					}
		]}
	},
	data: [{
		type: "bar",
		dataPoints:fooddata
	}]
});
chart.render();
};


fetcher()
