import React from 'react';

function BluetoothOriginal(props) {
	const title = props.title || "bluetooth original";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M36.4 32.4l11.3-12.5L30 1v24.9L19.5 15.5l-3.8 3.9 13.1 13.1-13.1 13.2 3.8 3.8L30 39l.3 24 18-18-11.9-12.6zm5-12.4l-6.1 6.1V14l6.1 6zm-6.2 18.9l6.1 6.1-6.1 6V38.9z"/>
	</g>
</svg>
	);
};

export default BluetoothOriginal;