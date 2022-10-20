import React from 'react';

function ShiftLeft(props) {
	const title = props.title || "shift left";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M3 3.9c-1 0-1.8.8-1.8 1.8v52.7c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V5.6c0-.9-.8-1.7-1.8-1.7z"/>
		<path d="M61 30.3H20.4l5.1-5c.7-.7.7-1.8 0-2.5s-1.8-.7-2.5 0l-8 7.9c-.3.3-.5.8-.5 1.2s.2.9.5 1.2l8 8c.3.3.8.5 1.2.5.4 0 .9-.2 1.2-.5.7-.7.7-1.8 0-2.5l-5-4.9H61c1 0 1.8-.8 1.8-1.8s-.8-1.6-1.8-1.6z"/>
	</g>
</svg>
	);
};

export default ShiftLeft;