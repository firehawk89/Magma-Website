const videoOverlays = document.querySelectorAll(".video-box__video-overlay");
const videoBoxes = document.querySelectorAll(".video-box");
//const videoText = videoBox.querySelector(".video-box__video-text");
let video;
let videoText;

videoOverlays.forEach((overlay) => {
  overlay.addEventListener("click", (e) => {
    video = overlay.previousElementSibling;
    videoText = overlay.nextElementSibling;
    video.play();
    videoText.classList.add("is-hidden");
  });
});

/*
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
