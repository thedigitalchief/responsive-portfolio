import React from 'react';

function Tree(props) {
	const title = props.title || "tree";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M46.9 25.6c0-11.5-6.1-24.3-14.9-24.3S17.1 14.1 17.1 25.6c0 11.6 5.6 20.9 13.1 22.2V61c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V47.7c7.4-1.2 13.1-10.5 13.1-22.1zM33.7 44.1v-6.9c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v6.9c-5.4-1.5-9.6-9.4-9.6-18.6 0-10.7 5.5-20.8 11.4-20.8 5.8 0 11.4 10.1 11.4 20.8.1 9.3-4.2 17.2-9.6 18.6z"/>
	</g>
</svg>
	);
};

export default Tree;