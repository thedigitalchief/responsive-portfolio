import React from 'react';

function StatsUp(props) {
	const title = props.title || "stats up";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 59.3H6.2c-.8 0-1.4-.6-1.4-1.4V3C4.8 2 4 1.3 3 1.3S1.3 2 1.3 3v54.8c0 2.7 2.2 4.9 4.9 4.9H61c1 0 1.8-.8 1.8-1.8s-.8-1.6-1.8-1.6z"/>
		<path d="M59.7 22.3H47.8c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h8.9l-7.1 5.9H35.8c-.5 0-1.1.3-1.4.7l-7.5 9.9H14.7c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h13c.5 0 1.1-.3 1.4-.7l7.5-9.9h13.6c.4 0 .8-.1 1.1-.4l7.9-6.5v9c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V25.4c0-1.7-1.4-3.1-3.1-3.1z"/>
	</g>
</svg>
	);
};

export default StatsUp;