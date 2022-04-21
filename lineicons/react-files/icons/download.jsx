import React from 'react';

function Download(props) {
	const title = props.title || "download";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 46.1c-1 0-1.8.8-1.8 1.8v11.4H4.7V47.8c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v12.4c0 1.4 1.4 2.6 3.1 2.6h55.3c1.7 0 3.1-1.1 3.1-2.6V47.8c.2-.9-.6-1.7-1.6-1.7z"/>
		<path d="M28.9 43.2c.9.8 2 1.3 3.1 1.3s2.2-.4 3-1.2l7.7-7.4c.7-.7.7-1.8 0-2.5s-1.8-.7-2.5 0l-6.5 6.3V3c0-1-.8-1.8-1.8-1.8S30.1 2 30.1 3v36.6l-6.5-6.4c-.7-.7-1.8-.7-2.5 0s-.7 1.8 0 2.5l7.8 7.5z"/>
	</g>
</svg>
	);
};

export default Download;