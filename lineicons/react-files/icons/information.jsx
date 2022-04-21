import React from 'react';

function Information(props) {
	const title = props.title || "information";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<circle cx="31.2" cy="6.9" r="3.9"/>
		<path d="M38.7 59.3h-5V20.5c0-2.2-1.8-4-4-4h-4.5c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h4.5c.3 0 .5.2.5.5v38.7h-5c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h13.5c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
	</g>
</svg>
	);
};

export default Information;