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
  /* REVIEWS SLIDER */
  if ($(".reviews__slider-body") != null) {
    $(".reviews__slider-body").slick({
      //arrows: true,
      arrows: false,
      slidesToShow: 1.25,
      infinite: false,
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            arrows: true,
            slidesToShow: 1,
            prevArrow: ".reviews__btn-prev",
            nextArrow: ".reviews__btn-next",
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

  /* HOME BLOG SLIDER */
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
            slidesToShow: 1.5,
            vertical: true,
            verticalSwiping: true,
            prevArrow: ".short-blog__btn-prev",
            nextArrow: ".short-blog__btn-next",
          },
        },
      ],
    });

    /* ACTIVE/DISABLED HOME BLOG ARROWS */
    $(".short-blog__items-body").on(
      "afterChange",
      function (event, slick, currentSlide) {
        console.log(slick, currentSlide);
        if (slick.$slides.length - 1 == currentSlide) {
          $(".short-blog__btn-next-box").addClass("is-hidden");
        } else if (currentSlide == 0) {
          $(".short-blog__btn-prev-box").addClass("is-hidden");
        } else {
          $(".short-blog__btn-next-box").removeClass("is-hidden");
          $(".short-blog__btn-prev-box").removeClass("is-hidden");
        }
      }
    );
  }

  /* HOME PORTFOLIO VIDEO SLIDER */
  if ($(".short-portfolio__items") != null) {
    $(".short-portfolio__items").slick({
      arrows: false,
      slidesToShow: 1,
      infinite: false,
    });
  }
});
