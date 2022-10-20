import React from 'react';

function TextFormat(props) {
	const title = props.title || "text format";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M5.2 46.5h5.5c.9 0 2-.7 2.2-1.4l2.6-6.5H35l2.3 6.5c.2.9 1.3 1.4 2.2 1.4h5.9c1.8-.2 2.9-1.8 2.2-3.2L31.7 5.6c-.4-1-1.1-1.3-2-1.3h-8.3c-.9 0-1.8.4-2 1.3L3.2 43.5c-.7 1.5.4 3 2 3zm20.1-30.7l5.6 14.9H19.6l5.7-14.9z"/>
		<path d="M47.8 57.9H3c-1 0-1.8.8-1.8 1.8S2 61.4 3 61.4h44.8c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7z"/>
		<path d="M61 2.6c-1 0-1.8.8-1.8 1.8v42.2c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V4.3c0-1-.8-1.7-1.8-1.7z"/>
	</g>
</svg>
	);
};

export default TextFormat;