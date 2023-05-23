const reviewsSlider = new Swiper(".reviews__slider", {
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
