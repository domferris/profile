// SMOOTH CLICK SCROLLING
const navLinks = document.querySelectorAll('nav a[href*="#"]');
const portfolioLink = document.querySelector(".portfolio-link");

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

$(portfolioLink).click(() => {
  $("html,body").animate(
    {
      scrollTop: $(portfolioLink.getAttribute("href")).offset().top,
    },
    500
  );
});
