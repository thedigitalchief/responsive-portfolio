import React from 'react';

function Backward(props) {
	const title = props.title || "backward";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M56.1 3.7c-2-1.1-4.5-1-6.4.3L8.1 31.1V3c0-1-.8-1.8-1.8-1.8S4.6 2 4.6 3v58c0 1 .8 1.8 1.8 1.8S8.1 62 8.1 61V32.9L49.7 60c1 .7 2.2 1 3.4 1 1 0 2.1-.3 3-.8 2-1.1 3.3-3.2 3.3-5.5V9.2c0-2.3-1.2-4.4-3.3-5.5zm-.2 51.1c0 1-.5 1.9-1.4 2.4-.9.5-2 .5-2.9-.1L13.2 32 51.6 6.9c.9-.6 1.9-.6 2.9-.1.9.5 1.4 1.4 1.4 2.4v45.6z"/>
	</g>
</svg>
	);
};

export default Backward;