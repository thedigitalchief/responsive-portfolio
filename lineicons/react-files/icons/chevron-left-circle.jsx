import React from 'react';

function ChevronLeftCircle(props) {
	const title = props.title || "chevron left circle";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M28.6 32l10.1-14.9c.5-.8.3-1.9-.5-2.4s-1.9-.3-2.4.5L25.4 30.6c-.6.8-.6 2.1 0 2.9l10.4 15.3c.3.5.9.8 1.4.8.3 0 .7-.1 1-.3.8-.5 1-1.6.5-2.4L28.6 32z"/>
		<path d="M32 1.3C15 1.3 1.3 15 1.3 32S15 62.8 32 62.8 62.8 49 62.8 32 49 1.3 32 1.3zm0 58C17 59.3 4.8 47 4.8 32S17 4.8 32 4.8 59.3 17 59.3 32 47 59.3 32 59.3z"/>
	</g>
</svg>
	);
};

export default ChevronLeftCircle;