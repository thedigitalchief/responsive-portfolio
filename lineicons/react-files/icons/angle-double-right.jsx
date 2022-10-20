import React from 'react';

function AngleDoubleRight(props) {
	const title = props.title || "angle double right";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M36.2 28.1L11.3 1.8c-.7-.7-1.8-.7-2.5-.1-.7.7-.7 1.8 0 2.5l24.9 26.3c.7.7.7 1.9 0 2.6L8.8 59.7c-.7.7-.6 1.8.1 2.5.3.3.8.5 1.2.5.5 0 .9-.2 1.3-.6l24.9-26.6c1.9-2 1.9-5.3-.1-7.4z"/>
		<path d="M54.3 28.2l-25-26.3c-.7-.7-1.8-.7-2.5-.1-.7.7-.7 1.8-.1 2.5l24.9 26.3c.7.7.7 1.9 0 2.6L26.8 59.8c-.7.7-.6 1.8.1 2.5.3.3.8.5 1.2.5.5 0 .9-.2 1.3-.6l24.9-26.6c1.9-2 1.9-5.3 0-7.4z"/>
	</g>
</svg>
	);
};

export default AngleDoubleRight;