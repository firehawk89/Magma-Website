/* PRELOADER */
const preloader = document.querySelector(".preloader");
document.documentElement.classList.add("is-locked");
document.body.classList.add("is-locked");

document.addEventListener("DOMContentLoaded", function () {
  document.documentElement.classList.remove("is-locked");
  document.body.classList.remove("is-locked");
  fadeOut(preloader, 200);
  //$("#preloader").fadeOut(200);
});

/* PRELOADER FADE OUT ANIMATION */
function fadeOut(element, duration) {
  var opacity = 1;
  var interval = 10; // interval in milliseconds, transition should be same length
  var steps = Math.ceil(duration / interval);
  var delta = 1 / steps;

  var timer = setInterval(function () {
    opacity -= delta;
    element.style.opacity = opacity;

    if (opacity <= 0) {
      clearInterval(timer);
      element.style.opacity = 0;
      element.style.display = "none";
    }
  }, interval);
}

/* SCROLL PADDING FOR FIXED HEADER */
const headerHeight = document.querySelector(".header").offsetHeight;
document.documentElement.style.setProperty(
  "--scroll-padding",
  headerHeight + "px"
);

/* MOBILE MENU */
const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");
const menuAnchors = document.querySelectorAll(".menu__link");
const menuIdAnchors = [];

const toggleMenu = () => {
  document.body.classList.toggle("is-locked");
  menuIcon.classList.toggle("is-active");
  menu.classList.toggle("is-opened");
};

menuAnchors.forEach((anchor) => {
  if (anchor.getAttribute("href").includes("#")) {
    menuIdAnchors.push(anchor);
  }
});

menuIdAnchors.forEach((idAnchor) => {
  idAnchor.addEventListener("click", toggleMenu);
});

menuIcon.addEventListener("click", toggleMenu);
