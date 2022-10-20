import React from 'react';

function Sketch(props) {
	const title = props.title || "sketch";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M3.3 20.3L1 23.4h11.3l.8-16.3-9.8 13.2zM49.5 5.6L33.4 4l17 18.5-.9-16.9zM14 27.2l-1.4-2.7H1.1l28.2 32.8L14 27.2zm.2-3.8h35.6L39.6 12.3 32 4 14.2 23.4zm37.2 1.1L34.7 57.4l28.2-32.8H51.4v-.1zM52 8.6L50.9 7l.1 2.2.7 14.2H63L52 8.6zm-37.9 3.1l-.6 10.7L30.6 4 14.5 5.6l-.4 6.1zm36.1 12.8H13.8L19.2 35 32 60l18.2-35.5z"/>
	</g>
</svg>
	);
};

export default Sketch;