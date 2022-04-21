import React from 'react';

function Adobe(props) {
	const title = props.title || "adobe";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M40 6.1h23v51.6L40 6.1zm-16 0H1v51.6L24 6.1zm8 19.3L46.4 58h-9.7l-4.2-10.4H21.9L32 25.4z"/>
	</g>
</svg>
	);
};

export default Adobe;