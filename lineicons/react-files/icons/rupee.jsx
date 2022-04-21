import React from 'react';

function Rupee(props) {
	const title = props.title || "rupee";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M53.1 17.1H38.9c-.4-4.7-2.3-9.3-5.6-12.3H53c1 0 1.8-.8 1.8-1.8S54 1.2 53 1.2H10.9c-1 .1-1.7.8-1.7 1.8S10 4.8 11 4.8h13.2c6.9 0 10.7 5.9 11.3 12.3H10.9c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h24.4C33.7 27 23.7 31.9 16.9 31.9c-.7 0-1.3.4-1.6 1-.3.6-.2 1.3.2 1.9l23 27.5c.3.4.8.6 1.3.6.4 0 .8-.1 1.1-.4.7-.6.8-1.7.2-2.5L20.4 34.9c7.9-1.3 17.2-6.9 18.5-14.4h14.2c1 0 1.8-.8 1.8-1.8s-.8-1.6-1.8-1.6z"/>
	</g>
</svg>
	);
};

export default Rupee;