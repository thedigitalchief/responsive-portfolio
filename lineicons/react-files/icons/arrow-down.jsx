import React from 'react';

function ArrowDown(props) {
	const title = props.title || "arrow down";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M43.9 52.1c-.6-.7-1.7-.8-2.5-.2l-7.7 6.5V3c0-1-.8-1.8-1.8-1.8S30.1 2 30.1 3v55.4l-7.7-6.5c-.7-.6-1.8-.5-2.5.2-.6.7-.5 1.8.2 2.5l8.2 6.9c1 .9 2.3 1.3 3.5 1.3s2.5-.4 3.5-1.3l8.2-6.9c.9-.6 1-1.7.4-2.5z"/>
	</g>
</svg>
	);
};

export default ArrowDown;