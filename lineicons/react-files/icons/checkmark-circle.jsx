import React from 'react';

function CheckmarkCircle(props) {
	const title = props.title || "checkmark circle";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 62.8C15 62.8 1.3 49 1.3 32S15 1.3 32 1.3 62.8 15 62.8 32 49 62.8 32 62.8zm0-58C17 4.8 4.8 17 4.8 32S17 59.3 32 59.3 59.3 47 59.3 32 47 4.8 32 4.8z"/>
		<path d="M28.6 39c-.7 0-1.3-.2-1.9-.7l-6.6-6.4c-.7-.7-.7-1.8 0-2.5s1.8-.7 2.5 0l6 5.9 12.8-12.4c.7-.7 1.8-.7 2.5 0s.7 1.8 0 2.5l-13.3 13c-.7.4-1.4.6-2 .6z"/>
	</g>
</svg>
	);
};

export default CheckmarkCircle;