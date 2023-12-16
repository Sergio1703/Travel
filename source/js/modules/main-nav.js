import '../utils/scroll-lock';
import '../utils/focus-lock';

let navMain = document.querySelector('.main-nav');
let mainHeaderWrapper = document.querySelector('.main-header__wrapper');
let navToggle = document.querySelector('.main-header__toggle');
let mainHeaderLogo = document.querySelector('.main-header__logo-link');
let phoneNumberLink = document.querySelector(
  '.main-header__contact-number-link'
);
const body = document.querySelector('body');
let mainNavLink = document.querySelectorAll('.main-nav__link');

// navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    mainHeaderWrapper.classList.add('main-header__wrapper--switch');
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    navToggle.classList.add('main-header__toggle--switch');
    mainHeaderLogo.classList.add('main-header__logo--switch');
    phoneNumberLink.classList.add('main-header__contact-number-link--switch');
    // body.classList.add('scroll-lock');
    body.classList.add('overlay');
    window.scrollLock.disableScrolling();
    window.focusLock.lock('main-header__wrapper', false);
  } else {
    mainHeaderWrapper.classList.remove('main-header__wrapper--switch');
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    navToggle.classList.remove('main-header__toggle--switch');
    mainHeaderLogo.classList.remove('main-header__logo--switch');
    phoneNumberLink.classList.remove(
      'main-header__contact-number-link--switch'
    );
    // body.classList.remove('scroll-lock');
    body.classList.remove('overlay');
    window.scrollLock.enableScrolling();
    window.focusLock.unlock();
  }
});

mainNavLink.forEach((button) => {
  button.addEventListener('click', function () {
    mainHeaderWrapper.classList.remove('main-header__wrapper--switch');
    // body.classList.remove('scroll-lock');
    window.scrollLock.enableScrolling();
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    navToggle.classList.remove('main-header__toggle--switch');
    mainHeaderLogo.classList.remove('main-header__logo--switch');
    phoneNumberLink.classList.remove(
      'main-header__contact-number-link--switch'
    );
    body.classList.remove('overlay');
  });
});
