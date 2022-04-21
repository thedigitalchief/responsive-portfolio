import React from 'react';

function ChevronLeft(props) {
	const title = props.title || "chevron left";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M45 62.8c-.5 0-.9-.2-1.3-.6L18.6 35.4c-1.7-1.9-1.7-4.9 0-6.7L43.7 1.8c.7-.7 1.8-.7 2.5-.1.7.7.7 1.8.1 2.5L21.1 31c-.5.5-.5 1.4 0 2l25.2 26.8c.7.7.6 1.8-.1 2.5-.3.3-.8.5-1.2.5z"/>
	</g>
</svg>
	);
};

export default ChevronLeft;