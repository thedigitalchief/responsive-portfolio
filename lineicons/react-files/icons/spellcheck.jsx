import React from 'react';

function Spellcheck(props) {
	const title = props.title || "spellcheck";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M24 29.2c-.3-.7-.8-.9-1.4-.9h-6.2c-.7 0-1.3.3-1.4.9L3.1 56.3c-.5 1.1.3 2.2 1.4 2.2h5.1c.7 0 1.2-.5 1.4-.9l1.7-4.1h12.8l1.6 4.1c.1.6.8.9 1.4.9h5.4c1.4-.1 2.2-1.2 1.7-2.2L24 29.2zm-8.9 16.7L19.3 35l4.2 10.9h-8.4z"/>
		<path d="M62.2 4.3c-.7-.7-1.8-.7-2.5 0l-22 21.8-5.7-5.8c-.7-.7-1.8-.7-2.5 0s-.7 1.8 0 2.5l6.5 6.4c.5.5 1.1.7 1.8.7s1.3-.2 1.8-.7L62.2 6.7c.7-.6.7-1.7 0-2.4z"/>
	</g>
</svg>
	);
};

export default Spellcheck;