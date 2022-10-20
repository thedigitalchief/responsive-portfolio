import React from 'react';

function PaintRoller(props) {
	const title = props.title || "paint roller";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M55.7 9.2h-.9V4.9c0-2-1.5-3.7-3.4-3.7H17.8c-1.9 0-3.4 1.7-3.4 3.7v4.2H9.9c-1.9 0-3.4 1.5-3.4 3.4v15.2c0 1.9 1.5 3.4 3.4 3.4h28.3v4.4H36c-1.7 0-3 1.4-3 3.2v20.8c0 1.8 1.4 3.2 3 3.2h8c1.7 0 3-1.4 3-3.2V38.7c0-1.8-1.4-3.2-3-3.2h-2.2V31c0-1.9-1.5-3.4-3.4-3.4H10v-15h4.4v4.2c0 2 1.5 3.7 3.4 3.7h33.7c1.9 0 3.4-1.7 3.4-3.7v-4.2h.9c1 0 1.8-.8 1.8-1.8s-.9-1.6-1.9-1.6zM43.4 59.3h-7V39h7v20.3zm7.9-42.4v.2H18V4.9v-.2h33.3v12.2z"/>
	</g>
</svg>
	);
};

export default PaintRoller;