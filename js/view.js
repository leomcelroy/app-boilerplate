import { html } from '../libs/lit-html.js';

function content(state) {
	return html`
		<div class="content">
			content
		</div>
	`
}

export function view(state) {

	return html `
		<div class="container">
			<div class="tools">tools</div>
			${content(state)}
		</div>
	`
};