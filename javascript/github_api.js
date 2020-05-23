// REPO NUMBER RETRIEVAL VIA GITHUB API
const githubAPIUrl = "https://api.github.com/users/domferris";

fetch(githubAPIUrl)
  .then((response) => response.json())
  .then((data) => {
    const reposNum = document.querySelector(".repos-num");
    reposNum.innerHTML = data.public_repos;
  });
