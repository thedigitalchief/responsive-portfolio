import React from 'react';

function TextAlignLeft(props) {
	const title = props.title || "text align left";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M3 7.5h42.2c1 0 1.8-.8 1.8-1.8S46.1 4 45.2 4H3c-1 0-1.7.8-1.7 1.7S2 7.5 3 7.5z"/>
		<path d="M3 25h50.1c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8H3c-1 0-1.8.8-1.8 1.8S2 25 3 25z"/>
		<path d="M3 42.5h34.3c1 0 1.8-.8 1.8-1.8s-.9-1.7-1.8-1.7H3c-1 0-1.8.8-1.8 1.8S2 42.5 3 42.5z"/>
		<path d="M61 56.5H3c-1 0-1.8.8-1.8 1.8S2 60 3 60h58c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7z"/>
	</g>
</svg>
	);
};

export default TextAlignLeft;