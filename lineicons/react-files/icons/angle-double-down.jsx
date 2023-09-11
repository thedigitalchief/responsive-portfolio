import React from 'react';

function AngleDoubleDown(props) {
	const title = props.title || "angle double down";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M59.7 26.8L33.4 51.7c-.7.7-1.9.7-2.6 0L4.2 26.8c-.7-.7-1.8-.6-2.5.1s-.6 1.8.1 2.5l26.6 24.9c1 1 2.4 1.4 3.7 1.4 1.3 0 2.7-.5 3.7-1.5l26.3-24.9c.7-.7.7-1.8.1-2.5-.7-.6-1.8-.7-2.5 0z"/>
		<path d="M28.5 36.2c1 1 2.4 1.4 3.7 1.4 1.3 0 2.7-.5 3.7-1.5l26.3-24.9c.7-.7.7-1.8.1-2.5-.7-.7-1.8-.7-2.5-.1L33.5 33.7c-.7.7-1.9.7-2.6 0L4.3 8.8c-.7-.7-1.8-.7-2.5 0s-.6 1.8.1 2.5l26.6 24.9z"/>
	</g>
</svg>
	);
};

export default AngleDoubleDown;