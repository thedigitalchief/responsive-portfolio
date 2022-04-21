import React from 'react';

function TextFormatRemove(props) {
	const title = props.title || "text format remove";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M43.3 54.2H5.5c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h37.8c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
		<path d="M59.5 41.3l2.8-2.8c.7-.7.7-1.8 0-2.5s-1.8-.7-2.5 0L57 38.9l-2.8-2.8c-.7-.7-1.8-.7-2.5 0s-.7 1.8 0 2.5l2.8 2.8-2.8 2.8c-.7.7-.7 1.8 0 2.5.3.3.8.5 1.2.5.4 0 .9-.2 1.2-.5l2.8-2.8 2.8 2.8c.3.3.8.5 1.2.5.4 0 .9-.2 1.2-.5.7-.7.7-1.8 0-2.5l-2.6-2.9z"/>
		<path d="M30.4 9.3c-.3-.9-1-1.3-2-1.3h-8c-.8 0-1.7.4-2 1.3L3.2 45.5c-.6 1.4.3 2.9 1.9 2.9h5.3c.9 0 1.9-.7 2.1-1.4l2.5-6.2h18.6l2.2 6.2c.2.9 1.2 1.4 2.1 1.4h5.6c1.7-.2 2.8-1.8 2.1-3L30.4 9.3zm-11.5 24L24.3 19l5.4 14.2H18.9z"/>
	</g>
</svg>
	);
};

export default TextFormatRemove;