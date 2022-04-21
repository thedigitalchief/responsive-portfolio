import React from 'react';

function Tounge(props) {
	const title = props.title || "tounge";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 1.3C15 1.3 1.3 15 1.3 32S15 62.8 32 62.8 62.8 49 62.8 32 49 1.3 32 1.3zm0 58C17 59.3 4.8 47 4.8 32S17 4.8 32 4.8 59.3 17 59.3 32 47 59.3 32 59.3z"/>
		<path d="M44 38.7c-3.3 3-7.5 4.7-12 4.7s-8.7-1.7-12-4.7c-.7-.7-1.8-.6-2.5.1s-.6 1.8.1 2.5c3.9 3.6 9 5.6 14.4 5.6 1.8 0 3.6-.2 5.3-.7v4.4c0 1.4 1.2 2.5 2.6 2.5 1.5 0 2.6-1.1 2.6-2.5v-6.5c1.4-.8 2.6-1.7 3.8-2.8.7-.7.7-1.8.1-2.5s-1.7-.8-2.4-.1z"/>
		<circle cx="20.1" cy="22.8" r="4"/>
		<circle cx="43.9" cy="22.8" r="4"/>
	</g>
</svg>
	);
};

export default Tounge;