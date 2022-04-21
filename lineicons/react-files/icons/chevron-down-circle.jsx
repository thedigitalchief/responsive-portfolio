import React from 'react';

function ChevronDownCircle(props) {
	const title = props.title || "chevron down circle";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M46.8 25.3L32 35.4 17.2 25.3c-.8-.5-1.9-.3-2.4.5s-.3 1.9.5 2.4l15.4 10.4c.3.3.8.4 1.3.4s1-.1 1.5-.4l15.3-10.4c.8-.5 1-1.6.5-2.4-.6-.9-1.7-1.1-2.5-.5z"/>
		<path d="M32 1.3C15 1.3 1.3 15 1.3 32S15 62.8 32 62.8 62.8 49 62.8 32 49 1.3 32 1.3zm0 58C17 59.3 4.8 47 4.8 32S17 4.8 32 4.8 59.3 17 59.3 32 47 59.3 32 59.3z"/>
	</g>
</svg>
	);
};

export default ChevronDownCircle;