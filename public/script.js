const inputs = document.querySelectorAll("#input");
const registerButton = document.querySelector("#registerButton");

if (!inputs.values) {
  registerButton.disabled = true;
} else {
  registerButton.disabled = false;
}
