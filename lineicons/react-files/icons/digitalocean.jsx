import React from 'react';

function Digitalocean(props) {
	const title = props.title || "digitalocean";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61.5 22.1C58.6 12.8 51.2 5.5 41.9 2.5 20.6-4.1 1 11.7 1 32h12c0-12.7 12.7-22.6 26.1-17.8C44 16 48 20 49.8 24.9 54.6 38.3 44.7 51 32 51V39H20v12h12v12c20.3 0 36.1-19.6 29.5-40.9z"/>
		<path d="M10.9 43.3H3.1V51h7.8v9.2H20V51h-9.1z"/>
	</g>
</svg>
	);
};

export default Digitalocean;