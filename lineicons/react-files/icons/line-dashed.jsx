import React from 'react';

function LineDashed(props) {
	const title = props.title || "line dashed";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 30.3H50.5c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8H61c1 0 1.8-.8 1.8-1.8 0-1.1-.8-1.8-1.8-1.8z"/>
		<path d="M37.3 30.3H26.7c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h10.5c1 0 1.8-.8 1.8-1.8 0-1.1-.8-1.8-1.7-1.8z"/>
		<path d="M13.5 30.3H3c-1 0-1.8.8-1.8 1.8S2 33.9 3 33.9h10.5c1 0 1.8-.8 1.8-1.8 0-1.1-.8-1.8-1.8-1.8z"/>
	</g>
</svg>
	);
};

export default LineDashed;