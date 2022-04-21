import React from 'react';

function Briefcase(props) {
	const title = props.title || "briefcase";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M56.7 17.3H44c-1-4.4-5.4-7.8-10.6-7.8h-3c-5.3 0-9.7 3.4-10.6 7.8H7c-3.2 0-5.8 2.6-5.8 5.8v25.7c0 3.2 2.6 5.8 5.8 5.8h49.7c3.2 0 5.8-2.6 5.8-5.8V23c0-3.1-2.6-5.7-5.8-5.7zM30.4 13h3c3.3 0 6.1 1.8 7 4.3h-17c.9-2.5 3.7-4.3 7-4.3zM7 20.8h49.7c1.2 0 2.3 1 2.3 2.3V31l-25.1 4.6c-.4.1-.9.1-1.3 0L4.8 30.4V23c0-1.2 1-2.2 2.2-2.2zM56.7 51H7c-1.2 0-2.3-1-2.3-2.3V34l27.2 5c.4.1.9.1 1.3.1s.9 0 1.3-.1L59 34.5v14.2c0 1.3-1 2.3-2.3 2.3z"/>
	</g>
</svg>
	);
};

export default Briefcase;