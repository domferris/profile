// SMOOTH NAV SCROLLING
const navLinks = document.querySelectorAll('nav a[href*="#"');

navLinks.forEach((navLink) => {
  $(navLink).click(() => {
    $("html,body").animate(
      {
        scrollTop: $(navLink.getAttribute("href")).offset().top,
      },
      500
    );
  });
});
