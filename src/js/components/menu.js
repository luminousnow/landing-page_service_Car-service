import vars from "../_vars";

const burgerButtonToggler = function () {
  vars.burgerButton.classList.toggle("burger-button--isClosed");
  vars.burgerButton.classList.toggle("burger-button--isOpen");
  vars.bodyEl.classList.toggle("page__body--js-isLock");
  vars.navigation.classList.toggle("navigation--js-isVisible");
};

const menuLinkSwicher = function (e) {
  const hendledLink = e.target;
  vars.menuLinkList.forEach((linkElement) =>
    linkElement.classList.remove("nav__link--active")
  );

  hendledLink.classList.add("nav__link--active");
  console.log(hendledLink);
};

vars.burgerButton.addEventListener("click", burgerButtonToggler);
vars.menuLinkList.forEach((linkElement) => {
  linkElement.addEventListener("click", menuLinkSwicher);
});
