// SHOW/HIDE ALT NAVS
window.addEventListener("scroll", (event) => {
  const landing = document.querySelector("header");
  const sideNav = document.querySelector(".side-nav");
  const mobileNav = document.querySelector(".mobile-nav");

  if (scrollY < event.currentTarget.innerHeight * 0.4) {
    landing.classList.add("active");
  } else {
    landing.classList.remove("active");
  }

  if (landing.classList.contains("active")) {
    sideNav.classList.remove("active");
    mobileNav.classList.remove("active");
  } else {
    sideNav.classList.add("active");
    mobileNav.classList.add("active");
  }
});
