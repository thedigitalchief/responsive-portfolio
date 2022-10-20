import React from 'react';

function Forward(props) {
	const title = props.title || "forward";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M57.7 1.3c-1 0-1.8.8-1.8 1.8v28.1L14.3 4c-1.9-1.3-4.4-1.4-6.4-.3-2 1.1-3.3 3.2-3.3 5.5v45.6c0 2.3 1.2 4.4 3.3 5.5.9.5 2 .8 3 .8 1.2 0 2.4-.3 3.4-1L55.9 33v28c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V3c-.1-1-.9-1.7-1.8-1.7zM12.4 57.1c-.9.6-1.9.6-2.9.1-.9-.5-1.4-1.4-1.4-2.4V9.2c0-1 .5-1.9 1.4-2.4.4-.2.9-.3 1.3-.3.5 0 1.1.2 1.5.5l38.5 25-38.4 25.1z"/>
	</g>
</svg>
	);
};

export default Forward;