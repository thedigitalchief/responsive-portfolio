import React from 'react';

function DirectionRtl(props) {
	const title = props.title || "direction rtl";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M24.2 24.9h1.7v14.7c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V4.8h8.7v34.8c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V4.8h13.8c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8H24.3h-.1c-6.7 0-11.9 5.2-11.9 11.8 0 6.6 5.3 11.9 11.9 11.9zm0-20.1h1.7v16.6h-1.7c-4.7 0-8.4-3.7-8.4-8.4 0-4.6 3.7-8.2 8.4-8.2z"/>
		<path d="M55.4 51.7H12.6l5.6-4.5c.8-.6.9-1.7.3-2.5s-1.7-.9-2.5-.3l-7.9 6.3c-.8.6-1.3 1.6-1.3 2.7s.5 2 1.3 2.7l7.9 6.3c.3.3.7.4 1.1.4.5 0 1-.2 1.4-.7.6-.8.5-1.9-.3-2.5l-5.6-4.5h42.9c1 0 1.8-.8 1.8-1.8s-.9-1.6-1.9-1.6z"/>
	</g>
</svg>
	);
};

export default DirectionRtl;