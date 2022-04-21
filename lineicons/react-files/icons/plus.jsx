import React from 'react';

function Plus(props) {
	const title = props.title || "plus";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 30.3H33.8V3c0-1-.8-1.8-1.8-1.8S30.3 2 30.3 3v27.3H3c-1 0-1.8.8-1.8 1.8S2 33.8 3 33.8h27.3V61c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V33.8H61c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7z"/>
	</g>
</svg>
	);
};

export default Plus;