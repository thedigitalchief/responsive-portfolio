import React from 'react';

function Bolt(props) {
	const title = props.title || "bolt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M25.3 62.8c-.3 0-.5-.1-.7-.2-.7-.3-1.1-1.1-1-1.9L27.7 39H7.5c-.7 0-1.3-.4-1.6-1-.3-.6-.2-1.3.2-1.8L31.7 2c.5-.6 1.2-.9 2-.6.7.2 1.2.9 1.2 1.7v18.5h21.7c.7 0 1.3.4 1.6 1 .3.6.2 1.3-.2 1.9L26.7 62.1c-.4.4-.9.7-1.4.7zM11 35.5h18.8c.5 0 1 .2 1.3.6.3.4.5.9.4 1.4l-3.2 17.1L52.8 25H33.1c-1 0-1.8-.8-1.8-1.8v-15L11 35.5z"/>
	</g>
</svg>
	);
};

export default Bolt;