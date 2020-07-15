// TOGGLE DARK MODE
const darkModeToggle = document.querySelector(".dark-mode-toggle");
const body = document.querySelector("body");

darkModeToggle.addEventListener("click", () => {
  if (!body.classList.contains("dark-mode")) {
    body.classList.add("dark-mode");
    darkModeToggle.innerHTML = "View profile in Light Mode";
  } else {
    body.classList.remove("dark-mode");
    darkModeToggle.innerHTML = "View profile in Dark Mode";
  }
});
