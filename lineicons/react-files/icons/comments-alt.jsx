import React from 'react';

function CommentsAlt(props) {
	const title = props.title || "comments alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M56.8 10H7.2c-3.3 0-6 2.7-6 6v32c0 2.2 1.1 4.1 3 5.2.9.5 2 .8 3 .8s2-.3 3-.8l8.8-5.1c.4-.2.8-.3 1.2-.3h36.5c3.3 0 6-2.7 6-6V16c.1-3.3-2.6-6-5.9-6zm2.5 31.8c0 1.4-1.1 2.5-2.5 2.5H20.3c-1 0-2.1.3-3 .8l-8.8 5.1c-.8.4-1.7.4-2.5 0S4.8 49 4.8 48.1V16c0-1.4 1.1-2.5 2.5-2.5h49.6c1.4 0 2.5 1.1 2.5 2.5v25.8z"/>
		<path d="M44.7 22H17.9c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h26.9c1 0 1.8-.8 1.8-1.8s-.9-1.8-1.9-1.8z"/>
		<path d="M40.5 33.3H17.9c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h22.7c1 0 1.8-.8 1.8-1.8s-.9-1.8-1.9-1.8z"/>
	</g>
</svg>
	);
};

export default CommentsAlt;