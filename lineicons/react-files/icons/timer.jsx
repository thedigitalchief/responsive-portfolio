import React from 'react';

function Timer(props) {
	const title = props.title || "timer";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M33.8 11.9V4.8H40c1 0 1.8-.8 1.8-1.8S41 1.2 40 1.2H24.1c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h6.2v7.1C17 12.8 6.5 23.8 6.5 37.3c0 14 11.4 25.5 25.5 25.5s25.5-11.4 25.5-25.5c0-13.5-10.5-24.5-23.7-25.4zM32 59.3c-12.1 0-22-9.9-22-22s9.9-22 22-22 22 9.9 22 22-9.9 22-22 22z"/>
		<path d="M45.2 35.5H33.8V24.1c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v11.4h-3.5c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h3.5v3.5c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V39h11.4c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7z"/>
	</g>
</svg>
	);
};

export default Timer;