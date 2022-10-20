import React from 'react';

function Diamond(props) {
	const title = props.title || "diamond";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 62.8c-1.2 0-2.3-.6-3-1.5L4.6 27.9c-.8-1.1-1-2.6-.4-3.8l9.1-20.6c.6-1.4 1.9-2.2 3.4-2.2h30.6c1.5 0 2.8.9 3.4 2.2l9.1 20.6c.5 1.3.4 2.7-.4 3.8L35 61.2c-.7 1-1.8 1.5-3 1.6zm-15.3-58c-.1 0-.2.1-.2.2L7.4 25.5v.3l24.4 33.3s.1.1.2.1.2-.1.2-.1l24.4-33.3c.1-.1.1-.2 0-.3L47.5 4.9c0-.1-.1-.2-.2-.2H16.7z"/>
	</g>
</svg>
	);
};

export default Diamond;