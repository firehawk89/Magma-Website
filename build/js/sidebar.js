const sideBar = document.querySelector(".services__side-bar");
const sideBarMenu = document.querySelector(".services__side-bar-list");
const sideBarLinks = document.querySelectorAll(".services__side-bar-link");
const itemSwitcher = document.querySelector(
  ".services__side-bar-item-switcher"
);
const serviceArticles = document.querySelectorAll(".services__article");
const scrollTopBtn = document.querySelector(".scroll-top");

/* ACTIVE SIDE BAR ITEM */
const changeActiveElement = () => {
  let menuDistanceFromPageTop = sideBarMenu.getBoundingClientRect().top;

  sideBarLinks.forEach((el) => {
    let elementDistanceFromPageTop =
      el.parentElement.getBoundingClientRect().top;
    let elementDistanceFromMenuTop =
      elementDistanceFromPageTop - menuDistanceFromPageTop;

    if (el.parentElement.classList.contains("is-active")) {
      itemSwitcher.style.top = `${elementDistanceFromMenuTop}px`;
    }

    el.addEventListener("click", (e) => {
      sideBarLinks.forEach((el) => {
        el.parentElement.classList.remove("is-active");
      });

      el.parentElement.classList.add("is-active");
      itemSwitcher.style.top = `${elementDistanceFromMenuTop}px`;
    });
  });
};

/* SIDEBAR ANIMATION */
if (window.matchMedia("(min-width: 768.02px)").matches) {
  const sideBarItems = document.querySelectorAll(".services__side-bar-item");
  let headerHeight = document.querySelector(".header").offsetHeight;

  const setActiveItem = (el) => {
    sideBarItems.forEach((item) => item.classList.remove("is-active"));
    el.classList.add("is-active");
    changeActiveElement();
  };

  sideBarLinks.forEach((link) =>
    link.addEventListener("click", function () {
      setActiveItem(this.parentElement);
      changeActiveElement();
    })
  );

  window.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY;

    serviceArticles.forEach((article) => {
      let articleTopOffset = article.offsetTop;
      let articleHeight = article.offsetHeight;
      let articleId = article.getAttribute("id");

      if (
        scrollPosition >= articleTopOffset + headerHeight &&
        scrollPosition < articleTopOffset + articleHeight + headerHeight
      ) {
        const target = document.querySelector(
          `[href='#${articleId}']`
        ).parentElement;
        setActiveItem(target);
      }
    });
  });
}

/* SCROLL TOP (TO SIDEBAR) BUTTON */
if (window.matchMedia("(max-width: 768px)").matches) {
  changeActiveElement();

  let graphicArticleDistanceFromPageTop;

  window.addEventListener("scroll", () => {
    graphicArticleDistanceFromPageTop =
      document
        .querySelector(".services__article--graphic")
        .getBoundingClientRect().top -
      document.querySelector(".header").offsetHeight;

    if (graphicArticleDistanceFromPageTop < 0) {
      scrollTopBtn.classList.add("is-visible");
    } else {
      scrollTopBtn.classList.remove("is-visible");
    }
  });
}
