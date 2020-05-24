// FADES OUT/IN LANDING NAV
$(window).scroll(function () {
  if ($(this).scrollTop() > window.innerHeight * 0.375) {
    $("header div").fadeOut();
  } else {
    $("header div").fadeIn();
  }
});

// SHOW/HIDE SIDE NAV
window.addEventListener("scroll", (event) => {
  const sideNav = document.querySelector(".side-nav");
  // console.log(event.currentTarget.innerHeight);
  if (scrollY < event.currentTarget.innerHeight * 0.375) {
    sideNav.classList.remove("active");
  } else {
    sideNav.classList.add("active");
  }
});

window.addEventListener("DOMContentLoaded", (event) => {
  // const sideNav = document.querySelector(".side-nav");
  // const botNav = document.querySelector(".bottom-nav");

  if (window.innerWidth <= 600) {
    console.log("mobile loaded!");
  } else {
    console.log(">= tablet loaded!");
  }
});

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
