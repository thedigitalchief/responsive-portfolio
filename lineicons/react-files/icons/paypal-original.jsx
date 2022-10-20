import React from 'react';

function PaypalOriginal(props) {
	const title = props.title || "paypal original";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M55.7 18.9l-.1-.1c-2.7 12.8-11.2 19.7-25 19.7H25l-3.2 20.7h-3l-.4 2.2c-.1.8.6 1.7 1.4 1.7h10c1.1 0 2.2-.8 2.4-2l.1-.4 1.8-12 .1-.7c.1-1.1 1.1-2 2.4-2h1.5c9.7 0 17.3-3.9 19.5-15.3 1.1-5 .5-8.9-1.9-11.8z"/>
		<path d="M25 38.3z"/>
		<path d="M22.3 37.3l-.1.6c.1-1.4 1.4-2.4 2.7-2.4h5.6c11.1 0 19.7-4.5 22.4-17.6.1-.4.1-.7.1-1.1.7-4.8 0-8.2-2.7-11.1-.7-.8-1.7-1.5-2.7-2.2-1.4-.8-2.8-1.4-4.5-1.7-1.1-.3-2.5-.4-3.9-.6-1.2-.1-2.3-.2-3.6-.2H16.5c-1.4 0-2.5 1-2.7 2.2l-8 50.9c-.1 1.1.6 2 1.7 2h11.8l3-18.8z"/>
	</g>
</svg>
	);
};

export default PaypalOriginal;