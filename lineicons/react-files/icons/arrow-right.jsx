import React from 'react';

function ArrowRight(props) {
	const title = props.title || "arrow right";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61.5 28.5l-6.9-8.2c-.6-.7-1.7-.8-2.5-.2-.7.6-.8 1.7-.2 2.5l6.5 7.7H3c-1 0-1.8.8-1.8 1.8S2 33.9 3 33.9h55.4l-6.5 7.7c-.6.7-.5 1.8.2 2.5.3.3.7.4 1.1.4.5 0 1-.2 1.3-.6l6.9-8.2c1.8-2.2 1.8-5.2.1-7.2z"/>
	</g>
</svg>
	);
};

export default ArrowRight;