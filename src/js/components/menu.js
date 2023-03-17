import vars from "../_vars";

const burgerButtonToggler = function () {
  vars.burgerButton.classList.toggle("burger-button--isClosed");
  vars.burgerButton.classList.toggle("burger-button--isOpen");
  vars.bodyEl.classList.toggle("page__body--js-isLock");
  vars.navigation.classList.toggle("navigation--js-isVisible");
};

const menuLinkSwitcher = function (e) {
  const hendledLink = e.target;

  vars.menuLinkList.forEach((linkElement) =>
    linkElement.classList.remove("nav__link--active")
  );
  hendledLink.classList.add("nav__link--active");
  burgerButtonToggler();
};

const languageSwitcher = function (e) {
  const hendledLanguage = e.target;

  vars.languageList.forEach((language) =>
    language.classList.remove("language__item--active")
  );
  hendledLanguage.classList.add("language__item--active");
  burgerButtonToggler();
};

// Changed burger button when it`s cliked
vars.burgerButton.addEventListener("click", burgerButtonToggler);

// Changed decorate element for menu link element when it`s active
vars.menuLinkList.forEach((linkElement) => {
  linkElement.addEventListener("click", menuLinkSwitcher);
});

// Changed active language indicator
vars.languageList.forEach((el) =>
  el.addEventListener("click", languageSwitcher)
);
