import React from 'react';

function Medium(props) {
	const title = props.title || "medium";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M18.5 14.4C28.2 14.4 36 22.3 36 32s-7.9 17.6-17.5 17.6S1 41.7 1 32s7.9-17.6 17.5-17.6zm27.9 1c4.8 0 8.7 7.5 8.7 16.6 0 9.2-3.9 16.6-8.7 16.6s-8.7-7.5-8.7-16.6 3.9-16.6 8.7-16.6zm13.5 1.8c1.7 0 3.1 6.6 3.1 14.8s-1.4 14.8-3.1 14.8-3.1-6.6-3.1-14.8 1.4-14.8 3.1-14.8z"/>
	</g>
</svg>
	);
};

export default Medium;