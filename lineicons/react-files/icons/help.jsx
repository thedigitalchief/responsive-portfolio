import React from 'react';

function Help(props) {
	const title = props.title || "help";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M45.1 13.5C44.5 7.3 39.4 2.2 33 1.3 27.2.7 21.7 3.6 19 8.7c-.4.9-.1 1.9.7 2.4.9.4 1.9.1 2.4-.7 2-3.9 6.1-6 10.5-5.6 4.8.6 8.6 4.4 9.1 9.1.5 4.4-1.8 8.5-5.8 10.4-3.8 1.8-6.3 5.9-6.3 10.2v13.8c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V34.5c0-3 1.7-5.8 4.3-7.1 5.2-2.4 8.3-8.1 7.6-13.9z"/>
		<path d="M31.3 55.9c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5c.1-1.3-1.1-2.5-2.5-2.5z"/>
	</g>
</svg>
	);
};

export default Help;