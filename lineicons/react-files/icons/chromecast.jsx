import React from 'react';

function Chromecast(props) {
	const title = props.title || "chromecast";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M1.1 48.8v8.5h8.5c0-4.7-3.8-8.5-8.5-8.5zm0-11.2v5.6c7.7 0 14.1 6.3 14.1 14.1h5.6C20.7 46.5 12 37.6 1.1 37.6zm11.3-19.7v4.6C23.5 26.1 32.3 35 35.9 46.1h15.8V17.9H12.4zM1.1 26.4V32c14.1 0 25.4 11.4 25.4 25.4H32c.1-17.2-13.8-31-30.9-31zM57.5 6.6H6.6C3.5 6.6 1 9.2 1 12.3v8.5h5.6v-8.5h50.7v39.3H37.6v5.6h19.7c3.1 0 5.6-2.5 5.6-5.6V12.3c.1-3.3-2.4-5.7-5.4-5.7z"/>
	</g>
</svg>
	);
};

export default Chromecast;