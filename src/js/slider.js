/* REVIEWS SLIDER */
/* if (document.querySelector(".reviews__slider") != null) {
  let reviewsSlider = new Swiper(".reviews__slider", {
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
} */

/* SHORT BLOG SLIDER */
/* if (document.querySelector(".short-blog__items") != null) {
  let shortBlogSlider = new Swiper(".short-blog__items", {
    slidesPerView: 1.1,
    spaceBetween: 23,
    direction: "horizontal",

    navigation: {
      enabled: false,
    },

    breakpoints: {
      768: {
        slidesPerView: 1.6,
        direction: "vertical",
      },
    },
  });
} */

$(document).ready(function () {
  if ($(".reviews__slider-body") != null) {
    $(".reviews__slider-body").slick({
      arrows: false,
      slidesToShow: 1.25,
      infinite: false,
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1.5,
          },
        },
      ],
    });
  }

  if ($(".short-blog__items-body") != null) {
    $(".short-blog__items-body").slick({
      arrows: false,
      slidesToShow: 1.1,
      infinite: false,
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            slidesToShow: 1.6,
            vertical: true,
            verticalSwiping: true,
            nextArrow: ".short-blog__title",
            prevArrow: ".short-blog__text",
          },
        },
      ],
    });
  }
});
