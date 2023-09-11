import React from 'react';

function Producthunt(props) {
	const title = props.title || "producthunt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M36.1 22.7h-8.9V32h8.9c2.5 0 4.7-2.1 4.7-4.6.1-2.7-2.2-4.7-4.7-4.7z"/>
		<path d="M32 1C14.8 1 1 14.8 1 32s13.8 31 31 31 31-13.8 31-31S49.2 1 32 1zm4.1 37.2h-8.9v9.3H21v-31h15.1c6.1 0 10.9 4.8 10.9 10.9.1 6-4.9 10.8-10.9 10.8z"/>
	</g>
</svg>
	);
};

export default Producthunt;