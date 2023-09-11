import React from 'react';

function Speechless(props) {
	const title = props.title || "speechless";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 1.3C15 1.3 1.3 15 1.3 32S15 62.8 32 62.8 62.8 49 62.8 32 49 1.3 32 1.3zm0 58C17 59.3 4.8 47 4.8 32S17 4.8 32 4.8 59.3 17 59.3 32 47 59.3 32 59.3z"/>
		<path d="M45.2 43.4H18.8c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h26.4c1 0 1.8-.8 1.8-1.8s-.9-1.8-1.8-1.8z"/>
		<path d="M20.1 26.7c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4z"/>
		<path d="M43.9 18.8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4c0-2.3-1.8-4-4-4z"/>
	</g>
</svg>
	);
};

export default Speechless;