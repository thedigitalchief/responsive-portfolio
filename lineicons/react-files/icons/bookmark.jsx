import React from 'react';

function Bookmark(props) {
	const title = props.title || "bookmark";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M16.2 62.8c-.6 0-1.2-.1-1.8-.4-1.6-.7-2.6-2.3-2.6-4v-51c0-3.3 2.7-6.1 6.1-6.1h28.3c3.3 0 6.1 2.7 6.1 6.1v50.9c0 1.7-1 3.3-2.6 4-1.6.7-3.4.4-4.7-.7l-11.4-10c-.9-.6-2.1-.6-3 0l-11.5 10c-.8.8-1.9 1.2-2.9 1.2zm1.7-58c-1.4 0-2.6 1.1-2.6 2.6v51c0 .5.4.7.5.8.2.1.6.2 1-.1l11.6-10.2c2.2-1.7 5.2-1.7 7.4 0l.2.1 11.2 9.9c.4.3.8.2 1 .1.2-.1.5-.3.5-.8V7.3c0-1.4-1.1-2.6-2.6-2.6H17.9z"/>
	</g>
</svg>
	);
};

export default Bookmark;