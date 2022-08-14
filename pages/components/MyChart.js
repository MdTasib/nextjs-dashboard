import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);

//data for bar chart
const data = {
	labels: [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	],
	datasets: [
		{
			label: "Sales/ month",
			fill: true,
			lineTension: 0.1,
			backgroundColor: "#ffdbf9",
			borderColor: "#ffd0f7",
			borderCapStyle: "butt",
			borderDash: [],
			borderDashOffset: 0.0,
			borderJoinStyle: "miter",
			pointBorderColor: "rgba(75,192,192,1)",
			pointBackgroundColor: "#fff",
			pointBorderWidth: 0,
			pointHoverRadius: 0,
			pointHoverBackgroundColor: "rgba(75,192,192,1)",
			pointHoverBorderColor: "rgba(220,220,220,1)",
			pointHoverBorderWidth: 0,
			pointRadius: 0,
			pointHitRadius: 0,
			data: [65, 59, 80, 81, 56, 55, 40, 57, 40, 48, 59, 62],
		},
	],
};

function MyChart() {
	return (
		<div>
			<Line data={data} width={400} height={200} />
		</div>
	);
}

export default MyChart;
