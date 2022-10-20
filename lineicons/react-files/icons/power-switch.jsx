import React from 'react';

function PowerSwitch(props) {
	const title = props.title || "power switch";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M44.1 15.6c-.8-.5-1.9-.2-2.4.7-.5.8-.2 1.9.7 2.4 6.9 3.8 11.2 11.1 11.2 19 0 11.9-9.7 21.6-21.7 21.6-11.9 0-21.7-9.7-21.7-21.6 0-7.8 4.2-15 10.9-18.8.8-.5 1.1-1.5.7-2.4-.5-.8-1.5-1.1-2.4-.7-7.7 4.4-12.6 12.8-12.6 21.8 0 13.9 11.3 25.1 25.2 25.1 13.9 0 25.2-11.3 25.2-25.1 0-9.2-5-17.6-13.1-22z"/>
		<path d="M31.7 29.5c1 0 1.7-.8 1.7-1.8V3c0-1-.8-1.8-1.7-1.8S29.9 2 29.9 3v24.7c0 1 .8 1.8 1.8 1.8z"/>
	</g>
</svg>
	);
};

export default PowerSwitch;