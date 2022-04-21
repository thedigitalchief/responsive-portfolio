import React from 'react';

function Magento(props) {
	const title = props.title || "magento";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 1L5.2 16.5v31l7.6 4.5V21L32 9.9 51.2 21v31l7.6-4.5v-31z"/>
		<path d="M35.9 52L32 54.1 28.2 52V21l-7.8 4.4v31L32 63l11.6-6.6v-31L35.9 21z"/>
	</g>
</svg>
	);
};

export default Magento;