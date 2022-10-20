import React from 'react';

function Checkmark(props) {
	const title = props.title || "checkmark";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.3 12.7c-.7-.7-1.8-.7-2.5 0L23.3 48.1c-.3.3-.7.3-1 0L4.2 30.5c-.7-.7-1.8-.7-2.5 0s-.7 1.8 0 2.5l18.1 17.6c.8.8 1.9 1.2 2.9 1.2 1.1 0 2.1-.4 2.9-1.2l36.5-35.4c.8-.7.8-1.8.2-2.5z"/>
	</g>
</svg>
	);
};

export default Checkmark;