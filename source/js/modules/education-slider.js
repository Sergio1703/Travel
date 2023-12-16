const educationSwiper = new window.Swiper('.education__slider', {
  navigation: {
    nextEl: '.education__button--next',
    prevEl: '.education__button--prev',
  },
  breakpoints: {
    320: {
      initialSlide: 2,
      slidesPerView: 1,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 19,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 18,
    },
  },
  // slidesPerView: 4,
  // spaceBetween: 18,
});

export { educationSwiper };
