import React from 'react';

function EmptyFile(props) {
	const title = props.title || "empty file";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M47.5 1.3h-31c-4.1 0-7.4 3.3-7.4 7.4v31.6c0 1.4.6 2.7 1.6 3.6l18.7 17.6c.9.9 2.2 1.4 3.5 1.4h14.6c4.1 0 7.4-3.3 7.4-7.4V8.6c-.1-4-3.4-7.3-7.4-7.3zM15.2 43.2h13.5c.8 0 1.5.6 1.5 1.4v12.7l-15-14.1zm36.1 12.2c0 2.1-1.7 3.9-3.9 3.9H33.8V44.6c0-2.7-2.3-4.9-5-4.9H12.7V8.6c0-2.1 1.7-3.9 3.9-3.9h31c2.1 0 3.9 1.7 3.9 3.9v46.8z"/>
	</g>
</svg>
	);
};

export default EmptyFile;