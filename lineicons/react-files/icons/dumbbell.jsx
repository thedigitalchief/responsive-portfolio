import React from 'react';

function Dumbbell(props) {
	const title = props.title || "dumbbell";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 30.3h-2.7v-4.6c0-1.5-1.2-2.8-2.8-2.8h-7.8c-1.5 0-2.8 1.2-2.8 2.8v4.6H19.1v-4.6c0-1.5-1.2-2.8-2.8-2.8H8.5c-1.5 0-2.8 1.2-2.8 2.8v4.6H3c-1 0-1.8.8-1.8 1.8S2 33.9 3 33.9h2.8v4.6c0 1.5 1.2 2.8 2.8 2.8h7.8c1.5 0 2.8-1.2 2.8-2.8v-4.6H45v4.6c0 1.5 1.2 2.8 2.8 2.8h7.8c1.5 0 2.8-1.2 2.8-2.8v-4.6H61c1 0 1.8-.8 1.8-1.8 0-1.1-.8-1.8-1.8-1.8zm-45.4 7.3H9.3V26.4h6.3v11.2zm39.2 0h-6.3V26.4h6.3v11.2z"/>
	</g>
</svg>
	);
};

export default Dumbbell;