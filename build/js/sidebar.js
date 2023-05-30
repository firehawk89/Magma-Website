const sideBar = document.querySelector(".services__side-bar");
const sideBarMenu = document.querySelector(".services__side-bar-list");
const sideBarLinks = document.querySelectorAll(".services__side-bar-link");
const itemSwitcher = document.querySelector(
  ".services__side-bar-item-switcher"
);
const serviceArticles = document.querySelectorAll(".services__article");

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

changeActiveElement();

/* STICKY SIDEBAR LOGIC */
if (window.matchMedia("(min-width: 768px)").matches) {
  /*
  const getArticlesOffsets = () => {
    const offsets = [];

    serviceArticles.forEach((article) => {
      offsets.push(article.offsetTop);
    });

    return offsets;
  };

  const articlesOffsets = getArticlesOffsets();
  console.log(articlesOffsets);

  window.addEventListener("mousewheel", (e) => {
    let scrollPosition = window.scrollY + 0; //- 500

    serviceArticles.forEach((article) => {
      if (scrollPosition >= article.offsetTop) {
        link.parentElement.classList.remove("is-active");
        if (
          article.getAttribute("id") === link.getAttribute("href").substring(1)
        ) {
          link.parentElement.classList.add("is-active");
          changeActiveElement();
        }
      }
    });*/
  /*  serviceArticles.forEach((article) => {
      if (scrollPosition >= article.offsetTop) {
        sideBarLinks.forEach((link) => {
          link.parentElement.classList.remove("is-active");
          if (
            article.getAttribute("id") ===
            link.getAttribute("href").substring(1)
          ) {
            link.parentElement.classList.add("is-active");
            changeActiveElement();
          }
        });
      }
    }); 
  });*/
  /* window.addEventListener("mousewheel", (e) => {
    let scrollPosition = window.scrollY + 0; //- 500

    serviceArticles.forEach((article) => {
      if (scrollPosition >= article.offsetTop) {
        sideBarLinks.forEach((link) => {
          link.parentElement.classList.remove("is-active");
          if (
            article.getAttribute("id") ===
            link.getAttribute("href").substring(1)
          ) {
            link.parentElement.classList.add("is-active");
            changeActiveElement();
          }
        });
      }
    });
  }); */
}

/* STICKY SIDEBAR LOGIC */
if (window.matchMedia("(min-width: 768px)").matches) {
  window.addEventListener("mousewheel", (e) => {
    let scrollPosition = window.pageYOffset; //- 500

    serviceArticles.forEach((article) => {
      if (scrollPosition >= article.offsetTop) {
        sideBarLinks.forEach((link) => {
          link.parentElement.classList.remove("is-active");
          if (
            article.getAttribute("id") ===
            link.getAttribute("href").substring(1)
          ) {
            link.parentElement.classList.add("is-active");
            changeActiveElement();
          }
        });
      }
    });
  });
}

/*
window.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");

      if (entry.intersectionRatio > 0) {
        changeActiveElement();
        document
          .querySelector(`.services__side-bar-link[href="#${id}"]`)
          .parentElement.classList.add("is-active");
      } else {
        changeActiveElement();
        document
          .querySelector(`.services__side-bar-link[href="#${id}"]`)
          .parentElement.classList.remove("is-active");
      }
    });
  });

  // Track all sections that have an `id` applied
  serviceArticles.forEach((article) => {
    observer.observe(article);
  });
});
*/
