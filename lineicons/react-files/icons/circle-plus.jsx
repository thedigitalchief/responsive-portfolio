import React from 'react';

function CirclePlus(props) {
	const title = props.title || "circle plus";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M42.6 30.2s-.1 0 0 0h-8.8v-8.8c0-1-.8-1.7-1.8-1.7s-1.7.8-1.7 1.8v8.8h-8.8c-1 0-1.7.8-1.7 1.8s.8 1.7 1.8 1.7h8.8v8.8c0 1 .8 1.7 1.8 1.7s1.7-.8 1.7-1.8v-8.8h8.8c1 0 1.7-.8 1.7-1.8-.1-.9-.9-1.7-1.8-1.7z"/>
		<path d="M32 1.3C15 1.3 1.3 15 1.3 32S15 62.8 32 62.8 62.8 49 62.8 32 49 1.3 32 1.3zm0 58C17 59.3 4.8 47 4.8 32S17 4.8 32 4.8 59.3 17 59.3 32 47 59.3 32 59.3z"/>
	</g>
</svg>
	);
};

export default CirclePlus;