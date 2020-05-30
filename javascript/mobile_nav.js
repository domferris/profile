// EXPAND/COLLAPSE MOBILE NAV
const mobileNav = document.querySelector(".mobile-nav");
const navToggleBtn = document.querySelector(".mobile-nav i");
// console.log(mobileNav);
// console.log(navToggleBtn);

navToggleBtn.addEventListener("click", (event) => {
  mobileNav.classList.toggle("open");
});
