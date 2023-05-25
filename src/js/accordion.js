/* ABILITIES ITEM ACCORDION */
const abilitiesItems = document.querySelectorAll(".abilities__item");
const itemTogglers = document.querySelectorAll(".abilities__item-toggler");
const targetItems = document.querySelectorAll(".abilities__item-text-box");
const abilitiesTextItems = document.querySelectorAll(".abilities__item-text");

abilitiesItems.forEach((item) => {
  item.addEventListener("click", () => {
    let toggler = item.querySelector(".abilities__item-toggler");
    let targetItem = toggler.nextElementSibling; //text box

    if (targetItem.style.maxHeight) {
      toggler.classList.remove("is-active");
      targetItem
        .querySelector(".abilities__item-text")
        .classList.remove("is-visible");

      targetItems.forEach((item) => (item.style.maxHeight = null)); //reset all max height's
    } else {
      itemTogglers.forEach((toggler) => {
        toggler.classList.remove("is-active");
        abilitiesTextItems.forEach((textItem) => {
          textItem.classList.remove("is-visible");
        });
      });

      toggler.classList.add("is-active");
      targetItem
        .querySelector(".abilities__item-text")
        .classList.add("is-visible");

      targetItems.forEach((item) => (item.style.maxHeight = null)); //reset all max height's
      targetItem.style.maxHeight = targetItem.scrollHeight + "px"; // set max height as content height
    }
  });
});

/* SHORT BLOG ITEMS ACCORDION */
