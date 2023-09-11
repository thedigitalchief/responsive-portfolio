import React from 'react';

function Ycombinator(props) {
	const title = props.title || "ycombinator";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M1 1v62h62V1H1zm33.1 35.2V49H30V36.2L19.2 16.1h4.9s7.9 16.1 8 16.3c.1-.7 8.2-16.2 8.2-16.2h4.5l-10.7 20z"/>
	</g>
</svg>
	);
};

export default Ycombinator;