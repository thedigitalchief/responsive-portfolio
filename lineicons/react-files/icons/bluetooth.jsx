import React from 'react';

function Bluetooth(props) {
	const title = props.title || "bluetooth";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M49.1 42.9L32.9 32l16.3-10.9a5.419 5.419 0 0 0 0-9L33.7 1.8c-1-.7-2.4-.8-3.5-.2-1.1.6-1.9 1.8-1.9 3.1v24.1L15.2 20c-.8-.5-1.9-.3-2.4.5s-.3 1.9.5 2.4l13.5 9-13.4 8.9c-.8.5-1 1.6-.5 2.4.3.5.9.8 1.5.8.3 0 .7-.1 1-.3L28.5 35v24.1c0 1.3.7 2.5 1.9 3.1.5.3 1.1.4 1.6.4.7 0 1.3-.2 1.9-.6l15.4-10.3c1.5-1 2.4-2.7 2.4-4.5s-1.1-3.3-2.6-4.3zM31.9 4.8L47.2 15c.5.4.9.9.9 1.6s-.3 1.2-.9 1.6L31.9 28.5V4.8zM47.2 49L31.9 59.2V35.5l15.3 10.2c.5.4.9.9.9 1.6s-.4 1.3-.9 1.7z"/>
	</g>
</svg>
	);
};

export default Bluetooth;