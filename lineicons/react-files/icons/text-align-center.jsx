import React from 'react';

function TextAlignCenter(props) {
	const title = props.title || "text align center";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M10.9 7.5h42.2c1 0 1.8-.8 1.8-1.8S54.1 4 53.1 4H10.9c-1 0-1.8.8-1.8 1.8s.8 1.7 1.8 1.7z"/>
		<path d="M7 25h50c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7H7c-1 0-1.8.8-1.8 1.8S6 25 7 25z"/>
		<path d="M14.9 39c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h34.3c1 0 1.8-.8 1.8-1.8s-.9-1.8-1.9-1.8H14.9z"/>
		<path d="M61 56.5H3c-1 0-1.8.8-1.8 1.8S2 60 3 60h58c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7z"/>
	</g>
</svg>
	);
};

export default TextAlignCenter;