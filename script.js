// Initializing AOS
AOS.init({
  once: true,
  duration: 2000,
  delay: 200,
});

// Initializing Swiper
const swiper = new Swiper(".mySwiper", {
  spaceBetween: 20,
  loop: true,
  speed: 1000,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    736: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
