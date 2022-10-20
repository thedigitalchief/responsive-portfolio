import React from 'react';

function SearchAlt(props) {
	const title = props.title || "search alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.1 57L44.6 42.8c3.2-4.2 5-9.3 5-14.7 0-6.5-2.5-12.5-7.1-17.1-9.4-9.4-24.7-9.4-34.2 0-4.5 4.5-7 10.6-7 17 0 6.5 2.5 12.5 7.1 17.1 4.7 4.7 10.9 7.1 17.1 7.1 6.1 0 12.1-2.3 16.8-6.8L60 59.7c.3.3.7.4 1.1.4.5 0 1-.2 1.4-.6.5-.8.4-1.9-.4-2.5zM10.8 42.7c-3.9-3.9-6-9.1-6-14.7s2.1-10.7 6.1-14.6c4-4 9.3-6 14.6-6 5.3 0 10.6 2 14.6 6 3.9 3.9 6.1 9.1 6.1 14.6S43.9 38.8 40 42.7c-8 8-21.1 8-29.2 0z"/>
	</g>
</svg>
	);
};

export default SearchAlt;