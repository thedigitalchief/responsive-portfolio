import React from 'react';

function Funnel(props) {
	const title = props.title || "funnel";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M25.2 62.7c-.5 0-1-.1-1.5-.4-.8-.5-1.3-1.3-1.3-2.3V26L4.8 5.6c-.7-.8-.8-2-.3-2.9.4-.9 1.4-1.5 2.5-1.5h50c1.1 0 2.1.7 2.6 1.7.4 1 .2 2.1-.5 2.8L41.7 25.8v25.6c0 .5-.2 1.3-1 2l-.3.2-13.9 8.7c-.4.3-.9.4-1.3.4zm.1-38.8c.4.5.6 1.2.6 1.7v33l12.3-7.8V25.7c0-.4 0-1.2.7-1.9l16.4-19H8.7l16.6 19.1zm-2.7 2.3zM56.5 3.4c-.1 0-.1 0 0 0z"/>
	</g>
</svg>
	);
};

export default Funnel;