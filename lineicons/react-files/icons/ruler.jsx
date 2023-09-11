import React from 'react';

function Ruler(props) {
	const title = props.title || "ruler";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M41.6 1.3H22.4c-3.2 0-5.8 2.6-5.8 5.8v50c0 3.2 2.6 5.8 5.8 5.8h19.1c3.2 0 5.8-2.6 5.8-5.8V7c0-3.2-2.6-5.7-5.7-5.7zM43.8 57c0 1.2-1 2.3-2.3 2.3H22.4c-1.2 0-2.3-1-2.3-2.3v-4.4h13.5c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8H20.2v-6.3h8.3c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-8.3v-6.3h13.5c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8H20.2v-6.3h8.3c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-8.3V13h13.5c1 0 1.8-.8 1.8-1.8s-.8-1.2-1.8-1.2H20.2V7c0-1.2 1-2.3 2.3-2.3h19.1c1.2 0 2.3 1 2.3 2.3v50z"/>
	</g>
</svg>
	);
};

export default Ruler;