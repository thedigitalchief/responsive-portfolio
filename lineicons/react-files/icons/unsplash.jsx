import React from 'react';

function Unsplash(props) {
	const title = props.title || "unsplash";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M43.6 28.5H63V63H1V28.5h19.4v17.2h23V28.5z"/>
		<path d="M43.6 1H20.4v17.3h23V1z"/>
	</g>
</svg>
	);
};

export default Unsplash;