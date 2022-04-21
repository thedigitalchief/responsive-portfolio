import React from 'react';

function MoreAlt(props) {
	const title = props.title || "more alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<circle cx="10.3" cy="32" r="7.3"/>
		<circle cx="32" cy="32" r="7.2"/>
		<circle cx="53.8" cy="32" r="7.3"/>
	</g>
</svg>
	);
};

export default MoreAlt;