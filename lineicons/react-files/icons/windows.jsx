import React from 'react';

function Windows(props) {
	const title = props.title || "windows";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.9 30.5V1.1C51.6 2.6 40.4 4.2 29 6v24.7c11.4-.1 22.6-.1 33.9-.2z"/>
		<path d="M1 10.2V31c8.3 0 16.9-.1 25.2-.1V6.7C17.9 7.8 9.3 8.9 1 10.2z"/>
		<path d="M1 33.4v20.8c8.3 1.1 16.9 2.2 25.2 3.4v-24c-8.3-.2-16.9-.2-25.2-.2z"/>
		<path d="M29.3 33.8c.1 8.2.1 16.2.1 24.3 11.2 1.5 22.4 3.1 33.6 4.8V33.8H29.3z"/>
	</g>
</svg>
	);
};

export default Windows;