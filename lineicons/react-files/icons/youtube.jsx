import React from 'react';

function Youtube(props) {
	const title = props.title || "youtube";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61.7 17.1c-.7-2.7-2.8-4.8-5.5-5.5-4.8-1.3-24.2-1.3-24.2-1.3s-19.4 0-24.2 1.3c-2.7.7-4.8 2.8-5.5 5.5C1 22 1 32 1 32s0 10.1 1.3 14.9c.7 2.7 2.8 4.8 5.5 5.5 4.8 1.3 24.2 1.3 24.2 1.3s19.4 0 24.2-1.3c2.7-.7 4.8-2.8 5.5-5.5C63 42.1 63 32 63 32s0-10-1.3-14.9zM25.8 41.3V22.7L41.9 32l-16.1 9.3z"/>
	</g>
</svg>
	);
};

export default Youtube;