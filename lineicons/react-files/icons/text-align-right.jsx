import React from 'react';

function TextAlignRight(props) {
	const title = props.title || "text align right";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M18.8 7.5H61c1 0 1.8-.8 1.8-1.8S62 4 61 4H18.8c-1 0-1.8.8-1.8 1.8s.9 1.7 1.8 1.7z"/>
		<path d="M61 21.5H10.9c-1 0-1.8.8-1.8 1.8s.8 1.7 1.8 1.7H61c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7z"/>
		<path d="M61 39H26.7c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8H61c1 0 1.8-.8 1.8-1.8S62 39 61 39z"/>
		<path d="M61 56.5H3c-1 0-1.8.8-1.8 1.8S2 60 3 60h58c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7z"/>
	</g>
</svg>
	);
};

export default TextAlignRight;