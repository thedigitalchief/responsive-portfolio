import React from 'react';

function Javascript(props) {
	const title = props.title || "javascript";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="none">
		<path d="M1 1v62h62V1H1zm33.8 48.3c0 6.1-3.6 8.9-8.8 8.9-4.6 0-7.3-2.4-8.7-5.4l4.8-3c.8 1.7 1.7 3 3.8 3 2 0 3.1-.7 3.1-3.7V29.5h5.8v19.8zm13.8 8.9c-5.4 0-8.9-2.7-10.7-5.9l4.8-2.8c1.3 2 3 3.5 5.8 3.5 2.4 0 3.9-1.1 3.9-3 0-2-1.5-2.7-4.2-3.9l-1.4-.6c-4.2-1.7-7-4.1-7-8.9 0-4.4 3.2-7.6 8.5-7.6 3.7 0 6.3 1.3 8.2 4.7l-4.5 3c-1-1.7-2-2.5-3.8-2.5-1.7 0-2.8 1.1-2.8 2.5 0 1.7 1.1 2.4 3.5 3.5l1.4.6c4.9 2.1 7.8 4.2 7.8 9.2.1 5.3-4 8.2-9.5 8.2z" fill="#000000"/>
	</g>
</svg>
	);
};

export default Javascript;