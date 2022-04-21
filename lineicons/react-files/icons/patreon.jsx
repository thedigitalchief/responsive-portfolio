import React from 'react';

function Patreon(props) {
	const title = props.title || "patreon";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M63 24.7C63 37 53 47 40.7 47S18.4 37 18.4 24.7s10-22.3 22.3-22.3C53 2.3 63 12.3 63 24.7zm-62 37h11V2.3H1v59.4z"/>
	</g>
</svg>
	);
};

export default Patreon;