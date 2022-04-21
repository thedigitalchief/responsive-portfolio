import React from 'react';

function ArrowLeftCircle(props) {
	const title = props.title || "arrow left circle";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 62.7C15 62.7 1.3 48.9 1.3 32S15 1.3 32 1.3 62.8 15.1 62.8 32 49 62.7 32 62.7zm0-57.9C17 4.8 4.8 17 4.8 32S17 59.2 32 59.2 59.3 47 59.3 32 47 4.8 32 4.8zM21.9 41.6c-.5 0-.9-.2-1.2-.5l-5.5-5.6c-1.9-1.9-1.9-5 0-6.9l5.5-5.6c.7-.7 1.8-.7 2.5 0s.7 1.8 0 2.5l-4.8 4.9h29.5c1 0 1.8.8 1.8 1.8s-.8 1.8-1.8 1.8H18.4l4.8 4.9c.7.7.7 1.8 0 2.5-.4 0-.9.2-1.3.2z"/>
	</g>
</svg>
	);
};

export default ArrowLeftCircle;