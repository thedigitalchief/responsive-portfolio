import React from 'react';

function Mobile(props) {
	const title = props.title || "mobile";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 48.3c-2 0-3.5 1.6-3.5 3.5 0 2 1.6 3.5 3.5 3.5s3.5-1.6 3.5-3.5-1.5-3.5-3.5-3.5z"/>
		<path d="M35 9.3h-6c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h6c1 0 1.8-.8 1.8-1.8S36 9.3 35 9.3z"/>
		<path d="M45 1.3H19c-3.2 0-5.8 2.6-5.8 5.8v50c0 3.2 2.6 5.8 5.8 5.8h26c3.2 0 5.8-2.6 5.8-5.8V7c0-3.2-2.6-5.7-5.8-5.7zM47.3 57c0 1.2-1 2.3-2.3 2.3H19c-1.2 0-2.3-1-2.3-2.3V7c0-1.2 1-2.3 2.3-2.3h26c1.2 0 2.3 1 2.3 2.3v50z"/>
	</g>
</svg>
	);
};

export default Mobile;