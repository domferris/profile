// // TRACK WINDOW SCROLL
// window.addEventListener("scroll", (event) => {
//   console.log(scrollY);
// });

// SHOW/HIDE ALT NAVS
window.addEventListener("scroll", (event) => {
  const landing = document.querySelector("header");
  const sideNav = document.querySelector(".side-nav");
  const botNav = document.querySelector(".bottom-nav");

  if (scrollY < event.currentTarget.innerHeight * 0.375) {
    // sideNav.classList.remove("active");
    // botNav.classList.remove("active");
    landing.classList.add("active");
  } else {
    landing.classList.remove("active");
    // sideNav.classList.add("active");
    // botNav.classList.add("active");
  }

  if (landing.classList.contains("active")) {
    sideNav.classList.remove("active");
    botNav.classList.remove("active");
  } else {
    sideNav.classList.add("active");
    botNav.classList.add("active");
  }
});
