import React from 'react';

function Flag(props) {
	const title = props.title || "flag";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M52.1 10.4c-.7-.8-1.6-1.2-2.7-1.2H13.5V3c0-1-.8-1.8-1.8-1.8S10 2 10 3v58c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V36.4h32.8c1.7 0 3.2-1.2 3.4-2.9L52.9 13c.1-.9-.1-1.9-.8-2.6zm-5.8 22.5H13.5V12.7h35.9l-3.1 20.2z"/>
	</g>
</svg>
	);
};

export default Flag;