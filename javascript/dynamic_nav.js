// FADES OUT/IN LANDING NAV
$(window).scroll(function () {
  if ($(this).scrollTop() > window.innerHeight * 0.375) {
    $("header div").fadeOut();
  } else {
    $("header div").fadeIn();
  }
});

// SHOW/HIDE ALT NAV
window.addEventListener("scroll", (event) => {
  const altNav = document.querySelector(".alt-nav");
  // console.log(event.currentTarget.innerHeight);
  if (scrollY < event.currentTarget.innerHeight * 0.375) {
    altNav.classList.remove("active");
  } else {
    altNav.classList.add("active");
  }
});

window.addEventListener("DOMContentLoaded", (event) => {
  if (window.innerWidth <= 600) {
    console.log("mobile loaded!");
  }
});

window.onresize = () => {
  if (window.innerWidth <= 600) {
    console.log("mobile hello");
  } else {
    console.log("mobile goodbye");
  }
};
