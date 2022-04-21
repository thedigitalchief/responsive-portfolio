import React from 'react';

function Service(props) {
	const title = props.title || "service";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M59.6 40.5h-2c-1.4-13.1-11.4-23.3-23.8-24.2v-3.7h1.7c1 0 1.8-.8 1.8-1.8S36.5 9 35.5 9h-6.9c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h1.7v3.7c-12.4.9-22.5 11.1-23.9 24.2h-2c-1.7 0-3.1 1.4-3.1 3.1v5.2c0 3.3 2.7 5.9 5.9 5.9h49.6c3.3 0 5.9-2.7 5.9-5.9v-5.2c.1-1.6-1.4-3.1-3.1-3.1zM32 19.8c11.3 0 20.6 9 22.1 20.8H9.9C11.4 28.7 20.7 19.8 32 19.8zm27.3 29.1c0 1.3-1.1 2.4-2.4 2.4H7.2c-1.3 0-2.4-1.1-2.4-2.4V44h54.5v4.9z"/>
	</g>
</svg>
	);
};

export default Service;