import React from 'react';

function ArrowUpCircle(props) {
	const title = props.title || "arrow up circle";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M35.5 15.1c-1.9-1.9-5-1.9-6.9 0L23 20.6c-.7.7-.7 1.8 0 2.5s1.8.7 2.5 0l4.9-4.8v29.5c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V18.3l4.9 4.8c.3.3.8.5 1.2.5.5 0 .9-.2 1.2-.5.7-.7.7-1.8 0-2.5l-5.8-5.5z"/>
		<path d="M32 1.2C15 1.2 1.3 15 1.3 32S15 62.8 32 62.8 62.8 49 62.8 32 49 1.2 32 1.2zm0 58.1C17 59.3 4.8 47 4.8 32S17 4.7 32 4.7 59.3 17 59.3 32 47 59.3 32 59.3z"/>
	</g>
</svg>
	);
};

export default ArrowUpCircle;