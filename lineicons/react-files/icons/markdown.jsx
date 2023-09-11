import React from 'react';

function Markdown(props) {
	const title = props.title || "markdown";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58.4 13H5.5C3.1 13 1 15 1 17.5v29.1C1 48.9 3 51 5.5 51h53c2.4 0 4.5-2 4.5-4.5V17.3c-.1-2.4-2.1-4.3-4.6-4.3zm1.5 33.6c0 .8-.7 1.5-1.5 1.5H5.5c-.8 0-1.5-.7-1.5-1.5V17.3c0-.8.7-1.5 1.5-1.5h53c.8 0 1.5.7 1.5 1.5v29.2h-.1z"/>
		<path d="M50.1 21.8h-5.9v10.4h-6.1l9 9.9 8.9-9.9h-5.9z"/>
		<path d="M21.8 29.3l-5.9-7.5h-6v20.3h6V30.4l5.9 7.4 5.9-7.4v11.7h6.1V21.8h-6.1z"/>
	</g>
</svg>
	);
};

export default Markdown;