import React from 'react';

function Capsule(props) {
	const title = props.title || "capsule";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M20.5 62.7c-4.9 0-9.9-1.9-13.6-5.6-7.5-7.5-7.5-19.7 0-27.2l23-23c7.5-7.5 19.7-7.5 27.2 0s7.5 19.7 0 27.2l-23 23c-3.7 3.8-8.7 5.6-13.6 5.6zM9.4 54.6c6.1 6.1 16.1 6.1 22.3 0L42 44.3 19.6 22.1 9.4 32.4c-6.2 6.1-6.2 16.1 0 22.2zm12.7-35l22.3 22.3 10.3-10.3c6.1-6.1 6.1-16.1 0-22.3-6.1-6.1-16.1-6.1-22.3 0L22.1 19.6z"/>
	</g>
</svg>
	);
};

export default Capsule;