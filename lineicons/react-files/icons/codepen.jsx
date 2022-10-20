import React from 'react';

function Codepen(props) {
	const title = props.title || "codepen";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62 20.4l-28.5-19c-1-.6-2-.6-3 0l-28.4 19c-.7.4-1.1 1.4-1.1 2.1v18.9c0 .8.4 1.7 1.1 2.3l28.4 18.9c1 .6 2 .6 3 0l28.4-18.9c.7-.4 1.1-1.4 1.1-2.3V22.5c.1-.8-.3-1.7-1-2.1zM34.7 8.6l20.9 14-9.5 6.2L34.6 21c.1 0 .1-12.4.1-12.4zm-5.3 0V21l-11.6 7.8-9.3-6.2 20.9-14zm-23 18.9L13 32l-6.6 4.5v-9zm23 27.9l-20.9-14 9.3-6.2L29.4 43v12.4zm2.7-17L22.6 32l9.5-6.4 9.5 6.4-9.5 6.4zm2.6 17V43l11.6-7.8 9.3 6.2-20.9 14zm23-18.9L51.1 32l6.6-4.5v9z"/>
	</g>
</svg>
	);
};

export default Codepen;