import React from 'react';

function Bricks(props) {
	const title = props.title || "bricks";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58 30.5h-4.1v-7.3c0-3-2.5-5.5-5.5-5.5H15.6c-3 0-5.5 2.5-5.5 5.5v7.3H6c-2.5 0-4.5 2-4.5 4.5v6.8c0 2.5 2 4.5 4.5 4.5h52c2.5 0 4.5-2 4.5-4.5V35c0-2.5-2-4.5-4.5-4.5zm-7.1-7.3v7.3H33.5v-9.8h14.9c1.4 0 2.5 1.2 2.5 2.5zM41 33.5v9.8H23v-9.8h18zM13.1 23.2c0-1.4 1.1-2.5 2.5-2.5h14.9v9.8H13.1v-7.3zM4.5 41.8V35c0-.8.7-1.5 1.5-1.5h14v9.8H6c-.8 0-1.5-.7-1.5-1.5zm55 0c0 .8-.7 1.5-1.5 1.5H44v-9.8h14c.8 0 1.5.7 1.5 1.5v6.8z"/>
	</g>
</svg>
	);
};

export default Bricks;