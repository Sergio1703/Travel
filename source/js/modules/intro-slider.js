const introSwiper = new window.Swiper('.intro__slider', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  pagination: {
    el: '.intro__pagination-wrapper',
    clickable: true,
  },
  // keyboard: true,
});

export { introSwiper };
