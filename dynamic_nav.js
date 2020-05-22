window.addEventListener("scroll", (event) => {
  console.log(scrollY);
  console.log(window.innerHeight);

  // MAKE IT FADE IN/OUT AS PAGE SCROLLS USING OPACITY
  // const range = window.innerHeight;
});

$(window).scroll(function () {
  if ($(this).scrollTop() > window.innerHeight * 0.4) {
    $("header div").fadeOut();
  } else {
    $("header div").fadeIn();
  }
});
