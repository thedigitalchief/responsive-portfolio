import React from 'react';

function Gatsby(props) {
	const title = props.title || "gatsby";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 1C14.8 1 1 14.8 1 32s13.8 31 31 31 31-13.8 31-31S49.2 1 32 1zM7.6 32.3l24 24c-13.1-.1-23.8-10.8-24-24zm29.9 23.4L8.3 26.5C10.9 15.7 20.4 7.6 32 7.6c8 0 15.2 3.9 19.7 10l-3.4 3c-3.5-5.2-9.6-8.5-16.3-8.5-8.6 0-15.9 5.5-18.7 13.1l25.5 25.5c6.2-2.3 11-7.5 12.5-14H40.7V32h15.6c.1 11.6-8.1 21.3-18.8 23.7z"/>
	</g>
</svg>
	);
};

export default Gatsby;