window.addEventListener("scroll", (event) => {
  console.log(scrollY);
});

// SHOW/HIDE SIDE NAV
window.addEventListener("scroll", (event) => {
  const landing = document.querySelector("header");
  const sideNav = document.querySelector(".side-nav");

  if (scrollY < event.currentTarget.innerHeight * 0.375) {
    sideNav.classList.remove("active");
    landing.classList.add("active");
  } else {
    landing.classList.remove("active");
    sideNav.classList.add("active");
  }
});

// TODO: REVEAL BOT NAV IF LOADED IN MOBILE BELOW TRANSITION POINT
window.addEventListener("DOMContentLoaded", (event) => {
  // const sideNav = document.querySelector(".side-nav");
  // const botNav = document.querySelector(".bottom-nav");

  if (window.innerWidth <= 600) {
    console.log("mobile loaded!");
    //if window.scrollY is greater than window.innerHeight * 0.375, botNav has active
  } else {
    console.log(">= tablet loaded!");
    //if window.scrollY is less than window.innerHeight * 0.375, botNav does not have active
  }
});

// TODO: TRANSITION FROM SIDE NAV TO BOT NAV WHEN RESIZED TO MOBILE
window.onresize = () => {
  const sideNav = document.querySelector(".side-nav");
  const botNav = document.querySelector(".bottom-nav");

  if (window.innerWidth <= 600 && window.scrollY > window.innerHeight * 0.375) {
    console.log("mobile hello");

    sideNav.classList.remove("active");
    botNav.classList.add("active");
  } else {
    console.log("mobile goodbye");

    sideNav.classList.add("active");
    botNav.classList.remove("active");
  }
};
