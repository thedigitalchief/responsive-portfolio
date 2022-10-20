import React from 'react';

function Angular(props) {
	const title = props.title || "angular";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M26.8 33.7h10.6L32 21l-5.2 12.7zM32 1L3.3 11.3l4.5 38.2L32 63l24.4-13.5 4.4-38.2L32 1zm18 47.2h-6.8l-3.5-9H24.4l-3.7 9H14L32 7.9l18 40.3z"/>
	</g>
</svg>
	);
};

export default Angular;