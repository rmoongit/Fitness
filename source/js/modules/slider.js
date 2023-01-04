import Swiper, {Navigation} from 'swiper';

const swiperCards = new Swiper('.cards__slider', {
  // Optional parameters
  modules: [Navigation],
  loop: true,
  spaceBetween: 40,
  grabCursor: true,

  effect: 'cube',
  cubeEffect: {
    slideShadows: false,
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    // when window width is >= 768px
    767: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 1366px
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.cards__button-next',
    prevEl: '.cards__button-prev',
  },

});

const swiperReviews = new Swiper('.reviews__slider', {
  // Optional parameters
  modules: [Navigation],
  loop: true,
  slidesPerView: 1,
  spaceBetween: 40,
  grabCursor: true,

  effect: 'cube',
  cubeEffect: {
    slideShadows: false,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.reviews__button-next',
    prevEl: '.reviews__button-prev',
  },

});

export default {swiperCards, swiperReviews};
