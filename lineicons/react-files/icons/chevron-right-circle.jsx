import React from 'react';

function ChevronRightCircle(props) {
	const title = props.title || "chevron right circle";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M28.2 15.2c-.5-.8-1.6-1-2.4-.5-.8.5-1 1.6-.5 2.4L35.4 32 25.3 46.8c-.5.8-.3 1.9.5 2.4.3.2.6.3 1 .3.6 0 1.1-.3 1.4-.8l10.4-15.4c.6-.8.6-2.1 0-2.9L28.2 15.2z"/>
		<path d="M32 1.3C15 1.3 1.3 15 1.3 32S15 62.8 32 62.8 62.8 49 62.8 32 49 1.3 32 1.3zm0 58C17 59.3 4.8 47 4.8 32S17 4.8 32 4.8 59.3 17 59.3 32 47 59.3 32 59.3z"/>
	</g>
</svg>
	);
};

export default ChevronRightCircle;