import React from 'react';

function Highlight(props) {
	const title = props.title || "highlight";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M35.4 1.3h-6.9c-3.7 0-6.6 3-6.6 6.6v35.5c0 1.2 1 2.1 2.1 2.1h.6v5.4c0 1.1.4 2.2 1.1 3v6.5c0 .8.4 1.5 1 2 .4.3 1 .5 1.5.5.2 0 .5 0 .7-.1l7.3-2.2c1.1-.3 1.9-1.4 1.9-2.6v-4.1c.7-.8 1.1-1.8 1.1-2.9v-5.4h.6c1.2 0 2.2-1 2.2-2.2V7.9c.1-3.7-2.9-6.6-6.6-6.6zm-10 6.6c0-1.7 1.4-3.1 3.1-3.1h6.9c1.7 0 3.1 1.4 3.1 3.1V42H25.4V7.9zm3.9 51v-3.5h5.4v1.9l-5.4 1.6zm6.5-8c0 .6-.5 1-1 1h-5.6c-.6 0-1-.5-1-1v-5.4h7.6v5.4z"/>
	</g>
</svg>
	);
};

export default Highlight;