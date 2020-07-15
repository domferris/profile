// CONTRIBUTIONS NUMBER RETRIEVAL VIA GITHUB SCRAPE
const urlGitHub = window.location.href;
let backendGitHub;
if (urlGitHub.includes("localhost") || urlGitHub.includes("127.0.0.1")) {
  backendGitHub = "http://localhost:3000/scrape_github";
} else {
  backendGitHub = "https://domferris.herokuapp.com/scrape_github";
}

fetch(backendGitHub)
  .then((response) => response.json())
  .then((data) => {
    const contributionsNum = document.querySelector(".contributions-num");
    contributionsNum.innerHTML = data.contributionsNum;
    $(".loader").fadeOut(100);
    $(".loader-inner").fadeOut(400);
    $(".loader-wrapper").fadeOut(750);
  });
