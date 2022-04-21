import React from 'react';

function Underline(props) {
	const title = props.title || "underline";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 49.6c11.9 0 21.5-9.4 21.5-21V3c0-1-.8-1.8-1.8-1.8S50 2 50 3v25.5C50 38.2 41.9 46 32 46s-18-7.9-18-17.5V3c0-1-.8-1.8-1.8-1.8S10.5 2 10.5 3v25.5c0 11.6 9.6 21.1 21.5 21.1z"/>
		<path d="M57.1 59.3H6.9c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8H57c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.7-1.8z"/>
	</g>
</svg>
	);
};

export default Underline;