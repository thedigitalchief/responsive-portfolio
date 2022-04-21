import React from 'react';

function Dev(props) {
	const title = props.title || "dev";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M17.7 25.4c-.6-.4-1.1-.6-1.7-.6h-2.4v14.3H16c.6 0 1.1-.1 1.7-.6.6-.4.7-1 .7-1.8V27c0-.6-.2-1.2-.7-1.6zM56.8 1.1H7.2C3.8 1.1 1 3.9 1 7.3V57c0 3.1 2.8 5.9 6.2 5.9H57c3.4 0 6-2.7 6-6V7.3c-.1-3.4-2.8-6.2-6.2-6.2zM22.4 36.8c0 2.7-1.7 6.6-6.6 6.6H9.4V20.5H16c4.9 0 6.6 3.9 6.6 6.6l-.2 9.7zm13.7-12.1h-7.3V30h4.5v4.1h-4.5v5.3h7.3v4.1h-8.6c-1.5 0-2.8-1.1-3-2.7V23.4c0-1.5 1.1-2.8 2.7-3h8.9v4.3zm14.4 15.7c-1.8 4.2-5.1 3.4-6.6 0l-5.3-20h4.6l4.1 15.7 4.1-15.6h4.5l-5.4 19.9z"/>
	</g>
</svg>
	);
};

export default Dev;