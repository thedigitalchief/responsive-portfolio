import React from 'react';

function Btc(props) {
	const title = props.title || "btc";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M46.3 30.3c3.4-1.7 5.5-4.8 5.1-9.9-.7-6.9-6.3-9.3-13.9-9.9V1h-5.9v9.4c-1.6 0-3.1 0-4.6.1V1h-6v9.6c-2.1.1-4.6 0-11.8 0v6.3c4.6-.1 7-.4 7.6 2.7V46c-.4 2.4-2.3 2-6.5 2l-1.1 7H21v8h5.9v-8.2h4.6V63h5.9v-8.2c9.9-.6 16.5-3 17.3-12.3.7-7.5-2.9-10.8-8.4-12.2zM26.9 17.2c3.2 0 13.7-1.1 13.7 5.9 0 6.6-10.4 5.8-13.7 5.8V17.2zm0 30.6V35c3.9 0 16.1-1.1 16.1 6.5.1 7.1-12.2 6.3-16.1 6.3z"/>
	</g>
</svg>
	);
};

export default Btc;