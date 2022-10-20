import React from 'react';

function User(props) {
	const title = props.title || "user";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 36.4c8.2 0 14.9-6.7 14.9-14.9s-6.7-15-14.9-15-14.9 6.7-14.9 14.9 6.7 15 14.9 15zM32 10c6.3 0 11.4 5.1 11.4 11.4 0 6.3-5.1 11.4-11.4 11.4-6.3 0-11.4-5.1-11.4-11.4C20.6 15.2 25.7 10 32 10z"/>
		<path d="M62.1 54.4c-8.3-7.1-19-11-30.1-11s-21.8 3.9-30.1 11c-.8.6-.9 1.7-.2 2.5.6.7 1.7.8 2.5.2C11.9 50.6 21.8 47 32.1 47S52.3 50.6 60 57.1c.3.3.7.4 1.1.4.5 0 1-.2 1.3-.6.6-.8.5-1.9-.3-2.5z"/>
	</g>
</svg>
	);
};

export default User;