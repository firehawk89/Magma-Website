/* Mobile Menu */
const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");

menuIcon.addEventListener("click", () => {
  document.body.classList.toggle("is-locked");
  menuIcon.classList.toggle("is-active");
  menu.classList.toggle("is-opened");
});

const headerHeight = document.querySelector(".header").offsetHeight;

document.documentElement.style.setProperty(
  "--scroll-padding",
  headerHeight + "px"
);
