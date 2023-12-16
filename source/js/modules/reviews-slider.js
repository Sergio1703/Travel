const reviewsSwiper = new window.Swiper('.reviews__slider', {
  loop: true,
  navigation: {
    nextEl: '.reviews__button--next',
    prevEl: '.reviews__button--prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
      // centeredSlides: true,
    },
    768: {
      slidesPerView: 'auto',
      spaceBetween: 32,
    },
    1200: {
      // initialSlide: 1,
      slidesPerView: 'auto',
      // slidesPerView: 'auto',
      spaceBetween: 120,
    },
  },
});

export { reviewsSwiper };
