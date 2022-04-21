import React from 'react';

function DiamondAlt(props) {
	const title = props.title || "diamond alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.4 24.1l-9-20.6c-.4-.9-1.1-1.6-1.9-1.9-.1-.1-.3-.2-.4-.2-.3-.1-.5-.1-.8-.1H14c-1.5 0-2.8.9-3.4 2.2l-9 20.6c-.6 1.3-.4 2.7.4 3.9l27 33.2c.7 1 1.8 1.5 3 1.5s2.3-.6 2.9-1.5L62 27.9c.8-1.1 1-2.5.4-3.8zM59 25H45l6-18.1L59 25zm-16.7-3L34.2 4.8H48L42.3 22zM32 8.3L39.8 25H24.2L32 8.3zM21.6 22.2L15 4.8h14.9l-8.3 17.4zm18.6 6.3L32 55.1l-8.2-26.6h16.4zm-12 26.2L6.9 28.5h13.2l8.1 26.2zm15.7-26.2h13.2L35.8 54.7l8.1-26.2zM12.5 8l6.4 17H5l7.5-17z"/>
	</g>
</svg>
	);
};

export default DiamondAlt;