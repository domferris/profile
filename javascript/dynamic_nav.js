// SHOW/HIDE ALT NAVS
const landingNav = document.querySelector("header");
const sideNav = document.querySelector(".side-nav");
const mobileNav = document.querySelector(".mobile-nav");

const breakPointPercentage = 0.4;
const breakPointHeight = window.innerHeight * breakPointPercentage;

const enable = (element) => element.classList.add("active");
const disable = (element) => element.classList.remove("active");

window.addEventListener("scroll", (event) => {
  if (scrollY < breakPointHeight) {
    enable(landingNav);
    disable(sideNav);
    disable(mobileNav);
  } else {
    disable(landingNav);
    enable(sideNav);
    enable(mobileNav);
  }
});
