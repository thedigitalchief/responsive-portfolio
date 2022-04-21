import React from 'react';

function ArrowLeft(props) {
	const title = props.title || "arrow left";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M10.7 44.3c-.5 0-1-.2-1.3-.6l-6.9-8.2c-1.7-2-1.7-5 0-7l6.9-8.2c.6-.7 1.7-.8 2.5-.2.7.6.8 1.7.2 2.5l-6.5 7.7H61c1 0 1.8.8 1.8 1.8s-.8 1.8-1.8 1.8H5.6l6.5 7.7c.6.7.5 1.8-.2 2.5-.4.1-.8.2-1.2.2z"/>
	</g>
</svg>
	);
};

export default ArrowLeft;