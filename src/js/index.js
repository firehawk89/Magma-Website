/* Mobile Menu */
const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");

menuIcon.addEventListener("click", () => {
  if (document.body.style.overflow === "hidden") {
    document.body.removeAttribute("style");
  } else {
    document.body.style.overflow = "hidden";
  }

  menuIcon.classList.toggle("open");
  menu.classList.toggle("show");
});
