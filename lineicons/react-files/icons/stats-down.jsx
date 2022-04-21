import React from 'react';

function StatsDown(props) {
	const title = props.title || "stats down";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 59.3H6.2c-.8 0-1.4-.6-1.4-1.4V3C4.8 2 4 1.3 3 1.3S1.3 2 1.3 3v54.8c0 2.7 2.2 4.9 4.9 4.9H61c1 0 1.8-.8 1.8-1.8s-.8-1.6-1.8-1.6z"/>
		<path d="M61 29.1c-1 0-1.8.8-1.8 1.8v9l-7.9-6.5c-.3-.3-.7-.4-1.1-.4H36.7l-7.6-10c-.3-.4-.8-.7-1.4-.7h-13c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h12.2l7.5 9.9c.3.4.8.7 1.4.7h13.8l7.1 5.9h-8.9c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h11.9c1.7 0 3-1.4 3-3V30.8c.1-.9-.7-1.7-1.7-1.7z"/>
	</g>
</svg>
	);
};

export default StatsDown;