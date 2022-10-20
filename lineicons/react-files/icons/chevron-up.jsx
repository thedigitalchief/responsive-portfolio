import React from 'react';

function ChevronUp(props) {
	const title = props.title || "chevron up";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 46.8c-.4 0-.9-.2-1.2-.5L33 21.1c-.5-.5-1.4-.5-2 0L4.2 46.3c-.7.7-1.8.6-2.5-.1s-.6-1.8.1-2.5l26.8-25.2c1.9-1.7 4.9-1.7 6.7 0l26.8 25.2c.7.7.7 1.8.1 2.5-.3.4-.7.6-1.2.6z"/>
	</g>
</svg>
	);
};

export default ChevronUp;