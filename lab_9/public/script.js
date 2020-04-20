// Gabe's Spaghetti

// For lab 9, the fetcher will be fetching from our own api instead of
// the pg county data website
function fetcher() {
	fetch('/api') // from my own server
		.then(res => res.json())
		.then(res => {
			// This calls the dataPoints from the server
			chartMaker(res.dataPoints);
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
