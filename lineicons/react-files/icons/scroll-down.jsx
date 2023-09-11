import React from 'react';

function ScrollDown(props) {
	const title = props.title || "scroll down";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<circle cx="32" cy="13.5" r="2.6"/>
		<circle cx="32" cy="24.1" r="2.6"/>
		<circle cx="32" cy="34.6" r="2.6"/>
		<path d="M38.7 41.3L32 48l-6.7-6.6c-.7-.7-1.8-.7-2.5 0s-.7 1.8 0 2.5l7.9 7.8c.3.3.8.5 1.2.5s.9-.2 1.2-.5l7.9-7.8c.7-.7.7-1.8 0-2.5-.5-.7-1.6-.7-2.3-.1z"/>
		<path d="M42.5 1.3h-21c-5.4 0-9.8 4.4-9.8 9.8v42c0 5.4 4.4 9.8 9.8 9.8h20.9c5.4 0 9.8-4.4 9.8-9.8V11c0-5.4-4.4-9.7-9.7-9.7zM48.7 53c0 3.4-2.8 6.3-6.3 6.3H21.5c-3.4 0-6.3-2.8-6.3-6.3V11c0-3.4 2.8-6.3 6.3-6.3h20.9c3.4 0 6.3 2.8 6.3 6.3v42z"/>
	</g>
</svg>
	);
};

export default ScrollDown;