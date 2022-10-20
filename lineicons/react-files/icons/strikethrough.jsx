import React from 'react';

function Strikethrough(props) {
	const title = props.title || "strikethrough";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 19.7H33.8v-15h15.7c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8H14.6c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h15.6v15H3c-1 0-1.8.8-1.8 1.8S2 23.2 3 23.2h27.3V61c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V23.2H61c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7z"/>
	</g>
</svg>
	);
};

export default Strikethrough;