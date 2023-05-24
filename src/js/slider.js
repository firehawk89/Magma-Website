/* REVIEWS SLIDER */
if (document.querySelector(".reviews__slider") != null) {
  new Swiper(".reviews__slider", {
    slidesPerView: 1.3,
    spaceBetween: 23,

    navigation: {
      enabled: false,
    },

    breakpoints: {
      992: {
        slidesPerView: 1,

        navigation: {
          enabled: true,
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },

      769: {
        slidesPerView: 1.6,
      },
    },
  });
}

/* BLOG SLIDER */
const homeBlogItemsContainer = document.querySelector(".short-blog__items");
/* const homeBlogItemsBody = document.querySelector(".home-blog__items-body");
const blogItems = document.querySelectorAll(".blog__item"); */

if (homeBlogItemsContainer != null) {
  if (window.matchMedia("(max-width: 767.98px)").matches) {
    /* slider initialization */
    /*     homeBlogItemsContainer.classList.add("swiper");
    homeBlogItemsBody.classList.add("swiper-wrapper");
    blogItems.forEach((item) => {
      item.classList.add("swiper-slide");
    }); */

    new Swiper(".short-blog__items", {
      slidesPerView: 1.1,
      spaceBetween: 23,
    });
  }
}
