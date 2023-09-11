import React from 'react';

function Yen(props) {
	const title = props.title || "yen";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M49.3 3.9c.5-.8.2-1.9-.6-2.4s-1.9-.2-2.4.6L32 26 17.7 2.1c-.5-.8-1.6-1.1-2.4-.6-.8.5-1.1 1.6-.6 2.4l15.6 25.9v3H18.8c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h11.4v7H18.8c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h11.4v14c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V46.9h11.4c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8H33.8v-7h11.4c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8H33.8v-3L49.3 3.9z"/>
	</g>
</svg>
	);
};

export default Yen;