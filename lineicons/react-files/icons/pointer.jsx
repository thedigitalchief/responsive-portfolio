import React from 'react';

function Pointer(props) {
	const title = props.title || "pointer";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M33.3 62.8c-1.5 0-2.8-.8-3.5-2.1L1.7 7.1c-.8-1.6-.5-3.4.7-4.7C3.7 1.1 5.5.9 7.1 1.7l53.5 28c1.4.7 2.2 2.2 2.1 3.8-.1 1.6-1.1 2.9-2.5 3.5l-16.7 6.5L37 60.2c-.6 1.5-1.9 2.4-3.5 2.5-.1 0-.2.1-.2.1zM5.2 4.8c-.1 0-.2 0-.3.1-.2.2-.2.4-.1.6l28 53.5c.1.2.3.3.5.3.1 0 .3-.1.4-.3l6.8-17.4c.2-.5.5-.8 1-1l17.4-6.8c.2-.1.3-.3.3-.4 0-.1 0-.3-.3-.5L5.5 4.8h-.3z"/>
	</g>
</svg>
	);
};

export default Pointer;