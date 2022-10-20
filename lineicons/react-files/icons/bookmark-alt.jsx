import React from 'react';

function BookmarkAlt(props) {
	const title = props.title || "bookmark alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M57.3 22.3H28.5v-7.8c0-3-2.4-5.4-5.4-5.4h-8.5c-3 0-5.4 2.4-5.4 5.4v7.8H6.7c-3 0-5.4 2.4-5.4 5.4v21.7c0 3 2.4 5.4 5.4 5.4h50.7c3 0 5.4-2.4 5.4-5.4V27.7c0-2.9-2.5-5.4-5.5-5.4zm-44.6-7.7c0-1 .9-1.9 1.9-1.9h8.5c1 0 1.9.9 1.9 1.9V31l-3.8-3.1-.2-.1c-1.3-.9-3-.9-4.3 0l-4 3.2V14.6zm46.6 34.8c0 1-.9 1.9-1.9 1.9H6.7c-1 0-1.9-.9-1.9-1.9V27.7c0-1 .9-1.9 1.9-1.9h2.5v6c0 1.2.7 2.2 1.7 2.8.4.2.9.3 1.3.3.7 0 1.3-.2 1.9-.7l4.6-3.7h.2l4.6 3.6c.9.7 2.2.9 3.2.4 1.1-.5 1.7-1.6 1.7-2.8v-6h28.9c1 0 1.9.9 1.9 1.9v21.8z"/>
	</g>
</svg>
	);
};

export default BookmarkAlt;