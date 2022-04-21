import React from 'react';

function DropboxOriginal(props) {
	const title = props.title || "dropbox original";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M1 35.2l15.5 9.9L32 35.2l-15.5-9.8z"/>
		<path d="M16.4 48.5L32 58.4l15.5-9.9L32 38.6z"/>
		<path d="M32 35.2l15.5 9.9L63 35.2l-15.5-9.8z"/>
		<path d="M16.5 5.6L1 15.5l15.5 9.9L32 15.5z"/>
		<path d="M63 15.5L47.5 5.6 32 15.5l15.5 9.9z"/>
	</g>
</svg>
	);
};

export default DropboxOriginal;