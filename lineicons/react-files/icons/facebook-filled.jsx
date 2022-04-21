import React from 'react';

function FacebookFilled(props) {
	const title = props.title || "facebook filled";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M47.4 25.8h-7.6V15.6H46c1.1 0 2-.8 2-2V3c0-1.1-.8-2-2-2h-7.3c-7.9 0-13.4 5.6-13.4 13.9v10.7h-8.8c-1.4 0-2.7 1.1-2.7 2.7v7.2c0 1.4 1.1 2.7 2.7 2.7h8.6v22.1c0 1.4 1.1 2.7 2.7 2.7h9.4c.6 0 1.1-.3 1.5-.7s.7-1.1.7-1.7V38.3H46c1.3 0 2.3-.8 2.5-2v-.2l1.4-6.9c.1-.7 0-1.5-.6-2.3-.2-.5-1.1-1-1.9-1.1z"/>
	</g>
</svg>
	);
};

export default FacebookFilled;