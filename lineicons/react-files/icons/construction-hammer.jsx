import React from 'react';

function ConstructionHammer(props) {
	const title = props.title || "construction hammer";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M54.7 1.3H16.1c-2.8 0-5.2 1.5-6.5 4l-7 14.1c-.7 1.4-.6 3 .2 4.4.8 1.2 2.2 2 3.8 2h15.7V57c0 3.2 2.6 5.8 5.8 5.8h7.8c3.2 0 5.8-2.6 5.8-5.8V25.8h13c4 0 7.2-3.3 7.2-7.2V8.5c0-4-3.2-7.2-7.2-7.2zM38.1 57c0 1.2-1 2.3-2.3 2.3H28c-1.2 0-2.3-1-2.3-2.3V25.8H38V57zm20.3-38.4c0 2.1-1.7 3.7-3.7 3.7H6.6c-.5 0-.8-.3-.8-.5-.1-.1-.3-.5 0-1l7-14.1c.6-1.3 1.9-2.1 3.3-2.1h38.6c2.1 0 3.7 1.7 3.7 3.7v10.3z"/>
	</g>
</svg>
	);
};

export default ConstructionHammer;