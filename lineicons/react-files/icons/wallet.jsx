import React from 'react';

function Wallet(props) {
	const title = props.title || "wallet";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M54.4 21.5h-1v-5.6c0-2.4-1.1-4.5-3-5.9-1.9-1.4-4.3-1.7-6.5-.9L8.1 21.5c-3.8.2-6.8 3.3-6.8 7.2v19.4c0 4 3.2 7.2 7.2 7.2h45.9c4 0 7.2-3.2 7.2-7.2V28.7c0-4-3.3-7.2-7.2-7.2zM45 12.4c1.1-.4 2.4-.2 3.4.5s1.6 1.8 1.6 3v5.6H18.8L45 12.4zm9.4 39.4H8.5c-2 0-3.7-1.7-3.7-3.7V28.7c0-2 1.7-3.7 3.7-3.7h45.9c2 0 3.7 1.7 3.7 3.7v2.7H46.4c-3.9 0-7.1 3.2-7.1 7.1s3.2 7.1 7.1 7.1h11.7V48c0 2.1-1.7 3.8-3.7 3.8zm3.7-16.9v7.3H46.4c-2 0-3.6-1.6-3.6-3.6s1.6-3.6 3.6-3.6h11.7z"/>
	</g>
</svg>
	);
};

export default Wallet;