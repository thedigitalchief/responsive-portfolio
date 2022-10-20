import React from 'react';

function HeadphoneAlt(props) {
	const title = props.title || "headphone alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.7 32.9c-.1-7.6-3.3-14.8-8.8-20.3-6-5.9-14-9-22.5-8.9C15.1 4.1 1.8 17 1.3 32.9v14c0 1.4 1.1 2.6 2.4 2.7l22.2 10.6H32c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7h-5.3l-15.5-7.4c.9-.5 1.5-1.4 1.5-2.4V35.7c0-1.5-1.2-2.8-2.8-2.8H4.8c.6-14 12.3-25.4 26.7-25.6 7.5-.1 14.6 2.6 20 7.9 4.9 4.8 7.6 11.1 7.8 17.8h-5.1c-1.5 0-2.8 1.2-2.8 2.8V47c0 1.5 1.2 2.8 2.8 2.8H60c1.5 0 2.8-1.2 2.8-2.8V33.5l-.1-.6zM9.2 46.1H4.8v-9.6h4.4v9.6zm50.1 0h-4.4v-9.7h4.4v9.7z"/>
	</g>
</svg>
	);
};

export default HeadphoneAlt;