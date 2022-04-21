import React from 'react';

function FrameExpand(props) {
	const title = props.title || "frame expand";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M18.8 1.3h-13c-2.5 0-4.5 2-4.5 4.5v13c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-13c0-.6.5-1 1-1h13c1 0 1.8-.8 1.8-1.8s-.9-1.7-1.9-1.7z"/>
		<path d="M58.2 1.3h-13c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h13c.6 0 1 .5 1 1v13c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-13c0-2.6-2.1-4.6-4.6-4.6z"/>
		<path d="M61 43.4c-1 0-1.8.8-1.8 1.8v13c0 .6-.5 1-1 1h-13c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h13c2.5 0 4.5-2 4.5-4.5v-13c.1-1.1-.7-1.9-1.7-1.9z"/>
		<path d="M18.8 59.3h-13c-.6 0-1-.5-1-1v-13c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v13c0 2.5 2 4.5 4.5 4.5h13c1 0 1.8-.8 1.8-1.8s-.7-1.7-1.7-1.7z"/>
	</g>
</svg>
	);
};

export default FrameExpand;