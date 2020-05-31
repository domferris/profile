// EXPAND/COLLAPSE MOBILE NAV
const mobileNavToggleBtn = document.querySelector(".mobile-toggle");
const mobileNav = document.querySelector(".mobile-nav");

mobileNavToggleBtn.addEventListener("click", (event) => {
  mobileNav.classList.toggle("open");
});

// WHEN MOBILE NAV LINK IS CLICKED OR USER SCROLLS, CLOSE MOBILE NAV
const mobileNavLinks = document.querySelectorAll('nav.mobile-nav a[href*="#"]');

mobileNavLinks.forEach((navLink) => {
  navLink.addEventListener("click", (event) => {
    mobileNav.classList.remove("open");

    $("html,body").animate(
      {
        scrollTop: $(navLink.getAttribute("href")).offset().top,
      },
      500
    );
  });
});

// IF USER SCROLLS WHILE MOBILE NAV IS OPEN, CLOSE MOBILE NAV
window.addEventListener("scroll", (event) => {
  if (mobileNav.classList.contains("open")) {
    mobileNav.classList.remove("open");
  }
});
