import React from 'react';

function Trello(props) {
	const title = props.title || "trello";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M55.4 1H8.8C4.5 1 1 4.5 1 8.8v46.5C1 59.5 4.5 63 8.8 63h46.5c4.2 0 7.8-3.5 7.8-7.8V8.8C63 4.5 59.6 1 55.4 1zM28.3 47.9c0 2-1.7 3.7-3.7 3.7H13.1c-2 0-3.7-1.7-3.8-3.7V12.7C9.3 10.7 11 9 13 9h11.4c2 0 3.7 1.7 3.7 3.7l.2 35.2zM55 32.4c0 2-1.7 3.7-3.7 3.7H40c-2 0-3.7-1.7-3.7-3.7V12.7c0-2 1.7-3.7 3.7-3.7h11.3c2 0 3.7 1.7 3.7 3.7v19.7z"/>
	</g>
</svg>
	);
};

export default Trello;