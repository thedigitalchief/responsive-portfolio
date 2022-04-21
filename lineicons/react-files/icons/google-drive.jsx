import React from 'react';

function GoogleDrive(props) {
	const title = props.title || "google drive";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M42.1 39.1L22.3 4.9h19.4l19.9 34.2H42.1zm-16.7 2.8l-9.7 17.2h37.6L63 41.9H25.4zM19.7 9.1L1 41.9l9.7 17.2 18.9-32.8-9.9-17.2z"/>
	</g>
</svg>
	);
};

export default GoogleDrive;