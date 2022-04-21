import React from 'react';

function ShiftRight(props) {
	const title = props.title || "shift right";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 3.9c-1 0-1.8.8-1.8 1.8v52.7c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V5.6c0-.9-.8-1.7-1.8-1.7z"/>
		<path d="M41 22.8c-.7-.7-1.8-.7-2.5 0s-.7 1.8 0 2.5l5.1 5H3c-1 0-1.8.8-1.8 1.8S2 33.8 3 33.8h40.5l-5 4.9c-.7.7-.7 1.8 0 2.5.3.3.8.5 1.2.5.4 0 .9-.2 1.2-.5l8-8c.3-.3.5-.8.5-1.2 0-.5-.2-.9-.5-1.2l-7.9-8z"/>
	</g>
</svg>
	);
};

export default ShiftRight;