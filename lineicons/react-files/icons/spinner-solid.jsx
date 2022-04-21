import React from 'react';

function SpinnerSolid(props) {
	const title = props.title || "spinner solid";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 62.8C15 62.8 1.3 49 1.3 32S15 1.3 32 1.3c4.7 0 9.2 1 13.4 3.1.9.4 1.2 1.5.8 2.3-.4.9-1.5 1.2-2.3.8-3.7-1.8-7.7-2.7-11.9-2.7C17 4.8 4.8 17 4.8 32S17 59.3 32 59.3c10.5 0 19.9-5.9 24.5-15.4 1.8-3.7 2.7-7.7 2.7-11.9 0-2.8-.4-5.5-1.2-8.2-.3-.9.2-1.9 1.1-2.2.9-.3 1.9.2 2.2 1.1.9 3 1.4 6.1 1.4 9.2 0 4.7-1 9.2-3.1 13.4-5 10.6-15.9 17.5-27.6 17.5z"/>
	</g>
</svg>
	);
};

export default SpinnerSolid;