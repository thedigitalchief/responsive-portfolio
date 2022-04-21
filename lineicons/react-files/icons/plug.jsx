import React from 'react';

function Plug(props) {
	const title = props.title || "plug";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M45.8 11.8h-4.2V3c0-1-.8-1.8-1.8-1.8S38.2 2 38.2 3v8.8H25.8V3c0-1-.8-1.8-1.8-1.8S22.3 2 22.3 3v8.8h-4.2c-2.1 0-3.8 1.7-3.8 3.8v13.3c0 7.1 5.8 12.8 12.8 12.8h3V61c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V41.7h3c7.1 0 12.8-5.8 12.8-12.8V15.5c.1-2-1.6-3.7-3.7-3.7zm.3 17c0 5.1-4.2 9.3-9.3 9.3h-9.5c-5.1 0-9.3-4.2-9.3-9.3V15.5c0-.1.1-.3.3-.3h27.6c.1 0 .3.1.3.3v13.3z"/>
	</g>
</svg>
	);
};

export default Plug;