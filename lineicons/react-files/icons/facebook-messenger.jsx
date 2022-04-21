import React from 'react';

function FacebookMessenger(props) {
	const title = props.title || "facebook messenger";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M31.9 1.1C14.5 1.1 1 13.9 1 31.1c0 9.1 3.7 16.9 9.7 22.2.4.4.7 1.1.8 1.7l.1 5.5c.1 1.7 1.8 3 3.5 2.2l6.2-2.7c.4-.1 1.1-.3 1.7-.1 2.8.7 5.8 1.3 9 1.3 17.5-.1 31-12.9 31-30S49.4 1.1 31.9 1.1zm18.6 23.1l-9.1 14.3c-1.4 2.2-4.5 3-6.6 1.3l-7.2-5.5c-.7-.4-1.5-.4-2.2 0l-9.8 7.3c-1.3 1-3-.6-2.1-2l9.1-14.3c1.4-2.2 4.5-3 6.6-1.3l7.2 5.5c.7.4 1.5.4 2.2 0l9.7-7.5c1.5-.6 3 .9 2.2 2.2z"/>
	</g>
</svg>
	);
};

export default FacebookMessenger;