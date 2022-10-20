import React from 'react';

function Italic(props) {
	const title = props.title || "italic";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M54 1.3H20.4c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h14.7l-9.7 54.5H10c-1 0-1.8.8-1.8 1.8S9 63 10 63h33.6c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8H28.9l9.7-54.5H54c1 0 1.8-.8 1.8-1.8s-.9-1.8-1.8-1.8z"/>
	</g>
</svg>
	);
};

export default Italic;