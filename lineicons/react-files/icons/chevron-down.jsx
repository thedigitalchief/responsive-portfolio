import React from 'react';

function ChevronDown(props) {
	const title = props.title || "chevron down";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 46.8c-1.2 0-2.4-.4-3.4-1.3L1.8 20.3c-.7-.7-.7-1.8-.1-2.5.7-.7 1.8-.7 2.5-.1L31 42.9c.5.5 1.4.5 2 0l26.8-25.2c.7-.7 1.8-.6 2.5.1s.6 1.8-.1 2.5L35.4 45.4c-1 .9-2.2 1.4-3.4 1.4z"/>
	</g>
</svg>
	);
};

export default ChevronDown;