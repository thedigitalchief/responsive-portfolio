import React from 'react';

function Close(props) {
	const title = props.title || "close";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M34.5 32L62.2 4.2c.7-.7.7-1.8 0-2.5s-1.8-.7-2.5 0L32 29.5 4.2 1.8c-.7-.7-1.8-.7-2.5 0s-.7 1.8 0 2.5L29.5 32 1.8 59.8c-.7.7-.7 1.8 0 2.5.3.3.8.5 1.2.5s.9-.2 1.2-.5L32 34.5l27.7 27.8c.3.3.8.5 1.2.5.4 0 .9-.2 1.2-.5.7-.7.7-1.8 0-2.5L34.5 32z"/>
	</g>
</svg>
	);
};

export default Close;