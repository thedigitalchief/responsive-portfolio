import React from 'react';

function Envelope(props) {
	const title = props.title || "envelope";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M57 10.9H7c-3.2 0-5.8 2.6-5.8 5.8v30.7c0 3.2 2.6 5.8 5.8 5.8h50c3.2 0 5.8-2.6 5.8-5.8V16.7c0-3.2-2.6-5.8-5.8-5.8zm0 3.5c.5 0 .9.1 1.3.4L33.4 29.9c-.9.5-1.9.5-2.8 0L5.7 14.8c.4-.2.8-.4 1.3-.4h50zm0 35.2H7c-1.2 0-2.3-1-2.3-2.3v-29l24 14.6c1 .6 2.1.9 3.2.9s2.2-.3 3.2-.9l24-14.6v29c.2 1.3-.9 2.3-2.1 2.3z"/>
	</g>
</svg>
	);
};

export default Envelope;