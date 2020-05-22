window.addEventListener("scroll", (event) => {
  console.log(scrollY);
  console.log(window.innerHeight);

  // MAKE IT FADE IN/OUT AS PAGE SCROLLS USING OPACITY
  // const range = window.innerHeight;
});

$(window).scroll(function () {
  if ($(this).scrollTop() > window.innerHeight * 0.6) {
    $("header div").fadeOut();
    // $(".side-nav").fadeIn();
    $(".side-nav").fadeIn();
  } else {
    $("header div").fadeIn();
    // $(".side-nav").fadeOut();
    $(".side-nav").fadeOut();
  }
});
