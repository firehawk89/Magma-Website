const benefitsItems = document.querySelectorAll(".animate-list__item");

/* about page benefits items animation  */
benefitsItems.forEach((benefitsItem) => {
  if (window.matchMedia("(min-width: 768px").matches) {
    benefitsItem.classList.add("wow", "animate__fadeIn", "animate__animated");
  } else {
    benefitsItem.classList.add(
      "wow",
      "animate__fadeInLeft",
      "animate__animated"
    );
  }
});
