import React from 'react';

function Microsoft(props) {
	const title = props.title || "microsoft";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M1 30.6h29.6V1H1v29.6z"/>
		<path d="M63 30.6V1H33.4v29.6H63z"/>
		<path d="M1 63h29.6V33.4H1V63z"/>
		<path d="M33.4 63H63V33.4H33.4V63z"/>
	</g>
</svg>
	);
};

export default Microsoft;