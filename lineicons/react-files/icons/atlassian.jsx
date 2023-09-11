import React from 'react';

function Atlassian(props) {
	const title = props.title || "atlassian";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M19.3 29.7c-1-1-2.4-1-3 .3L1.2 60.3c-.6 1.1.3 2.7 1.7 2.7H24c.7 0 1.4-.4 1.7-1 4.5-9.5 1.7-23.8-6.4-32.3zM30.5 2c-14.6 23.4-1 42.1 7.9 60 .3.6 1 1 1.7 1h21.1c1.4 0 2.3-1.4 1.7-2.7 0 0-28.3-56.9-29-58.3C33 .7 31.3.7 30.5 2z"/>
	</g>
</svg>
	);
};

export default Atlassian;