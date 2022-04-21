import React from 'react';

function Volume(props) {
	const title = props.title || "volume";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M55.9 2c-1.9-1.1-4.2-1-6 .2L32.7 13c-.4.2-.8.4-1.3.4H10.9c-3.3 0-6 2.7-6 6v25.3c0 3.3 2.7 6 6 6h20.4c.5 0 .9.1 1.3.4l17.2 10.8c1 .6 2.1.9 3.2.9 1 0 2-.3 2.9-.8 1.9-1.1 3.1-3 3.1-5.2V7.2C59 5 57.9 3.1 55.9 2zm-.4 54.8c0 .9-.5 1.7-1.3 2.2-.8.4-1.7.4-2.5-.1L34.5 48.1c-.9-.6-2-.9-3.2-.9H10.9c-1.4 0-2.5-1.1-2.5-2.5V19.3c0-1.4 1.1-2.5 2.5-2.5h20.4c1.1 0 2.2-.3 3.2-.9L51.7 5.1c.8-.5 1.7-.5 2.5-.1s1.3 1.3 1.3 2.2v49.6z"/>
	</g>
</svg>
	);
};

export default Volume;