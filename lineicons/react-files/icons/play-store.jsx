import React from 'react';

function PlayStore(props) {
	const title = props.title || "play store";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M59 24.4L12.6 1.2C9.9-.2 6.8 0 4.3 1.5 1.8 3.1.3 5.8.3 8.8v46.4c0 3 1.5 5.7 4.1 7.3 1.4.9 2.9 1.3 4.5 1.3 1.3 0 2.6-.3 3.8-.9L59 39.6c2.9-1.5 4.7-4.4 4.7-7.6s-1.8-6.2-4.7-7.6zm-21.5-6.9l-9 11.6L8.8 3.7c.8 0 1.5.2 2.2.5l26.5 13.3zM3.8 55.2V8.8c0-1.4.6-2.8 1.7-3.7L26.3 32 5.4 58.9c-1.1-.9-1.6-2.3-1.6-3.7zm7.2 4.5c-.7.4-1.5.5-2.3.5l19.7-25.4 9 11.7L11 59.7zm46.5-23.2l-16.8 8.4-10-12.9 10-12.9 16.8 8.4c1.7.9 2.8 2.6 2.8 4.5s-1.1 3.6-2.8 4.5z"/>
	</g>
</svg>
	);
};

export default PlayStore;