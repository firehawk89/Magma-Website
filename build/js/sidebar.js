const sideBarMenu = document.querySelector(".services__side-bar-list");
const sideBarItems = document.querySelectorAll(".services__side-bar-item");
const itemSwitcher = document.querySelector(
  ".services__side-bar-item-switcher"
);

let menuDistanceFromPageTop = sideBarMenu.getBoundingClientRect().top;

sideBarItems.forEach((el) => {
  let elementDistanceFromPageTop = el.getBoundingClientRect().top;

  let elementDistanceFromMenuTop =
    elementDistanceFromPageTop - menuDistanceFromPageTop;

  if (el.classList.contains("is-active")) {
    itemSwitcher.style.top = `${elementDistanceFromMenuTop}px`;
  }

  el.addEventListener("click", () => {
    sideBarItems.forEach((el) => {
      el.classList.remove("is-active");
    });

    el.classList.add("is-active");

    itemSwitcher.style.top = `${elementDistanceFromMenuTop}px`;
  });
});
