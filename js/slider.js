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
      slidesToShow: 1.1,
      infinite: false,
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            prevArrow: ".short-portfolio__btn-prev",
            nextArrow: ".short-portfolio__btn-next",
          },
        },
      ],
    });
  }

  /* WORK PAGE SLIDER */
  if ($(".work__other-items") != null) {
    $(".work__other-items").slick({
      arrows: false,
      slidesToShow: 1.1,
      infinite: false,
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2.2,
          },
        },
      ],
    });
  }

  /* WORK ITEMS MOUSE WHEEL SCROLL */
  if (window.matchMedia("(min-width: 768px)").matches) {
    if ($(".work__other-items") != null) {
      $(".work__other-items").on("wheel", function (e) {
        e.preventDefault();
        if (e.originalEvent.deltaY < 0) {
          $(this).slick("slickNext");
        } else {
          $(this).slick("slickPrev");
        }
      });
    }
  }

  /* TEAM SLIDER */
  if (window.matchMedia("(max-width: 768px)").matches) {
    if ($(".team__members-body") != null) {
      $(".team__members-body").slick({
        arrows: true,
        slidesToShow: 1,
        infinite: false,
        prevArrow: ".team__btn-prev",
        nextArrow: ".team__btn-next",
      });
    }
  }
});
