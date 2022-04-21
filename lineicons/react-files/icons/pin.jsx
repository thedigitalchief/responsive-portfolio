import React from 'react';

function Pin(props) {
	const title = props.title || "pin";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M46.9 16.2C46.9 8 40.2 1.3 32 1.3S17.1 8 17.1 16.2c0 7.6 5.8 13.9 13.2 14.8v30c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V31c7.3-.9 13-7.2 13-14.8zM32 27.6c-6.3 0-11.4-5.1-11.4-11.4 0-6.3 5.1-11.4 11.4-11.4s11.4 5.1 11.4 11.4c0 6.3-5.1 11.4-11.4 11.4z"/>
		<path d="M34.6 10c-2 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5c2 0 3.5-1.6 3.5-3.5S36.6 10 34.6 10z"/>
	</g>
</svg>
	);
};

export default Pin;