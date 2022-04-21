import React from 'react';

function Crop(props) {
	const title = props.title || "crop";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58.2 54h-3.5V9.2l4.5-5.1c.6-.7.6-1.8-.1-2.5-.7-.6-1.8-.6-2.5.1l-4.5 5H12.8V3.4c0-1-.8-1.8-1.8-1.8s-1.7.8-1.7 1.8v3.5H5.8c-1-.1-1.8.7-1.8 1.7s.8 1.8 1.8 1.8h3.5V54H5.8c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h3.5V61c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-3.5h38.5V61c0 1 .8 1.8 1.8 1.8S55 62 55 61v-3.5h3.5c1 0 1.8-.8 1.8-1.8S59.2 54 58.2 54zM12.8 10.3h36.3L12.8 51.2V10.3zM14.9 54l36.3-40.8V54H14.9z"/>
	</g>
</svg>
	);
};

export default Crop;