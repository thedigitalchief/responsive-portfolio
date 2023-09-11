import React from 'react';

function CheckBox(props) {
	const title = props.title || "check box";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.2 8.4c-.7-.7-1.8-.7-2.5 0L55 13.1V9.9c0-2.6-2.1-4.8-4.8-4.8H6c-2.6 0-4.8 2.1-4.8 4.8v44.3C1.2 56.8 3.3 59 6 59h44.3c2.6 0 4.8-2.1 4.8-4.8V18.1l7.2-7.2c.6-.7.6-1.9-.1-2.5zM51.5 54.1c0 .7-.6 1.3-1.3 1.3H6c-.7 0-1.3-.6-1.3-1.3V9.9c0-.7.6-1.3 1.3-1.3h44.3c.7 0 1.3.6 1.3 1.3v6.8L40.4 27.8 33.6 21c-.7-.7-1.8-.7-2.5 0s-.7 1.8 0 2.5l8.1 8.1c.1.1.1.1.2.1l.1.1c.1 0 .1.1.2.1l.1.1c.1 0 .1 0 .2.1H40.8c.1 0 .1 0 .2-.1.1 0 .1-.1.1-.1.1 0 .1-.1.2-.1l.1-.1c.1 0 .1-.1.2-.1l9.9-10v32.5z"/>
	</g>
</svg>
	);
};

export default CheckBox;