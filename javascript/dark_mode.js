// TOGGLE DARK MODE
const modeToggle = document.querySelector(".mode-toggle");
const mode = document.querySelector(".mode");
const body = document.body;

modeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  const modeText = body.classList.contains("dark-mode") ? "Light" : "Dark";

  mode.innerHTML = modeText;
});
