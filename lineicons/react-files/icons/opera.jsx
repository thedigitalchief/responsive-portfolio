import React from 'react';

function Opera(props) {
	const title = props.title || "opera";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M40.2 5.1c-21.3 0-31.6 28-18.5 44.4 4.5 5.8 11 9.4 18.5 9.4 4.5 0 8.9-1.4 12.4-3.8C47.2 59.9 39.9 63 32 63h-1.4C14.1 62.3 1 48.6 1 32 1 14.8 14.8 1 32 1h.1C40 1 47.2 4 52.7 8.9c-3.6-2.4-7.9-3.8-12.5-3.8zm12.7 49.7c-5.1 3.1-11.3 3-16.5-.7 7-2.7 12.3-11.4 12.3-22.1 0-10.6-5.1-19.4-12.3-22.1 5.2-3.7 11.4-3.8 16.6-.6 13.4 12.3 13.3 33.3-.1 45.5z"/>
	</g>
</svg>
	);
};

export default Opera;