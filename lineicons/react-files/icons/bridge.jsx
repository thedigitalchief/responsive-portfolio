import React from 'react';

function Bridge(props) {
	const title = props.title || "bridge";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 31.6h-7.1C51.1 22.4 42.3 15.7 32 15.7s-19.1 6.7-21.9 15.9H3c-1 0-1.8.8-1.8 1.8S2 35.1 3 35.1h6.2v11.5c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-8.7c0-.9.1-1.9.2-2.8h38.2c.1.9.2 1.8.2 2.8v8.7c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V35.1h6c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7zm-30.7 0h-7V21.3c2.1-1.1 4.5-1.8 7-2v12.3zm3.5-12.3c2.5.2 4.9.9 7 2v10.3h-7V19.3zm-14.1 4.2v8.1h-5.9c1.2-3.2 3.2-6 5.9-8.1zm24.6 8.1v-8.1c2.7 2.1 4.7 4.9 5.9 8.1h-5.9z"/>
	</g>
</svg>
	);
};

export default Bridge;