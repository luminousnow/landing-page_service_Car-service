const header = document.querySelector("header");
const offset = 20;

const onScroll = function (e) {
  let scrollPosition = window.scrollY;
  console.log("TCL: onScroll -> scrollPosition", scrollPosition);

  if (scrollPosition > offset) {
    header.classList.add("js-color-changer");
  } else {
    header.classList.remove("js-color-changer");
  }
};

document.addEventListener("scroll", onScroll);
