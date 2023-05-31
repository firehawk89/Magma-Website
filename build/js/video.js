const videoOverlays = document.querySelectorAll(".video-box__video-overlay");
const videoBoxes = document.querySelectorAll(".video-box");
const shortPortfolioTitle = document.querySelector(".short-portfolio__title");

let videoContainer;
let video;
let videoText;

videoOverlays.forEach((overlay) => {
  overlay.addEventListener("click", (e) => {
    /* if user clicks on the play button */
    if (e.target === overlay.querySelector(".video-box__video-overlay-btn")) {
      videoContainer = overlay.previousElementSibling;
      video = videoContainer.querySelector(".video-box__video");
      videoText = overlay.nextElementSibling;
      if (window.matchMedia("(min-width: 768px)").matches) {
        if (shortPortfolioTitle != null) {
          shortPortfolioTitle.classList.add("is-hidden");
        }
      }
      if (videoText != null) {
        videoText.classList.add("is-hidden");
      }
      overlay.classList.add("is-hidden");

      /* fullscreen mode */
      if (video.classList.contains("video-fullscreen")) {
        if (video.requestFullScreen) {
          video.requestFullScreen();
        } else if (video.mozRequestFullScreen) {
          // Mozilla current API
          video.mozRequestFullScreen();
        } else if (video.webkitRequestFullScreen) {
          // Webkit current API
          video.webkitRequestFullScreen();
        } else if (video.webkitEnterFullScreen) {
          // This is the IOS Mobile edge case
          video.webkitEnterFullScreen();
        }
        video.play();
      } else {
        video.play();
      }

      overlay.addEventListener("click", (e) => {
        if (video.paused) {
          if (
            e.target === overlay.querySelector(".video-box__video-overlay-btn")
          ) {
            if (window.matchMedia("(min-width: 768px)").matches) {
              if (shortPortfolioTitle != null) {
                shortPortfolioTitle.classList.add("is-hidden");
              }
            }
            overlay.classList.add("is-hidden");
            if (videoText != null) {
              videoText.classList.add("is-hidden");
            }
            if (video.classList.contains("video-fullscreen")) {
              if (video.requestFullScreen) {
                video.requestFullScreen();
              } else if (video.mozRequestFullScreen) {
                // Mozilla current API
                video.mozRequestFullScreen();
              } else if (video.webkitRequestFullScreen) {
                // Webkit current API
                video.webkitRequestFullScreen();
              } else if (video.webkitEnterFullScreen) {
                // This is the IOS Mobile edge case
                video.webkitEnterFullScreen();
              }
              video.play();
            } else {
              video.play();
            }
          }
        } else {
          if (window.matchMedia("(min-width: 768px)").matches) {
            if (shortPortfolioTitle != null) {
              shortPortfolioTitle.classList.remove("is-hidden");
            }
          }
          overlay.classList.remove("is-hidden");
          if (videoText != null) {
            videoText.classList.remove("is-hidden");
          }
          video.pause();
        }
      });

      /* if video ended */
      video.addEventListener("ended", () => {
        if (window.matchMedia("(min-width: 768px)").matches) {
          if (shortPortfolioTitle != null) {
            shortPortfolioTitle.classList.remove("is-hidden");
          }
        }
        overlay.classList.remove("is-hidden");
        if (videoText != null) {
          videoText.classList.remove("is-hidden");
        }
      });

      document.addEventListener(
        "fullscreenchange",
        changeFullScreenHandler,
        false
      );
      document.addEventListener(
        "mozfullscreenchange",
        changeFullScreenHandler,
        false
      );
      document.addEventListener(
        "MSFullscreenChange",
        changeFullScreenHandler,
        false
      );
      document.addEventListener(
        "webkitfullscreenchange",
        changeFullScreenHandler,
        false
      );

      function changeFullScreenHandler() {
        if (
          !document.isFullScreen &&
          !document.webkitIsFullScreen &&
          !document.mozFullScreen &&
          !document.msFullscreenElement
        ) {
          if (window.matchMedia("(min-width: 768px)").matches) {
            if (shortPortfolioTitle != null) {
              shortPortfolioTitle.classList.remove("is-hidden");
            }
          }
          overlay.classList.remove("is-hidden");
          if (videoText != null) {
            videoText.classList.remove("is-hidden");
          }
          video.pause();
        } else {
          if (window.matchMedia("(min-width: 768px)").matches) {
            if (shortPortfolioTitle != null) {
              shortPortfolioTitle.classList.add("is-hidden");
            }
          }
          overlay.classList.add("is-hidden");
          if (videoText != null) {
            videoText.classList.add("is-hidden");
          }
          video.play();
        }
      }
    }
  });
});
