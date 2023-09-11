import React from 'react';

function Shield(props) {
	const title = props.title || "shield";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 62.7c-.9 0-1.7-.2-2.5-.5C15.4 56.7 6.3 43.5 6.3 28.7V13.5c0-3.2 2.1-6 5.2-6.8L30 1.5c1.3-.4 2.6-.4 3.8 0l18.7 5.2c3 .9 5.2 3.7 5.2 6.8v15.1c0 14.8-9.1 28-23.2 33.6-.8.4-1.6.5-2.5.5zM12.4 10.1c-1.5.4-2.6 1.8-2.6 3.4v15.1C9.8 42.1 18 54 30.8 59c.8.3 1.7.3 2.4 0 12.8-5.1 21-17 21-30.3V13.6c0-1.6-1.1-3-2.6-3.4L32.9 4.9c-.6-.2-1.3-.2-1.9 0l-18.6 5.2z"/>
	</g>
</svg>
	);
};

export default Shield;