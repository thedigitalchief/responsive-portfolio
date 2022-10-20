import React from 'react';

function DisplayAlt(props) {
	const title = props.title || "display alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M57 3.4H7C3.8 3.4 1.3 6 1.3 9.1v31.6c0 3.2 2.6 5.8 5.8 5.8h17.1l-2.9 10.7h-5.1c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h31.6c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-5.1l-2.9-10.7H57c3.2 0 5.8-2.6 5.8-5.8V9.1c0-3.1-2.6-5.7-5.8-5.7zM39.1 57.1H24.9l2.9-10.7h8.5l2.8 10.7zm20.2-16.4c0 1.2-1 2.3-2.3 2.3H7c-1.2 0-2.3-1-2.3-2.3V9.1c0-1.2 1-2.3 2.3-2.3h50c1.2 0 2.3 1 2.3 2.3v31.6z"/>
	</g>
</svg>
	);
};

export default DisplayAlt;