import React from 'react';

function Eraser(props) {
	const title = props.title || "eraser";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M60.2 59.3h-30c.2-.2.4-.3.6-.5l30.3-30.3c2.2-2.2 2.2-5.9 0-8.1L43.7 2.9c-2.2-2.2-5.9-2.2-8.1 0L5.2 33.2c-2.6 2.6-4 6-4 9.7s1.4 7.1 4 9.7l6.2 6.2c2.7 2.7 6.2 4 9.7 4H60.2c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7zM38 5.4c.4-.4 1-.7 1.6-.7.6 0 1.2.2 1.6.7l17.5 17.5c.9.9.9 2.3 0 3.2l-23 23L15 28.3 38 5.4zM7.7 50.1c-1.9-1.9-3-4.5-3-7.2s1.1-5.3 3-7.2l4.9-4.9 20.6 20.6-4.9 4.9c-4 4-10.5 4-14.4 0l-6.2-6.2z"/>
	</g>
</svg>
	);
};

export default Eraser;