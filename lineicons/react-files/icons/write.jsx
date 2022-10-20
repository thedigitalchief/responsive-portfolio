import React from 'react';

function Write(props) {
	const title = props.title || "write";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M53.9 10.1H51V8.7c0-4.1-3.3-7.4-7.4-7.4H15.1c-4.1 0-7.4 3.3-7.4 7.4v33.9c0 1.2.5 2.3 1.3 3.2l15.2 15.6c.9.9 2.1 1.4 3.3 1.4h18.9c2.5 0 4.6-2.1 4.6-4.6v-1.1l5-10.2c.1-.2.2-.5.2-.8l.1-33.6c0-1.2-1.1-2.3-2.4-2.4zm-1.1 8.4h-7v-5c2.3 0 4.6 0 7 .1v4.9zM24 56.2L13.6 45.5H24v10.7zm22.4 3.1H27.5V44.4c0-1.3-1.1-2.4-2.4-2.4H11.2V8.7c0-2.2 1.8-3.9 3.9-3.9h28.4c2.2 0 3.9 1.8 3.9 3.9v1.4h-2.7c-1.4 0-2.6 1.1-2.6 2.4L42 46.1c0 .3.1.5.2.8l5.1 10.2v1.1c.2.6-.3 1.1-.9 1.1zm2.8-6.6l-3.5-7V22h7v23.7l-3.5 7z"/>
	</g>
</svg>
	);
};

export default Write;