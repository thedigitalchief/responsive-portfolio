import React from 'react';

function Clipboard(props) {
	const title = props.title || "clipboard";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M46 9.2h-2.2V7.5c0-2-1.6-3.7-3.6-3.7h-6.5V3c0-1-.8-1.8-1.7-1.8S30.2 2 30.2 3v.9h-6.5c-2 0-3.6 1.6-3.6 3.7v1.6H18c-3 0-5.4 2.5-5.4 5.6v42.5c0 3.1 2.4 5.6 5.4 5.6h28c3 0 5.4-2.5 5.4-5.6V14.7c0-3.1-2.4-5.5-5.4-5.5zM23.6 7.5c0-.1.1-.1.1-.2h16.6s.1.1.1.2v6.6c0 .1-.1.1-.1.2H23.8s-.1-.1-.1-.2V7.5zm24.3 49.7c0 1.1-.8 2.1-1.9 2.1H18c-1 0-1.9-.9-1.9-2.1V14.7c0-1.1.8-2.1 1.9-2.1h2.2v1.6c0 2 1.6 3.7 3.6 3.7h16.6c2 0 3.6-1.6 3.6-3.7v-1.6h2c1 0 1.9.9 1.9 2.1v42.5z"/>
	</g>
</svg>
	);
};

export default Clipboard;