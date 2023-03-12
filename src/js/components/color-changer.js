const header = document.querySelector("header");
const offset = 20;

const onScroll = function (e) {
  let scrollPosition = window.scrollY;

  if (scrollPosition > offset) {
    header.classList.add("js-color-changer");
  } else {
    header.classList.remove("js-color-changer");
  }
};

document.addEventListener("scroll", onScroll);
