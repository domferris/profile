// CONTRIBUTIONS NUMBER RETRIEVAL VIA GITHUB SCRAPE
const backendGitHub = "https://domferris.herokuapp.com/scrape_github";

fetch(backendGitHub)
  .then((response) => response.json())
  .then((data) => {
    const contributionsNum = document.querySelector(".contributions-num");
    contributionsNum.innerHTML = data.contributionsNum;
  });
