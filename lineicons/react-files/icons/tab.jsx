import React from 'react';

function Tab(props) {
	const title = props.title || "tab";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M49.3 1.3H14.7c-3.1 0-5.6 2.5-5.6 5.6v50.4c0 3.1 2.5 5.6 5.6 5.6h34.7c3.1 0 5.6-2.5 5.6-5.6V6.8c-.1-3.1-2.6-5.5-5.7-5.5zm2.1 55.9c0 1.1-.9 2.1-2.1 2.1H14.7c-1.1 0-2.1-.9-2.1-2.1V6.8c0-1.1.9-2.1 2.1-2.1h34.7c1.1 0 2.1.9 2.1 2.1v50.4z"/>
		<path d="M33.8 11.6c0-1-.8-1.8-1.8-1.8h-7.9c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8H32c1 0 1.8-.8 1.8-1.8z"/>
		<path d="M40.2 9.1c-1.4 0-2.6 1.1-2.6 2.5s1.1 2.5 2.6 2.5c1.4 0 2.6-1.1 2.6-2.5-.1-1.4-1.2-2.5-2.6-2.5z"/>
		<ellipse cx="32" cy="50.9" rx="3.8" ry="3.8"/>
	</g>
</svg>
	);
};

export default Tab;