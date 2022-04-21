import React from 'react';

function ArrowsVertical(props) {
	const title = props.title || "arrows vertical";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 62.8c-1.2 0-2.5-.4-3.5-1.3l-8.1-6.8c-.7-.6-.8-1.7-.2-2.5s1.7-.8 2.5-.2l7.6 6.4V5.6L22.6 12c-.7.6-1.8.5-2.5-.2-.6-.7-.5-1.8.2-2.5l8.1-6.8c2-1.7 5-1.7 7 0l8.1 6.8c.7.6.8 1.7.2 2.5-.6.7-1.7.8-2.5.2l-7.6-6.4v52.8l7.6-6.4c.7-.6 1.8-.5 2.5.2s.5 1.8-.2 2.5l-8.1 6.8c-.9.8-2.2 1.3-3.4 1.3z"/>
	</g>
</svg>
	);
};

export default ArrowsVertical;