import React from 'react';

function Dollar(props) {
	const title = props.title || "dollar";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M39.7 30.3H24.3c-5.4 0-9.9-4.2-9.9-9.4s4.4-9.4 9.9-9.4h22.9c1 0 1.8-.8 1.8-1.8S48.1 8 47.1 8H35.8V3c0-1-.8-1.8-1.8-1.8S32.3 2 32.3 3v5h-8.1c-7.4 0-13.4 5.8-13.4 12.9 0 7.1 6 12.9 13.4 12.9h15.5c5.4 0 9.9 4.2 9.9 9.4s-4.4 9.4-9.9 9.4H13.6c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h18.7v5c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-5h3.9c7.4 0 13.4-5.8 13.4-12.9s-6.1-13-13.5-13z"/>
	</g>
</svg>
	);
};

export default Dollar;