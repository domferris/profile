// TODO: PROJECTS LIST TOGGLE
projectsList = document.querySelectorAll(".projects-list");
projectsSection = document.querySelectorAll(".projects-section");

const projectsToggle = (event) => {
  const devProjects = document.querySelector(".development .projects-section");
  const filmProjects = document.querySelector(".film .projects-section");
  const photoProjects = document.querySelector(".photo .projects-section");

  if (event.currentTarget.innerText === "Development") {
    devProjects.classList.toggle("hidden");
  }

  if (event.currentTarget.innerText === "Film & Video") {
    filmProjects.classList.toggle("hidden");
  }

  if (event.currentTarget.innerText === "Photography") {
    photoProjects.classList.toggle("hidden");
  }
};

projectsList.forEach((project) =>
  project.addEventListener("click", projectsToggle)
);
