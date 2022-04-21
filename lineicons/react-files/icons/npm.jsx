import React from 'react';

function Npm(props) {
	const title = props.title || "npm";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 33.8h-3.5v-6.9H32v6.9zM63 20v20.6H32V44H18.2v-3.5H1V20h62zm-44.8 3.3H4.4v13.8h6.9V26.9h3.5v10.4h3.5l-.1-14zm17.3 0H21.7v17.2h6.9V37h6.9V23.3zm24 0H38.9v13.8h6.9V26.9h3.5v10.4h3.5V26.9h3.5v10.4h3.5v-14h-.3z"/>
	</g>
</svg>
	);
};

export default Npm;