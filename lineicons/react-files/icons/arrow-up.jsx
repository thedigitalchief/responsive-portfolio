import React from 'react';

function ArrowUp(props) {
	const title = props.title || "arrow up";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M43.7 9.4l-8.2-6.9c-2-1.7-5-1.7-7 0l-8.2 6.9c-.7.6-.8 1.7-.2 2.5.6.7 1.7.8 2.5.2l7.7-6.5V61c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V5.6l7.7 6.5c.3.3.7.4 1.1.4.5 0 1-.2 1.3-.6.5-.8.4-1.9-.3-2.5z"/>
	</g>
</svg>
	);
};

export default ArrowUp;