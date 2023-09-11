import React from 'react';

function Layout(props) {
	const title = props.title || "layout";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58 1.3H6C3.4 1.3 1.3 3.4 1.3 6v52c0 2.6 2.1 4.8 4.8 4.8h52c2.6 0 4.8-2.1 4.8-4.8V6c-.1-2.6-2.3-4.7-4.9-4.7zM6 4.8h52c.7 0 1.3.6 1.3 1.3v14.3H4.8V6c0-.7.5-1.2 1.2-1.2zm22.8 19h30.5v16.3H28.8V23.8zM4.8 58V23.8h20.5v35.4H6c-.7.1-1.2-.5-1.2-1.2zM58 59.3H28.8V43.7h30.5V58c0 .7-.6 1.3-1.3 1.3z"/>
	</g>
</svg>
	);
};

export default Layout;