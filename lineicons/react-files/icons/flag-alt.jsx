import React from 'react';

function FlagAlt(props) {
	const title = props.title || "flag alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M52.1 33.9l-3.6-8.5 3.6-8.5c0-.1.1-.2.1-.4v-.4c0-1-.8-1.8-1.8-1.8H33.8v-3.5c0-1-.8-1.8-1.8-1.8H15.3V3c0-1-.8-1.8-1.8-1.8S11.8 2 11.8 3v58c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V31.1h15v2.4c0 1.6 1.3 2.9 2.9 2.9h17.3c1 0 1.8-.8 1.8-1.8-.2-.2-.2-.4-.3-.7zm-36.8-6.3v-15h15v15h-15zm18.5-.9v-8.8h14.1l-3.2 7.5 3.2 7.5H33.8v-6.2z"/>
	</g>
</svg>
	);
};

export default FlagAlt;