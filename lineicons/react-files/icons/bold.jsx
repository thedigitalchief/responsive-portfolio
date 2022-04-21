import React from 'react';

function Bold(props) {
	const title = props.title || "bold";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M42.8 29.3c4.9-1.8 7.8-6.3 7.8-12.3 0-4.6-1.4-8.6-4.9-11.3C42.6 2.4 38.3 1 33.2 1H11.4C9.9 1 8.8 2.1 8.8 3.6v56.7c0 1.5 1.1 2.6 2.6 2.6h25c5.4 0 10-1.8 13.5-5.4 3.5-3.5 5.4-7.8 5.4-13.2-.1-7.5-4.7-13.5-12.5-15zM22.3 12.9h8.8c4 0 6.8 2.8 6.8 6.3s-2.9 6.5-6.8 6.5h-8.8V12.9zm11.6 38H22.3V36.4H34c4.6 0 8.1 2.8 8.1 7.1s-3.5 7.4-8.2 7.4z"/>
	</g>
</svg>
	);
};

export default Bold;