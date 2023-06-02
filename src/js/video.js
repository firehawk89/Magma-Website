const videoOverlays = document.querySelectorAll(".video-box__video-overlay");
const videoBoxes = document.querySelectorAll(".video-box");
const shortPortfolioTitle = document.querySelector(".short-portfolio__title");

let videoContainer;
let video;
let videoText;
let overlayBtn;

const removeVideoOverlay = (overlay) => {
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
};

const addVideoOverlay = (overlay) => {
  videoContainer = overlay.previousElementSibling;
  video = videoContainer.querySelector(".video-box__video");
  videoText = overlay.nextElementSibling;

  if (window.matchMedia("(min-width: 768px)").matches) {
    if (shortPortfolioTitle != null) {
      shortPortfolioTitle.classList.remove("is-hidden");
    }
  }
  if (videoText != null) {
    videoText.classList.remove("is-hidden");
  }
  overlay.classList.remove("is-hidden");
};

videoOverlays.forEach((overlay) => {
  videoContainer = overlay.previousElementSibling;
  video = videoContainer.querySelector(".video-box__video");
  videoText = overlay.nextElementSibling;
  videoFullscreen = videoContainer.querySelector(
    ".video-box__video.video-fullscreen"
  );

  /* click when video paused */
  overlay.addEventListener("click", (e) => {
    overlayBtn = overlay.querySelector(".video-box__video-overlay-btn");
    /* if user clicks on the play button */
    if (e.target === overlayBtn) {
      removeVideoOverlay(overlay);

      /* fullscreen mode */
      if (video.classList.contains("video-fullscreen")) {
        if (video.requestFullScreen) {
          video.requestFullScreen();
        } else if (video.mozRequestFullScreen) {
          video.mozRequestFullScreen();
        } else if (video.webkitRequestFullScreen) {
          video.webkitRequestFullScreen();
        } else if (video.webkitEnterFullScreen) {
          // IOS Mobile edge case
          video.webkitEnterFullScreen();
        }
        video.play();
      } else {
        video.play();
      }

      /* click when video played */
      overlay.addEventListener("click", (e) => {
        if (video.paused) {
          if (e.target === overlayBtn) {
            removeVideoOverlay(overlay);
            video.play();
          }
        } else {
          addVideoOverlay(overlay);
          /* if (video.classList.contains("video-fullscreen")) {
			  if (document.exitFullscreen) {
				document.exitFullscreen();
			  } else if (document.webkitExitFullscreen) {
				document.webkitExitFullscreen();
			  } else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			  } else if (document.msExitFullscreen) {
				document.msExitFullscreen();
			  }
			} */
          video.pause();
        }
      });

      /* if video ended */
      video.addEventListener("ended", () => {
        video.currentTime = 0;
        if (
          !document.fullscreenElement &&
          !document.webkitIsFullScreen &&
          !document.mozFullScreen &&
          !document.msFullscreenElement
        ) {
          addVideoOverlay(overlay);
        }
      });

      video.addEventListener(
        "fullscreenchange",
        changeFullScreenHandler,
        false
      );
      video.addEventListener(
        "mozfullscreenchange",
        changeFullScreenHandler,
        false
      );
      video.addEventListener(
        "MSFullscreenChange",
        changeFullScreenHandler,
        false
      );
      video.addEventListener(
        "webkitfullscreenchange",
        changeFullScreenHandler,
        false
      );

      function changeFullScreenHandler() {
        if (
          !document.fullscreenElement &&
          !document.webkitIsFullScreen &&
          !document.mozFullScreen &&
          !document.msFullscreenElement
        ) {
          /*           if (video.exitFullscreen) {
            video.exitFullscreen();
          } else if (video.webkitExitFullscreen) {
            video.webkitExitFullscreen();
          } else if (video.mozCancelFullScreen) {
            video.mozCancelFullScreen();
          } else if (video.msExitFullscreen) {
            video.msExitFullscreen();
          } */

          /* exit fullscreen mode */
          video.controls = false;
          addVideoOverlay(overlay);
          video.pause();
        } else {
          if (video.requestFullScreen) {
            video.requestFullScreen();
          } else if (video.mozRequestFullScreen) {
            video.mozRequestFullScreen();
          } else if (video.webkitRequestFullScreen) {
            video.webkitRequestFullScreen();
          } else if (video.webkitEnterFullScreen) {
            // IOS Mobile edge case
            video.webkitEnterFullScreen();
          }
          /* enter fullscreen mode */

          video.controls = true;
          removeVideoOverlay(overlay);
          video.play();
        }
      }
    }
  });

  if (videoFullscreen != null) {
    videoFullscreen.addEventListener("pause", () => {
      addVideoOverlay(overlay);
    });
  }
});
