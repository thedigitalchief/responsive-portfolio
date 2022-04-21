import React from 'react';

function Pencil(props) {
	const title = props.title || "pencil";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61.9 12.8c-3.4-3.5-6.8-7.1-10.4-10.5-.6-.6-1.3-1-2.1-1s-1.5.3-2.1.8l-39 38.8c-.5.5-.9 1.2-1.2 1.9L1.4 60.2c-.2.6-.1 1.3.2 1.8.2.3.7.8 1.7.8h.3l17.6-5.9c.7-.2 1.3-.6 1.9-1.2l38.8-38.8c.6-.6.9-1.3.9-2.1-.1-.7-.4-1.5-.9-2zM20.6 53.2c-.1.1-.3.3-.5.3L5.6 58.4 10.4 44c.1-.2.2-.4.3-.5l28.9-28.8 9.8 9.8-28.8 28.7zm31.3-31.3l-9.8-9.8L49.3 5c3.3 3.2 6.6 6.6 9.7 9.8l-7.1 7.1z"/>
	</g>
</svg>
	);
};

export default Pencil;