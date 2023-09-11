import React from 'react';

function Home(props) {
	const title = props.title || "home";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M57.2 62.8H43.7c-3 0-5.5-2.5-5.5-5.5v-11c0-1.1-.9-2-2-2h-8.3c-1.1 0-2 .9-2 2v10.9c0 3-2.5 5.5-5.5 5.5H6.7c-3 0-5.5-2.5-5.5-5.5V22.3c0-1.5.8-2.9 2.1-3.7L29.7 1.9c1.4-.9 3.3-.9 4.7 0l26.4 16.7c1.3.8 2 2.2 2 3.7v34.8c0 3.2-2.5 5.7-5.6 5.7zm-29.4-22h8.3c3 0 5.5 2.5 5.5 5.5v10.9c0 1.1.9 2 2 2h13.6c1.1 0 2-.9 2-2V22.4c0-.3-.2-.6-.4-.8L32.5 4.9c-.3-.2-.7-.2-.9 0L5.2 21.6c-.3.2-.4.5-.4.8v34.9c0 1.1.9 2 2 2h13.6c1.1 0 2-.9 2-2v-11c-.1-3 2.4-5.5 5.4-5.5z"/>
	</g>
</svg>
	);
};

export default Home;