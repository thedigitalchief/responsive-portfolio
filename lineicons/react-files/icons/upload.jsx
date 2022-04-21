import React from 'react';

function Upload(props) {
	const title = props.title || "upload";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 43.4c-1 0-1.8.8-1.8 1.8v14.1H4.7V45.1c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v15c0 1.5 1.4 2.6 3.1 2.6h55.3c1.7 0 3.1-1.2 3.1-2.6v-15c.2-1-.6-1.7-1.6-1.7z"/>
		<path d="M23.5 13l6.7-6.9V45c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V6l6.7 6.9c.3.4.8.5 1.3.5.4 0 .9-.2 1.2-.5.7-.7.7-1.8 0-2.5l-7.7-7.9c-.9-.9-2-1.4-3.2-1.4-1.2 0-2.4.5-3.2 1.4L21 10.6c-.7.7-.7 1.8 0 2.5.8.6 1.9.6 2.5-.1z"/>
	</g>
</svg>
	);
};

export default Upload;