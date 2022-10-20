import React from 'react';

function AngleDoubleUp(props) {
	const title = props.title || "angle double up";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M4.3 37.2l26.3-24.9c.7-.7 1.9-.7 2.6 0l26.6 24.9c.3.3.8.5 1.2.5.5 0 .9-.2 1.3-.6.7-.7.6-1.8-.1-2.5L35.6 9.7c-2-1.9-5.4-1.9-7.4 0l-26.3 25c-.7.7-.7 1.8-.1 2.5.7.6 1.8.7 2.5 0z"/>
		<path d="M35.5 27.8c-2-1.9-5.4-1.9-7.4 0L1.8 52.7c-.7.7-.7 1.8-.1 2.5.7.7 1.8.7 2.5.1l26.3-24.9c.7-.7 1.9-.7 2.6 0l26.6 24.9c.3.3.8.5 1.2.5.5 0 .9-.2 1.3-.6.7-.7.6-1.8-.1-2.5L35.5 27.8z"/>
	</g>
</svg>
	);
};

export default AngleDoubleUp;