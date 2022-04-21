import React from 'react';

function Friendly(props) {
	const title = props.title || "friendly";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 1.3C15 1.3 1.3 15 1.3 32S15 62.8 32 62.8 62.8 49 62.8 32 49 1.3 32 1.3zm0 58C17 59.3 4.8 47 4.8 32S17 4.8 32 4.8 59.3 17 59.3 32 47 59.3 32 59.3z"/>
		<path d="M49.7 32.3c-1 0-1.8.8-1.8 1.8 0 7.6-6.2 13.8-13.8 13.8-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8c9.6 0 17.3-7.8 17.3-17.3 0-1.1-.8-1.9-1.7-1.9z"/>
		<circle cx="20.1" cy="22.8" r="4"/>
		<circle cx="43.9" cy="22.8" r="4"/>
	</g>
</svg>
	);
};

export default Friendly;