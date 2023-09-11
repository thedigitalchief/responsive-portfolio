import React from 'react';

function Pound(props) {
	const title = props.title || "pound";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M59.7 59.3H20.5c4-3.1 6.6-8 6.6-13.4v-9.6h27.3c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8H27.2V20.5c0-8.7 7-15.7 15.6-15.7 4 0 7.9 1.5 10.8 4.3.7.7 1.8.6 2.5 0 .7-.7.6-1.8 0-2.5-3.6-3.4-8.3-5.3-13.2-5.3-10.5 0-19.1 8.6-19.1 19.2v12.2H6.9c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h16.7v9.6c0 7.4-6 13.4-13.3 13.4h-6c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h55.5c1 0 1.8-.8 1.8-1.8s-.9-1.8-1.9-1.8z"/>
	</g>
</svg>
	);
};

export default Pound;