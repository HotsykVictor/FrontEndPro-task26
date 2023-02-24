const renderInput = (func) => {
  if (localStorage.getItem("Username")) {
    renderWelcomeMessage(localStorage.getItem("Username"));
    return;
  }

  const wrapper = document.getElementById("block");
  wrapper.replaceChildren();

  const input = document.createElement("input");
  const label = document.createElement("label");
  const btn = document.createElement("button");

  label.textContent = "Hi what is your name?";
  btn.textContent = "OK";
  btn.onclick = func;

  wrapper.append(label, input, btn);
};

const renderWelcomeMessage = (name) => {
  if (!name) {
    return;
  }
  const wrapper = document.getElementById("block");
  wrapper.replaceChildren();

  const welcome = document.createElement("p");
  welcome.textContent = `Hello ${name}`;

  document.getElementById("block").append(welcome);
  localStorage.setItem("Username", name);
};

export { renderInput, renderWelcomeMessage };
