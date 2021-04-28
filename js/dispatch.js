import { view } from "./view.js";
import { render } from "../libs/lit-html.js";

function init(state) { }

const STATE = {};

const ACTIONS = {
	"INIT": init
}

export function dispatch(action, args = {}, rerender = true) {
	const trigger = ACTIONS[action];
	if (trigger) trigger(args, STATE);
	else console.log("Action not recongnized:", action);

	if (rerender) {
		render(view(STATE), document.body);
	}
}