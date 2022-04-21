import React from 'react';

function LaptopPhone(props) {
	const title = props.title || "laptop phone";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M60.2 22.3h-8V6.8c0-1.6-1.3-3-3-3H9.4c-1.6 0-2.9 1.3-2.9 3V28c-.7.4-1.2 1.1-1.4 2L1.3 48.7c-.2.9.1 1.8.7 2.5s1.4 1.1 2.3 1.1h33.9v5.4c0 1.4 1.1 2.5 2.5 2.5h19.6c1.4 0 2.5-1.1 2.5-2.5V24.8c0-1.3-1.2-2.5-2.6-2.5zM4.9 48.7l3.6-17.6h29.7v17.6H4.9zm33.3-23.9v2.8H10V7.4h38.7v15h-8c-1.4-.1-2.5 1.1-2.5 2.4zm21.1 31.8H41.7V25.8h17.6v30.8z"/>
		<path d="M50.5 50.1c-1.3 0-2.3 1-2.3 2.3 0 1.3 1 2.3 2.3 2.3s2.3-1 2.3-2.3c0-1.3-1.1-2.3-2.3-2.3z"/>
		<path d="M48.2 33.5h5.7c1 0 1.8-.8 1.8-1.8s-.9-1.7-1.8-1.7h-5.7c-1 0-1.8.8-1.8 1.8s.8 1.7 1.8 1.7z"/>
	</g>
</svg>
	);
};

export default LaptopPhone;