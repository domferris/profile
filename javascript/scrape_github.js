// CONTRIBUTIONS NUMBER RETRIEVAL VIA GITHUB SCRAPE
const backend = "http://localhost:3000/scrape_github";

fetch(backend)
  .then((response) => response.json())
  .then((data) => {
    const contributionsNum = document.querySelector(".contributions-num");
    contributionsNum.innerHTML = data.contributionsNum;
  });
