import React from 'react';

function ArrowsHorizontal(props) {
	const title = props.title || "arrows horizontal";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M53.3 44.3c-.4 0-.8-.1-1.1-.4-.7-.6-.8-1.7-.2-2.5l6.4-7.6H5.6l6.4 7.6c.6.7.5 1.8-.2 2.5-.7.6-1.8.5-2.5-.2l-6.8-8.1c-1.7-2-1.7-5 0-7l6.8-8.1c.6-.7 1.7-.8 2.5-.2.7.6.8 1.7.2 2.5l-6.4 7.6h52.8L52 22.6c-.6-.7-.5-1.8.2-2.5.7-.6 1.8-.5 2.5.2l6.8 8.1c1.7 2 1.7 5 0 7l-6.8 8.1c-.4.5-.9.8-1.4.8z"/>
	</g>
</svg>
	);
};

export default ArrowsHorizontal;