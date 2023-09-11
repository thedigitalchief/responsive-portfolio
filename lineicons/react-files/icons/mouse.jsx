import React from 'react';

function Mouse(props) {
	const title = props.title || "mouse";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 1.3c-11.2 0-20.4 10-20.4 22.4v16.8c0 12.3 9.1 22.4 20.4 22.4 5.2 0 10.1-2.1 13.9-5.9 4.2-4.2 6.6-10.3 6.5-16.5V23.6c0-12.3-9.2-22.3-20.4-22.3zm16.9 22.3v1.7H34V4.9C42.3 6 48.9 14 48.9 23.6zM30.5 4.8v20.5H15.1v-1.7c0-9.8 6.8-17.9 15.4-18.8zm12.9 49.6c-3.1 3.1-7.2 4.9-11.4 4.9-9.3 0-16.9-8.5-16.9-18.9V28.8h33.8v11.5c0 5.4-2 10.5-5.5 14.1z"/>
	</g>
</svg>
	);
};

export default Mouse;