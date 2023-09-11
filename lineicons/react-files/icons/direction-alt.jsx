import React from 'react';

function DirectionAlt(props) {
	const title = props.title || "direction alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M46.3 30.4h-10v-7.2h5c.9 0 1.7-.4 2.3-1l3.5-3.9c1.1-1.2 1.1-3 0-4.2l-3.5-3.9c-.6-.7-1.4-1-2.3-1h-5V3c0-1-.8-1.8-1.8-1.8S32.9 2 32.9 3v6.2H17.7c-1.7 0-3.1 1.4-3.1 3.1v7.8c0 1.7 1.4 3.1 3.1 3.1h15.2v7.2H22.6c-.9 0-1.7.4-2.3 1l-3.5 3.9c-1.1 1.2-1.1 3 0 4.2l3.5 3.9c.6.7 1.4 1 2.3 1h10.2V61c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V44.5h10c1.7 0 3.1-1.4 3.1-3.1v-7.8c0-1.8-1.4-3.2-3.2-3.2zM18 12.7h23.2l3.2 3.5-3.2 3.5H18v-7zM46 41H22.8l-3.2-3.5 3.2-3.5H46v7z"/>
	</g>
</svg>
	);
};

export default DirectionAlt;