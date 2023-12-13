
var mySwiper = new Swiper('.sidebar-widget-class', {
  grabCursor: true,
  loop: true,
      autoplay: {
      delay: 2000,
      disableOnInteraction: false
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
    disableOnInteraction: false,
    reverseDirection: false
  },
});

// Mengatur interval untuk mengganti arah
var reverse = false;
setInterval(function() {
  reverse = !reverse;
  mySwiper2.autoplay.stop();
  mySwiper2.params.autoplay.reverseDirection = reverse;
  mySwiper2.autoplay.start();
}, 5000); // Asumsikan interval untuk berganti arah setiap 5 detik


var mySwiper3 = new Swiper('.author-wrap', {
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
