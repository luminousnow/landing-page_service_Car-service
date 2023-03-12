import SmoothScroll from "smooth-scroll";
const headerHeight = document?.querySelector(".header").offsetHeight;
const scroll = new SmoothScroll("a[data-scroll]", { offset: headerHeight });
