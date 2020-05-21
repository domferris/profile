window.addEventListener("scroll", (event) => {
  console.log(scrollY);
  console.log(window.innerHeight);
});

$(window).scroll(function () {
  if ($(this).scrollTop() > window.innerHeight * 0.6) {
    $("header div").fadeOut();
  } else {
    $("header div").fadeIn();
  }
});
