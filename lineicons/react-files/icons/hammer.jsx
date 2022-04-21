import React from 'react';

function Hammer(props) {
	const title = props.title || "hammer";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M48.2 9.2H39V5.6c0-2.4-2-4.4-4.4-4.4h-5.3c-2.4 0-4.4 2-4.4 4.4v3.5h-9.2c-5.1 0-9.3 4.2-9.3 9.3v6c0 5.1 4.2 9.3 9.3 9.3H25v23.1c0 3.3 2.7 5.9 5.9 5.9h2.2c3.3 0 5.9-2.7 5.9-5.9v-23h9.2c5.1 0 9.3-4.2 9.3-9.3v-6c0-5.2-4.2-9.3-9.3-9.3zM28.5 5.6c0-.5.4-.9.9-.9h5.3c.5 0 .9.4.9.9v3.5h-7V5.6zm7 51.2c0 1.3-1.1 2.4-2.4 2.4h-2.2c-1.3 0-2.4-1.1-2.4-2.4v-23h7v23zM54 24.4c0 3.2-2.6 5.8-5.8 5.8H15.8c-3.2 0-5.8-2.6-5.8-5.8v-6c0-3.2 2.6-5.8 5.8-5.8h32.3c3.2 0 5.8 2.6 5.8 5.8v6z"/>
	</g>
</svg>
	);
};

export default Hammer;