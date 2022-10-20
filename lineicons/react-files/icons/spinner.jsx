import React from 'react';

function Spinner(props) {
	const title = props.title || "spinner";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<circle cx="33.3" cy="9.8" r="6.8"/>
		<circle cx="33.3" cy="57.2" r="3.8"/>
		<circle cx="50.1" cy="50.2" r="3.1"/>
		<circle cx="16.5" cy="50.3" r="4.3"/>
		<path d="M57 31c-1.4 0-2.5 1.1-2.5 2.5S55.6 36 57 36s2.5-1.1 2.5-2.5c-.1-1.3-1.2-2.5-2.5-2.5z"/>
		<path d="M14.4 33.5c0-2.7-2.2-4.9-4.9-4.9s-4.9 2.2-4.9 4.9 2.2 4.9 4.9 4.9 4.9-2.2 4.9-4.9z"/>
		<path d="M12.6 12.7c-2.2 2.2-2.2 5.7 0 7.8s5.7 2.2 7.8 0 2.2-5.7 0-7.8-5.7-2.1-7.8 0z"/>
		<path d="M51.4 18c.7-.7.7-1.9 0-2.6-.7-.7-1.9-.7-2.6 0-.7.7-.7 1.9 0 2.6.6.8 1.8.8 2.6 0z"/>
	</g>
</svg>
	);
};

export default Spinner;