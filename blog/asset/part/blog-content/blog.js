
var mySwiper = new Swiper('.sidebar-widget-class', {
  effect: 'cube',
  grabCursor: true,
  loop: true,
      autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var mySwiper2 = new Swiper('.sidebar-widget-profile', {
  effect: 'cube',
  grabCursor: true,
  loop: true,
  autoplay: {
      delay: 1000,
      disableOnInteraction: false
    },
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
