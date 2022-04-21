import React from 'react';

function Pause(props) {
	const title = props.title || "pause";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M17.5 6.5H7c-3.2 0-5.8 2.6-5.8 5.8v39.5c0 3.2 2.6 5.8 5.8 5.8h10.5c3.2 0 5.8-2.6 5.8-5.8V12.3c-.1-3.2-2.7-5.8-5.8-5.8zm2.2 45.2c0 1.2-1 2.3-2.3 2.3H7c-1.2 0-2.3-1-2.3-2.3V12.3C4.8 11 5.8 10 7 10h10.5c1.2 0 2.3 1 2.3 2.3v39.4z"/>
		<path d="M57 6.5H46.5c-3.2 0-5.8 2.6-5.8 5.8v39.5c0 3.2 2.6 5.8 5.8 5.8H57c3.2 0 5.8-2.6 5.8-5.8V12.3c0-3.2-2.6-5.8-5.8-5.8zm2.3 45.2c0 1.2-1 2.3-2.3 2.3H46.5c-1.2 0-2.3-1-2.3-2.3V12.3c0-1.2 1-2.3 2.3-2.3H57c1.2 0 2.3 1 2.3 2.3v39.4z"/>
	</g>
</svg>
	);
};

export default Pause;