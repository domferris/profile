window.addEventListener("scroll", (event) => {
  console.log(scrollY);
  console.log(window.innerHeight);

  // MAKE IT FADE IN/OUT AS PAGE SCROLLS USING OPACITY
  // const range = window.innerHeight;
});

$(window).scroll(function () {
  if ($(this).scrollTop() > window.innerHeight * 0.6) {
    $("header div").fadeOut();
    $(".alt-nav").fadeIn();
  } else {
    $("header div").fadeIn();
    $(".alt-nav").fadeOut();
  }
});
