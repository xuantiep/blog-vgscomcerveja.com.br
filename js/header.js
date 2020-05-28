const header = document.querySelector(".site-header");
const headerLogo = document.getElementById("header-logo");
const pageContent = document.querySelector(".page-content");

const SMALLER_CLASS = "smaller";
const HEADER_MIN_SIZE = 180;

function init() {
  checkScroll();
  window.addEventListener("scroll", function (e) {
    checkScroll();
  });
}

function checkScroll() {
  if (window.innerWidth >= 860) {
    var distanciaY = window.pageYOffset || document.documentElement.scrollTop;
    if (distanciaY >= HEADER_MIN_SIZE) {
      header.classList.add(SMALLER_CLASS);
      headerLogo.classList.add(SMALLER_CLASS);
      pageContent.classList.add(SMALLER_CLASS);
    } else {
      header.classList.remove(SMALLER_CLASS);
      headerLogo.classList.remove(SMALLER_CLASS);
      pageContent.classList.remove(SMALLER_CLASS);
    }
  }
}

window.addEventListener("load", init, false);
