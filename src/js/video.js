const videoOverlays = document.querySelectorAll(".video-box__video-overlay");
const videoBoxes = document.querySelectorAll(".video-box");
const shortPortfolioTitle = document.querySelector(".short-portfolio__title");

let video;
let videoText;

videoOverlays.forEach((overlay) => {
  overlay.addEventListener("click", (e) => {
    /* if user clicks on the play button */
    if (e.target === overlay.querySelector(".video-box__video-overlay-btn")) {
      video = overlay.previousElementSibling;
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
        video.requestFullscreen();
        video.play();
      } else {
        video.play();
      }

      overlay.addEventListener("click", () => {
        if (video.paused) {
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
            video.requestFullscreen();
            video.play();
          } else {
            video.play();
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
        videoText.classList.remove("is-hidden");
      });
    }
  });
});

/*
let videoBtn = document.querySelector(".video__overlay"),
  video = document.querySelector("video"),
  title = document.querySelector(".content__title");

videoBtn.addEventListener("click", (e) => {
  video.play();
  //video.requestFullscreen();
  title.style.transform = "translate(-150%, 0)";
  videoBtn.classList.add("hidden");
});

video.addEventListener("click", (e) => {
  if (video.paused) {
    title.style.transform = "translate(-150%, 0)";
    videoBtn.classList.add("hidden");
    video.play();
  } else {
    title.style.transform = "translate(0, 0)";
    videoBtn.classList.remove("hidden");
    video.pause();
  }
});

video.addEventListener("ended", () => {
  title.style.transform = "translate(0, 0)";
  videoBtn.classList.remove("hidden");
});
*/
