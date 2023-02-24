import { renderInput, renderWelcomeMessage } from "./render.js";
import isValid from "./isValid.js";

const wrapper = document.createElement("div");
wrapper.id = "block";
document.body.append(wrapper);

if (localStorage.getItem("Username")) {
  renderWelcomeMessage(localStorage.getItem("Username"));
} else renderInput(handler);

function handler() {
  const input = document.querySelector("input");

  if (isValid(input?.value)) renderWelcomeMessage(input.value);
}
