import React from 'react';

function Agenda(props) {
	const title = props.title || "agenda";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M47 1.3H17c-2.6 0-4.8 2.1-4.8 4.8v45.5c0 2.5 1.9 4.5 4.3 4.7V60c0 .9 1.1 1.4 1.8.8l.1-.1c.4-.3 1-.3 1.4 0l.1.1c.7.6 1.8.1 1.8-.8v-3.7H47c2.6 0 4.8-2.1 4.8-4.8V6c0-2.6-2.2-4.7-4.8-4.7zm-6.6 18.9h7.9v14.5h-7.9V20.2zm-3.5 14.5H15.7V20.2h21.2v14.5zM48.3 6v10.7h-7.9V4.8H47c.7 0 1.3.5 1.3 1.2zM17 4.8h19.9v11.9H15.7V6c0-.7.6-1.2 1.3-1.2zm-1.3 46.7V38.2h21.2v14.5H17c-.7 0-1.3-.5-1.3-1.2zM47 52.7h-6.6V38.2h7.9v13.3c0 .7-.6 1.2-1.3 1.2z"/>
	</g>
</svg>
	);
};

export default Agenda;