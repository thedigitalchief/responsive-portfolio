import React from 'react';

function LineDouble(props) {
	const title = props.title || "line double";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M3 25.8h58c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7H3c-1 0-1.8.8-1.8 1.8S2 25.8 3 25.8z"/>
		<path d="M61 38.2H3c-1 0-1.8.8-1.8 1.8S2 41.7 3 41.7h58c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7z"/>
	</g>
</svg>
	);
};

export default LineDouble;