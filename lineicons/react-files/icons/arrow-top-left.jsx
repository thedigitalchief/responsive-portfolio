import React from 'react';

function ArrowTopLeft(props) {
	const title = props.title || "arrow top left";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 62.8c-.4 0-.9-.2-1.2-.5L6.1 8.5c-.1.2-.1.3-.1.5L4.7 23.3c-.1 1-.9 1.7-1.9 1.6-1-.1-1.7-.9-1.6-1.9L2.5 8.7c.3-3.3 2.9-5.9 6.2-6.2L23 1.3c1-.1 1.8.6 1.9 1.6.1 1-.6 1.8-1.6 1.9L9 6c-.2 0-.3 0-.5.1l53.7 53.7c.7.7.7 1.8 0 2.5-.3.3-.8.5-1.2.5z"/>
	</g>
</svg>
	);
};

export default ArrowTopLeft;