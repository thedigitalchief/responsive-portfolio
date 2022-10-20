import React from 'react';

function Select(props) {
	const title = props.title || "select";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M53.8 52l6.6-3.8-19.6-7.4c-.4-.2-.8.2-.6.6L47.5 61l3.8-6.5 4 4c.3.3.8.5 1.2.5s.9-.2 1.2-.5c.7-.7.7-1.8 0-2.5l-3.9-4z"/>
		<path d="M35.5 45.4h4v3.5h-4z"/>
		<path d="M20.6 45.4h7.5v3.5h-7.5z"/>
		<path d="M9.2 45.4h4v3.5h-4z"/>
		<path d="M5.4 44.4H1.9v2.8c0 1 .8 1.8 1.8 1.8h2.8v-3.5h-1v-1.1z"/>
		<path d="M1.9 34.9h3.5v4H1.9z"/>
		<path d="M1.9 20h3.5v7.5H1.9z"/>
		<path d="M1.9 8.5h3.5v4H1.9z"/>
		<path d="M1.9 3v2.8h3.5v-1h1V1.3H3.6c-.9 0-1.7.7-1.7 1.7z"/>
		<path d="M11.9 1.3h4v3.5h-4z"/>
		<path d="M23.4 1.3h7.5v3.5h-7.5z"/>
		<path d="M38.3 1.3h4v3.5h-4z"/>
		<path d="M46.1 5.8h3.5V3c0-1-.8-1.8-1.8-1.8H45v3.5h1v1.1z"/>
		<path d="M46.1 11.3h3.5v4h-3.5z"/>
		<path d="M46.1 22.7h3.5v7.5h-3.5z"/>
		<path d="M46.1 37.6h3.5v4h-3.5z"/>
	</g>
</svg>
	);
};

export default Select;