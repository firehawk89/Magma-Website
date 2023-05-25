new WOW().init();

/* SKILLS ITEMS ANIMATION */
const skillsItems = document.querySelectorAll(".skills__item");
let delay = 0;

for (let i = 0; i < skillsItems.length; i++) {
  skillsItems[i].setAttribute("data-wow-delay", `${delay}s`);
  delay += 0.3;
}
