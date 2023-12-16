const toursSwiper = new window.Swiper('.tours__slider', {
  navigation: {
    nextEl: '.tours__button--next',
    prevEl: '.tours__button--prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

export { toursSwiper };
