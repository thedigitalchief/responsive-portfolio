import React from 'react';

function Azure(props) {
	const title = props.title || "azure";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M34.8 7.3L16.5 23.1 1 51.2h14.1L34.8 7.3zm2.6 3.8l-7.8 22 14.8 18.7-29 4.9H63L37.4 11.1z"/>
	</g>
</svg>
	);
};

export default Azure;