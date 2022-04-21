import React from 'react';

function Pagination(props) {
	const title = props.title || "pagination";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62 30.3L51.2 19.4c-.7-.7-1.8-.7-2.5 0s-.7 1.8 0 2.5L58.8 32 48.7 42.1c-.7.7-.7 1.8 0 2.5.3.3.8.5 1.2.5.4 0 .9-.2 1.2-.5l10.8-10.9c1.1-.9 1.1-2.5.1-3.4z"/>
		<path d="M15.3 19.4c-.7-.7-1.8-.7-2.5 0L2 30.3c-1 .9-1 2.5 0 3.4l10.8 10.9c.3.3.8.5 1.2.5.4 0 .9-.2 1.2-.5.7-.7.7-1.8 0-2.5L5.2 32l10.1-10.1c.6-.7.6-1.8 0-2.5z"/>
		<path d="M21.5 29.2c-1.6 0-2.8 1.3-2.8 2.8s1.3 2.8 2.8 2.8c1.6 0 2.8-1.3 2.8-2.8s-1.2-2.8-2.8-2.8z"/>
		<circle cx="32.3" cy="32" r="2.8"/>
		<circle cx="43.3" cy="32" r="2.8"/>
	</g>
</svg>
	);
};

export default Pagination;