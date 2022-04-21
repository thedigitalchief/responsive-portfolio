import React from 'react';

function Pilcrow(props) {
	const title = props.title || "pilcrow";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M50.4 1.3H28.2c-9 0-16.3 7.3-16.3 16.3 0 8.7 6.9 15.9 15.6 16.2V61c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V4.8H41V61c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V4.8h6.1c1 0 1.8-.8 1.8-1.8s-1.1-1.7-2.1-1.7zm-35 16.2c0-6.8 5.4-12.4 12.1-12.7v25.5c-6.8-.4-12.1-6-12.1-12.8z"/>
	</g>
</svg>
	);
};

export default Pilcrow;