// TODO: PROJECTS LIST TOGGLE
projectsList = document.querySelectorAll(".projects-list");
projectsSection = document.querySelectorAll(".projects-section");

const projectsToggle = (event) => {
  console.log(event);
  // if proj section is child of proj list, toggle hidden on proj section
};

projectsList.forEach((project) =>
  project.addEventListener("click", projectsToggle)
);
