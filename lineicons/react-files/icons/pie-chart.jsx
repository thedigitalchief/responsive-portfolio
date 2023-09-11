import React from 'react';

function PieChart(props) {
	const title = props.title || "pie chart";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M37.5 1.8C20.8-1.3 4.9 9.8 1.8 26.5c-1.5 8.1.3 16.2 4.9 23 4.7 6.8 11.7 11.3 19.7 12.8 1.9.3 3.7.5 5.5.5 14.5 0 27.5-10.4 30.2-25.3 3.1-16.7-8-32.7-24.6-35.7zm21.3 35.1c-.2 1-.4 2.1-.7 3l-24.3-9.1v-26c1 .1 2.1.2 3.1.4 14.7 2.7 24.5 16.9 21.9 31.7zM30.2 4.8v25.4H4.9c.1-1 .2-2.1.4-3.1C7.5 14.6 18.1 5.6 30.2 4.8zm-3.1 54C20 57.5 13.8 53.5 9.6 47.5c-2.9-4.1-4.5-8.9-4.8-13.7h26.8l25.1 9.4c-4.9 11.1-17.1 17.9-29.6 15.6z"/>
	</g>
</svg>
	);
};

export default PieChart;