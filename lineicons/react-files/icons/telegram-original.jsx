import React from 'react';

function TelegramOriginal(props) {
	const title = props.title || "telegram original";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="none">
		<path d="M62.8 10.8l-9.4 44c-.7 3.1-2.5 3.8-5.1 2.4L34.2 46.8l-6.9 6.6c-.7.7-1.4 1.4-3 1.4l1.1-14.5 26.3-23.9c1.1-1.1-.3-1.5-1.7-.6L17.3 36.4 3.2 32.1c-3.1-1-3.1-3.1.7-4.5L58.7 6.3c2.7-.8 5 .6 4.1 4.5z" fill="#000000"/>
	</g>
</svg>
	);
};

export default TelegramOriginal;