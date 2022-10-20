import React from 'react';

function InstagramFilled(props) {
	const title = props.title || "instagram filled";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<ellipse cx="32.1" cy="32" rx="11.6" ry="11.6"/>
		<path d="M44.7 1H19.3C9.2 1 1 9.2 1 19.3v25.2C1 54.8 9.2 63 19.3 63h25.2C54.8 63 63 54.8 63 44.7V19.3C63 9.2 54.8 1 44.7 1zM32.1 47.2c-8.5 0-15.2-6.9-15.2-15.2s6.8-15.2 15.2-15.2c8.3 0 15.1 6.9 15.1 15.2s-6.7 15.2-15.1 15.2zm21-29c-1 1.1-2.5 1.7-4.2 1.7-1.5 0-3-.6-4.2-1.7-1.1-1.1-1.7-2.5-1.7-4.2s.6-3 1.7-4.2C45.8 8.6 47.2 8 48.9 8c1.5 0 3.1.6 4.2 1.7 1 1.3 1.7 2.8 1.7 4.4-.1 1.6-.7 3-1.7 4.1z"/>
		<path d="M49 11.6c-1.3 0-2.4 1.1-2.4 2.4s1.1 2.4 2.4 2.4c1.3 0 2.4-1.1 2.4-2.4s-1-2.4-2.4-2.4z"/>
	</g>
</svg>
	);
};

export default InstagramFilled;