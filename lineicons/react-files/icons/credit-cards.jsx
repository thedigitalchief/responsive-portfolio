import React from 'react';

function CreditCards(props) {
	const title = props.title || "credit cards";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M59.6 17.9v-6.2c0-1.7-.7-3.2-2-4.2s-3-1.4-4.6-1.1L7.8 17.3H7c-3.2 0-5.8 2.6-5.8 5.8V52c0 3.2 2.6 5.8 5.8 5.8h50c3.2 0 5.8-2.6 5.8-5.8V23c0-2.2-1.3-4.1-3.2-5.1zm-5.9-8c.6-.1 1.2 0 1.6.4.5.4.7.9.7 1.5v5.5H22.8l30.9-7.4zM7 20.8h50c1.2 0 2.3 1 2.3 2.3v4.8H4.8V23c0-1.2 1-2.2 2.2-2.2zm52.3 10.5v5.8H4.8v-5.8h54.5zM57 54.2H7c-1.2 0-2.3-1-2.3-2.3V40.6h54.5v11.3c.1 1.3-1 2.3-2.2 2.3z"/>
	</g>
</svg>
	);
};

export default CreditCards;