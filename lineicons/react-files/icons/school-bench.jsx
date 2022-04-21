import React from 'react';

function SchoolBench(props) {
	const title = props.title || "school bench";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32.6 26.4l-29-10.5c-.9-.3-1.9.1-2.2 1-.3.9.1 1.9 1 2.2l4.1 1.5v25.9c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V21.9l15 5.4v19.1c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V28.6l2.9 1.1c.2.1.4.1.6.1.7 0 1.4-.4 1.6-1.2.2-.9-.3-1.9-1.2-2.2z"/>
		<path d="M61 15.8c-1 0-1.8.8-1.8 1.8v16.7H48c-2.5 0-4.6 2-4.6 4.6v7.7c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-7.7c0-.6.5-1.1 1.1-1.1h11.3v8.8c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V17.5c-.2-1-1-1.7-2-1.7z"/>
	</g>
</svg>
	);
};

export default SchoolBench;