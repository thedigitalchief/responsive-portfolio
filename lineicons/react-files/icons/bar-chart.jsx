import React from 'react';

function BarChart(props) {
	const title = props.title || "bar chart";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 56.6h-6.2v-21c0-3-2.4-5.4-5.4-5.4h-6c-3 0-5.4 2.4-5.4 5.4v21h-7.4V20c0-3-2.4-5.4-5.4-5.4h-6c-3 0-5.4 2.4-5.4 5.4v36.6H6.6c-1 0-1.9-.8-1.9-1.9V5.6c0-1-.8-1.8-1.8-1.8s-1.6.9-1.6 1.8v49.1c0 3 2.4 5.4 5.4 5.4H61c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7zm-43.4 0V20c0-1 .8-1.9 1.9-1.9h6c1 0 1.9.8 1.9 1.9v36.6h-9.8zm24.1 0v-21c0-1 .8-1.9 1.9-1.9h6c1 0 1.9.8 1.9 1.9v21h-9.8z"/>
	</g>
</svg>
	);
};

export default BarChart;