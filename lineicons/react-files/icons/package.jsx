import React from 'react';

function Package(props) {
	const title = props.title || "package";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 21.1L57.8 6.6c-.8-2.5-3.1-4.2-5.7-4.2H12.4c-2.5 0-4.8 1.6-5.6 4L1.6 21c-.2.6-.3 1.1-.3 1.7v31.4c0 4.1 3.3 7.4 7.4 7.4h46.7c4.1 0 7.4-3.3 7.4-7.4V22.7c0-.5-.1-1-.3-1.6zm-8-13.4l4.1 12.8H33.8V5.9h18.4c1 0 2 .7 2.3 1.8zm-44.4-.1c.4-1 1.3-1.7 2.4-1.7h17.8v14.5H5.5l4.6-12.8zm45.2 50.5H8.7c-2.2 0-3.9-1.8-3.9-3.9V23.9h54.5v30.2c0 2.2-1.8 4-4 4z"/>
	</g>
</svg>
	);
};

export default Package;