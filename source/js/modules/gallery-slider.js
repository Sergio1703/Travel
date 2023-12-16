const gallerySwiper = new window.Swiper('.gallery__slider', {
  loop: true,
  navigation: {
    nextEl: '.gallery__button--next',
    prevEl: '.gallery__button--prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 3,
    },
    768: {
      slidesPerView: 'auto',
      spaceBetween: 4,
    },
    1200: {
      slidesPerView: 'auto',
      spaceBetween: 4,
    },
  },
  // slidesPerView: 'auto',
  // spaceBetween: 4,
});

export { gallerySwiper };
