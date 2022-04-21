import React from 'react';

function Direction(props) {
	const title = props.title || "direction";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58.8 17.3l-5-6.4c-.9-1.1-2.2-1.8-3.6-1.8h-24V3c0-1-.8-1.8-1.8-1.8S22.7 2 22.7 3v6.2h-14c-2.5 0-4.5 2-4.5 4.5v12.9c0 2.5 2 4.5 4.5 4.5h13.9V61c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V31.1h24.1c1.4 0 2.7-.6 3.6-1.8l5-6.4c1.2-1.6 1.2-3.9-.1-5.6zm-2.7 3.5l-5 6.4c-.2.3-.5.4-.8.4H8.7c-.6 0-1-.5-1-1V13.7c0-.6.5-1 1-1h41.5c.3 0 .6.1.8.4l5 6.4c.4.4.4.9.1 1.3z"/>
	</g>
</svg>
	);
};

export default Direction;