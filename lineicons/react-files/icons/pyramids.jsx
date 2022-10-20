import React from 'react';

function Pyramids(props) {
	const title = props.title || "pyramids";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M59.6 52.2H4.4c-1.2 0-2.2-.6-2.8-1.6-.6-1-.6-2.2 0-3.2l14.8-25c.6-1 1.6-1.6 2.7-1.6s2.2.6 2.7 1.5l4.6 7.7 9.8-16.7c.6-1 1.6-1.6 2.7-1.6 1.2 0 2.2.6 2.7 1.5l20.5 34.1c.6 1 .6 2.2 0 3.2-.3 1.1-1.4 1.7-2.5 1.7zM5 48.7h54L39.1 15.6l-9.8 16.7c-.6 1-1.6 1.6-2.7 1.6s-2.1-.6-2.7-1.5l-4.6-7.7L5 48.7z"/>
	</g>
</svg>
	);
};

export default Pyramids;