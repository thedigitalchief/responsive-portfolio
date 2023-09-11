import React from 'react';

function Ban(props) {
	const title = props.title || "ban";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 1.3C15 1.3 1.3 15 1.3 32S15 62.8 32 62.8 62.8 49 62.8 32 49 1.3 32 1.3zM4.8 32C4.8 17 17 4.8 32 4.8c5.8 0 11.2 1.8 15.6 4.9l-34 42.4c-5.4-5-8.8-12.2-8.8-20.1zM32 59.3c-5.8 0-11.2-1.8-15.7-5l34-42.5c5.5 5 8.9 12.2 8.9 20.2C59.3 47 47 59.3 32 59.3z"/>
	</g>
</svg>
	);
};

export default Ban;