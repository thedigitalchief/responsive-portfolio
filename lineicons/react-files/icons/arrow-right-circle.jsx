import React from 'react';

function ArrowRightCircle(props) {
	const title = props.title || "arrow right circle";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M43.4 22.9c-.7-.7-1.8-.7-2.5 0s-.7 1.8 0 2.5l4.8 4.9H16.2c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h29.5l-4.8 4.9c-.7.7-.7 1.8 0 2.5.3.3.8.5 1.2.5.5 0 .9-.2 1.2-.5l5.5-5.6c1.9-1.9 1.9-5 0-6.9l-5.4-5.9z"/>
		<path d="M32 1.3C15 1.3 1.2 15 1.2 32S15 62.8 32 62.8 62.8 49 62.8 32 49 1.3 32 1.3zm0 58C17 59.3 4.7 47 4.7 32S17 4.8 32 4.8 59.3 17 59.3 32 47 59.3 32 59.3z"/>
	</g>
</svg>
	);
};

export default ArrowRightCircle;