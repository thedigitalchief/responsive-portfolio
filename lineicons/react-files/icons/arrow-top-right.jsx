import React from 'react';

function ArrowTopRight(props) {
	const title = props.title || "arrow top right";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M3 62.8c-.4 0-.9-.2-1.2-.5-.7-.7-.7-1.8 0-2.5L55.5 6.1c-.2-.1-.3-.1-.5-.1L40.7 4.7c-1-.1-1.7-.9-1.6-1.9.1-1 .9-1.7 1.9-1.6l14.4 1.2c3.3.3 5.9 2.9 6.2 6.2L62.7 23c.1 1-.6 1.8-1.6 1.9-1 .1-1.8-.6-1.9-1.6L58 9c0-.1 0-.3-.1-.4L4.2 62.2c-.3.4-.8.6-1.2.6z"/>
	</g>
</svg>
	);
};

export default ArrowTopRight;