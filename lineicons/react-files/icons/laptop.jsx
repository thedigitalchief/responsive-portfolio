import React from 'react';

function Laptop(props) {
	const title = props.title || "laptop";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.7 54.6l-4-17.4h.1V11.5c0-3.2-2.6-5.8-5.8-5.8H11c-3.2 0-5.8 2.6-5.8 5.8v25.7h.1l-4 17.4c-.2.9.1 1.7.7 2.4s1.5 1.1 2.4 1.1h55.3c1 0 1.9-.4 2.5-1.2.5-.6.7-1.5.5-2.3zm-54-43.1c0-1.2 1-2.3 2.3-2.3h42c1.2 0 2.3 1 2.3 2.3v22.2H8.7V11.5zM4.9 54.7l4-17.4h46.2l4 17.4H4.9z"/>
	</g>
</svg>
	);
};

export default Laptop;