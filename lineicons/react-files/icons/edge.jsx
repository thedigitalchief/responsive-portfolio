import React from 'react';

function Edge(props) {
	const title = props.title || "edge";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M3.3 28.4zm57.4 2c0-5.5-1-10.5-3.5-15.3C52.1 5.9 43 1 32.4 1 15 1 5.2 14.1 3.3 28.4c5.3-7.7 14.6-15.2 27.4-15.6 0 0 13.8 0 12.4 13.1H21.3c.7-4.6 2.2-7.3 4.2-9.8-9.4 4.5-15.2 12.1-15 23.6.1 8.9 6.3 18.1 15 21.5 10.4 3.9 24 .8 29.9-2.7V45.4c-10 7-33.9 7.6-33.9-8.4h39.1v-6.6h.1z"/>
	</g>
</svg>
	);
};

export default Edge;