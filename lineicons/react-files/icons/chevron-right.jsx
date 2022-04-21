import React from 'react';

function ChevronRight(props) {
	const title = props.title || "chevron right";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M19 62.8c-.4 0-.9-.2-1.2-.5-.7-.7-.7-1.8-.1-2.5L42.9 33c.5-.5.5-1.4 0-2L17.7 4.2c-.7-.7-.6-1.8.1-2.5s1.8-.6 2.5.1l25.2 26.8c1.7 1.9 1.7 4.9 0 6.7L20.3 62.2c-.4.4-.8.6-1.3.6z"/>
	</g>
</svg>
	);
};

export default ChevronRight;