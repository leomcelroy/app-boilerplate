import { html } from '../libs/lit-html.js';

function toolbar(state) {
	return html`
		<div>
			<div>Search Bar</div>
		</div>
	`
}

function map(state) {
	return html`
		<div id="section-1">
			Hello World!
		</div>
	`
}

export function view(state) {

	return html `
		<div class="container">
			<div class="main">${map(state)}</div>
			<div class="toolbar"></div>
		</div>
	`
};