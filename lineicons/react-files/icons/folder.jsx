import React from 'react';

function Folder(props) {
	const title = props.title || "folder";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M60.5 20.8V15c0-2.3-1.9-4.2-4.2-4.2H30.8l-.6-1.6c-.4-.9-1.3-1.5-2.2-1.5H8.2C5.3 7.8 3 10.2 3 13v38c0 2.9 2.3 5.2 5.2 5.2h47.6c2.9 0 5.2-2.3 5.2-5.2V22.3c0-.5-.2-1-.5-1.5zm-4.2-6.4c.4 0 .7.3.7.7v4.8H34.4l-2.2-5.5h24.1zM57.5 51c0 .9-.8 1.7-1.7 1.7H8.2c-.9 0-1.7-.8-1.7-1.7V13c0-.9.8-1.7 1.7-1.7h19l4 9.9c.5 1.3 1.8 2.2 3.2 2.2h23.1V51z"/>
	</g>
</svg>
	);
};

export default Folder;