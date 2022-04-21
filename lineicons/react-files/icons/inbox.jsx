import React from 'react';

function Inbox(props) {
	const title = props.title || "inbox";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 30.3c-1 0-1.8.8-1.8 1.8v19.5c0 4.4-3.2 7.8-7.3 7.8H12.1c-4.1 0-7.3-3.4-7.3-7.8V32c0-1-.8-1.8-1.8-1.8S1.3 31 1.3 32v19.5c0 6.2 4.9 11.3 10.8 11.3h39.8c6 0 10.8-5.1 10.8-11.3V32c.1-1-.7-1.7-1.7-1.7z"/>
		<path d="M28.7 41.7c.9.9 2.1 1.3 3.3 1.3 1.2 0 2.3-.4 3.2-1.3l8.6-8.5c.7-.7.7-1.8 0-2.5s-1.8-.7-2.5 0l-7.5 7.5V3c0-1-.8-1.8-1.8-1.8S30.3 2 30.3 3v35.3l-7.6-7.6c-.7-.7-1.8-.7-2.5 0s-.7 1.8 0 2.5l8.5 8.5z"/>
	</g>
</svg>
	);
};

export default Inbox;