const advantagesSlider = document.querySelector('.advantages__slider');
let advantagesSwiper;

const initAdvantagesSlider = () => {
  if (advantagesSlider && window.innerWidth >= 1200) {
    advantagesSwiper = new window.Swiper(advantagesSlider, {
      loop: true,
      navigation: {
        nextEl: '.advantages__button--next',
        prevEl: '.advantages__button--prev',
      },

      centeredSlides: true,
      breakpoints: {
        1200: {
          initialSlide: 2,
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });
  }
};

const convertSwiper = () => {
  if (window.innerWidth < 1200 && advantagesSwiper) {
    advantagesSwiper.destroy();
    document.querySelector('.advantages__slider').style.display = 'block';
  } else if (advantagesSwiper && !advantagesSwiper.initialized) {
    initAdvantagesSlider();
  }
};

const initResize = () => {
  convertSwiper();
};

window.addEventListener('resize', initResize);

export { initAdvantagesSlider, initResize };

// const advantagesSwiper = new window.Swiper('.advantages__slider', {
//   loop: true,
//   navigation: {
//     nextEl: '.advantages__button--next',
//     prevEl: '.advantages__button--prev',
//   },
//   breakpoints: {
//     1200: {
//       initialSlide: 2,
//       slidesPerView: 3,
//       spaceBetween: 30,
//     },
//   },
// });

// export { advantagesSwiper };

// const Swiper = window.Swiper;
// const slider = document.querySelector('.advantages__slider');
// const breakpointDesktop = window.innerWidth;
// let swiper;
// let desktop = window.matchMedia('(min-width: 1200px)');

// export const benefitsSlider = () => {
//   if (desktop.matches) {
//     swiper =
//       slider &&
//       new Swiper('.advantages__slider', {
//         navigation: {
//           nextEl: '.advantages__button--next',
//           prevEl: '.advantages__button--prev',
//         },
//         simulateTouch: false,
//         breakpoints: {
//           1200: {
//             initialSlide: 2,
//             slidesPerView: 3,
//             spaceBetween: 30,
//           },
//         },
//         loop: true,
//       });
//   } else {
//     swiper.destroy();
//   }
// };

// let desktop = window.matchMedia('(min-width: 1200px)');
// const Swiper = window.Swiper;
// const slider = document.querySelector('.benefits__slider');
// let swiper;

// const initSlider = () => {
//   if (desktop.matches) {
//     swiper = new Swiper('.advantages__slider', {
//       loop: true,
//       navigation: {
//         nextEl: '.advantages__button--next',
//         prevEl: '.advantages__button--prev',
//       },
//       breakpoints: {
//         1200: {
//           initialSlide: 2,
//           slidesPerView: 3,
//           spaceBetween: 30,
//         },
//       },
//     });
//   } else {
//     if (swiper) {
//       swiper.destroy();
//     }
//   }
// };
// export { initSlider };
