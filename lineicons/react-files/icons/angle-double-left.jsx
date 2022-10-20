import React from 'react';

function AngleDoubleLeft(props) {
	const title = props.title || "angle double left";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M12.3 33.4c-.7-.7-.7-1.9 0-2.6L37.2 4.2c.7-.7.6-1.8-.1-2.5s-1.8-.6-2.5.1L9.7 28.4c-1.9 2-1.9 5.4 0 7.4l24.9 26.3c.3.4.8.5 1.3.5.4 0 .9-.2 1.2-.5.7-.7.7-1.8.1-2.5L12.3 33.4z"/>
		<path d="M55.2 59.8L30.3 33.5c-.7-.7-.7-1.9 0-2.6L55.2 4.3c.7-.7.6-1.8-.1-2.5s-1.8-.6-2.5.1L27.8 28.5c-1.9 2-1.9 5.4 0 7.4l24.9 26.3c.3.4.8.5 1.3.5.4 0 .9-.2 1.2-.5.7-.6.7-1.7 0-2.4z"/>
	</g>
</svg>
	);
};

export default AngleDoubleLeft;