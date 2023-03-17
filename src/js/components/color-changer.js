import vars from "../_vars";
const offset = 20;

const onScroll = function (e) {
  let scrollPosition = window.scrollY;

  if (scrollPosition > offset) {
    vars.header.classList.add("js-color-changer");
  } else {
    vars.header.classList.remove("js-color-changer");
  }
};

document.addEventListener("scroll", onScroll);
