// TODO: PROJECTS LIST TOGGLE
// projectsList = document.querySelectorAll(".projects-list");
// projectsSection = document.querySelectorAll(".projects-section");

// const projectsToggle = (event) => {
//   const devProjects = document.querySelector(".development .projects-section");
//   const filmProjects = document.querySelector(".film .projects-section");
//   const photoProjects = document.querySelector(".photo .projects-section");

//   if (event.currentTarget.innerText === "Development") {
//     devProjects.classList.toggle("hidden");
//   }

//   if (event.currentTarget.innerText === "Film & Video") {
//     filmProjects.classList.toggle("hidden");
//   }

//   if (event.currentTarget.innerText === "Photography") {
//     photoProjects.classList.toggle("hidden");
//   }
// };

// projectsList.forEach((project) =>
//   project.addEventListener("click", projectsToggle)
// );

////////////////////////////////////////
// CODE BELOW FOR MASS PROJECT SWITCHING
////////////////////////////////////////

// SHOW/HIDE ALT NAVS
// const landingNav = document.querySelector("header");
// const sideNav = document.querySelector(".side-nav");
// const mobileNav = document.querySelector(".mobile-nav");

// const breakPointPercentage = 0.4;
// const breakPointHeight = window.innerHeight * breakPointPercentage;

// const navSwitch = (elements, status) => {
//   // enables single or multiple elements
//   const flatElements = [elements].flat();

//   flatElements.forEach((element) => {
//     if (status == "on") {
//       element.classList.add("active");
//     } else {
//       element.classList.remove("active");
//     }
//   });
// };

// window.addEventListener("scroll", (event) => {
//   if (scrollY > breakPointHeight) {
//     navSwitch(landingNav, "off");
//     navSwitch([sideNav, mobileNav], "on");
//   } else {
//     navSwitch(landingNav, "on");
//     navSwitch([sideNav, mobileNav], "off");
//   }
// });
