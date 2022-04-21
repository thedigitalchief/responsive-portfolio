import React from 'react';

function Display(props) {
	const title = props.title || "display";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M55.5 9.4h-47c-3.9 0-7 3.2-7 7V37c0 3.9 3.2 7 7 7h22v7.5h-9c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h21.1c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-9V44h22c3.9 0 7-3.2 7-7V16.4c-.1-3.8-3.3-7-7.1-7zm4 27.6c0 2.2-1.8 4-4 4h-47c-2.2 0-4-1.8-4-4V16.4c0-2.2 1.8-4 4-4h47c2.2 0 4 1.8 4 4V37z"/>
	</g>
</svg>
	);
};

export default Display;