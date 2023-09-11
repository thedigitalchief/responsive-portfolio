import React from 'react';

function Minus(props) {
	const title = props.title || "minus";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 33.8H3c-1 0-1.8-.8-1.8-1.8S2 30.2 3 30.2h58c1 0 1.8.8 1.8 1.8s-.8 1.8-1.8 1.8z"/>
	</g>
</svg>
	);
};

export default Minus;