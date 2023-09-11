import React from 'react';

function Blackboard(props) {
	const title = props.title || "blackboard";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M56.1 9.2H33.8V5.6c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v3.5H7.9c-3.7 0-6.7 3-6.7 6.7V35c0 3.7 3 6.7 6.7 6.7h9L8 57.5c-.5.8-.2 1.9.7 2.4.3.1.5.2.8.2.6 0 1.2-.3 1.5-.9l9.8-17.6h9.4v16.7c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V41.7h9.5l9.9 17.6c.3.6.9.9 1.5.9.3 0 .6-.1.9-.2.8-.5 1.1-1.5.7-2.4l-8.9-15.8h8.8c3.7 0 6.7-3 6.7-6.7V15.8c-.1-3.7-3.1-6.6-6.8-6.6zM59.3 35c0 1.7-1.4 3.2-3.2 3.2H7.9c-1.7 0-3.2-1.4-3.2-3.2V15.8c0-1.7 1.4-3.2 3.2-3.2h48.2c1.7 0 3.2 1.4 3.2 3.2V35z"/>
	</g>
</svg>
	);
};

export default Blackboard;