import React from 'react';

function Amex(props) {
	const title = props.title || "amex";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M57.7 14.1H6.3c-3.3 0-6 2.7-6 6v23.7c0 3.3 2.7 6 6 6h51.5c3.3 0 6-2.7 6-6V20.1c0-3.3-2.8-6-6.1-6zm2.6 29.8c0 1.4-1.1 2.5-2.5 2.5H6.3c-1.4 0-2.5-1.1-2.5-2.5V20.1c0-1.4 1.1-2.5 2.5-2.5h51.5c1.4 0 2.5 1.1 2.5 2.5v23.8z"/>
		<path d="M26.9 35.6l-3-10.3h-3.7v12.4l-3.1-12.4h-4.2L9.7 38.5h2.1l.8-2.8h5l.7 2.8h4.2V27.8h.3l3.1 10.1h2.2l3-10.1h.3v10.7h2.1V25.3h-3.6l-3 10.3zm-14-1.7l1.6-6.7h1l1.6 6.7h-4.2z"/>
		<path d="M52 25.3l-2.9 5.1-2.8-5.1H35.4v13.2h11l2.7-5 2.8 5h2.4L50.5 32l3.8-6.7H52zm-7 11.3h-7.5v-3.8h5V31h-4.9v-3.6H45l2.8 4.9-2.8 4.3z"/>
	</g>
</svg>
	);
};

export default Amex;