import React from 'react';

function Google(props) {
	const title = props.title || "google";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61.5 29.2H32.8v8.5h20.6c-1.1 11.8-10.7 16.9-20 16.9-11.8 0-22.3-9.2-22.3-22.5 0-12.8 10-22.5 22.3-22.5 9.4 0 15.1 6.1 15.1 6.1l5.8-6.1S46.5 1.1 33 1.1C15.2 1 1.6 15.9 1.6 32c0 15.6 12.8 31 31.7 31C50 63 62 51.7 62 34.8c.1-3.5-.5-5.6-.5-5.6z"/>
	</g>
</svg>
	);
};

export default Google;