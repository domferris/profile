// TOGGLE DARK MODE
const modeToggle = document.querySelector(".mode-toggle");
const modeDisplay = document.querySelector(".mode-display");
const body = document.body;

modeToggle.addEventListener("click", () => {
  const isDarkMode = body.classList.toggle("dark-mode");

  const modeText = isDarkMode ? "Light" : "Dark";

  modeDisplay.innerHTML = modeText;
});
