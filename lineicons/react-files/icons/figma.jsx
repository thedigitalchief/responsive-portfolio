import React from 'react';

function Figma(props) {
	const title = props.title || "figma";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M42.4 21.5c5.8 0 10.4-4.6 10.4-10.4S48 1 42.4 1H21.6c-5.8 0-10.4 4.6-10.4 10.4s4.6 10.4 10.4 10.4c-5.8 0-10.4 4.6-10.4 10.4s4.6 10.4 10.4 10.4c-5.8 0-10.4 4.6-10.4 10.4s4.7 10 10.4 10S32 58.4 32 52.6V21.8h10.4v-.3zm0 0c-5.8 0-10.4 4.6-10.4 10.4s4.6 10.4 10.4 10.4 10.4-4.6 10.4-10.4c-.3-5.8-4.8-10.4-10.4-10.4z"/>
	</g>
</svg>
	);
};

export default Figma;