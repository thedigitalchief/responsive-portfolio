import React from 'react';

function TextAlignJustify(props) {
	const title = props.title || "text align justify";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M3 7.5h58c1 0 1.8-.8 1.8-1.8S62 4 61 4H3c-1 0-1.7.8-1.7 1.7S2 7.5 3 7.5z"/>
		<path d="M61 21.5H3c-1 0-1.8.8-1.8 1.8S2 25 3 25h58c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7z"/>
		<path d="M61 39H3c-1 0-1.8.8-1.8 1.8S2 42.5 3 42.5h58c1 0 1.8-.8 1.8-1.8S62 39 61 39z"/>
		<path d="M42.9 56.5H3c-1 0-1.8.8-1.8 1.8S2 60 3 60h39.9c1 0 1.8-.8 1.8-1.8s-.9-1.7-1.8-1.7z"/>
	</g>
</svg>
	);
};

export default TextAlignJustify;