import React from 'react';

function Play(props) {
	const title = props.title || "play";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M8.9 62.8c-.7 0-1.3-.2-1.9-.5-1.2-.7-2-1.9-2-3.3V5c0-1.4.7-2.6 2-3.3 1.2-.7 2.7-.7 3.9.1l46.4 27c1.2.7 1.8 1.9 1.8 3.2 0 1.3-.7 2.5-1.8 3.2l-46.4 27c-.6.4-1.3.6-2 .6zm-.1-58c-.1 0-.2 0-.2.1-.1 0-.1.1-.1.1v53.9s0 .2.2.2c.1 0 .2.1.4 0l46.4-27s.1-.1.1-.2-.1-.2-.1-.2L9 4.8h-.2z"/>
	</g>
</svg>
	);
};

export default Play;