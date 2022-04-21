import React from 'react';

function Bubble(props) {
	const title = props.title || "bubble";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M6.8 56c-1 0-1.9-.3-2.8-.8-1.7-1-2.8-2.8-2.8-4.8V13.6C1.3 10.5 3.7 8 6.8 8h50.4c3.1 0 5.6 2.5 5.6 5.5v29.1c0 3.1-2.5 5.5-5.6 5.5H22.5c-.4 0-.7.1-1 .3L9.6 55.2c-.9.5-1.9.8-2.8.8zm0-44.5c-1.1 0-2.1.9-2.1 2v36.9c0 1 .7 1.6 1 1.8.6.4 1.4.4 2.1 0l11.9-6.8c.8-.5 1.8-.7 2.8-.7h34.7c1.1 0 2.1-.9 2.1-2V13.6c0-1.1-.9-2-2.1-2H6.8z"/>
	</g>
</svg>
	);
};

export default Bubble;