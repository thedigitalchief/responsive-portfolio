import React from 'react';

function ArrowDownCircle(props) {
	const title = props.title || "arrow down circle";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 62.8C15.1 62.8 1.3 49 1.3 32S15.1 1.3 32 1.3 62.7 15 62.7 32 48.9 62.8 32 62.8zm0-58C17 4.8 4.8 17 4.8 32S17 59.3 32 59.3 59.2 47 59.2 32 47 4.8 32 4.8zm0 45.5c-1.3 0-2.5-.5-3.5-1.4l-5.6-5.5c-.7-.7-.7-1.8 0-2.5s1.8-.7 2.5 0l4.9 4.8V16.2c0-1 .8-1.8 1.8-1.8s1.8.8 1.8 1.8v29.5l4.9-4.8c.7-.7 1.8-.7 2.5 0s.7 1.8 0 2.5l-5.6 5.5c-1.2.9-2.5 1.4-3.7 1.4z"/>
	</g>
</svg>
	);
};

export default ArrowDownCircle;