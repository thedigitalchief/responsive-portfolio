import React from 'react';

function Helicopter(props) {
	const title = props.title || "helicopter";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 22.3c-1 0-1.8.8-1.8 1.8v.9H36.4v-2.7c0-1.4-1.2-2.6-2.6-2.6H23.1v-7h14c1 0 1.8-.8 1.8-1.8s-.9-1.7-1.8-1.7H5.6c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h14v7H9c-4.3 0-7.7 3.5-7.7 7.7v14.3c0 1.4 1.2 2.6 2.6 2.6h5.3v7H6c-.3 0-.6-.2-.6-.3 0-1-.8-1.8-1.8-1.8S2 50 2 51c0 2.1 1.8 3.8 4.1 3.8h26c1 0 1.8-.8 1.8-1.8s-.9-1.7-1.9-1.7h-6.2v-7h8c1.4 0 2.6-1.2 2.6-2.6v-2.6l22.9-2.5v.7c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V24.1c-.1-1-.9-1.8-1.9-1.8zm-38.7 29h-9.7v-7h9.7v7zm10.6-10.5H4.8V27.4c0-2.3 1.9-4.2 4.2-4.2h23.9v17.6zm3.5-5.2v-7.1h22.9v4.6l-22.9 2.5z"/>
	</g>
</svg>
	);
};

export default Helicopter;