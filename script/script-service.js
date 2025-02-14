let swiperSlide4 = document.querySelectorAll('.swiper-slide-4')

Array.from(swiperSlide4).forEach(el => {
   el.onclick = () => {
      window.open('service.html', '_self')
   }
})

const swiper4 = new Swiper('.swiper-4', {
   // Optional parameters
   direction: 'horizontal',
   loop: false,
   spaceBetween: 20,
   allowTouchMove: true,
   slidesPerView: 'auto',
   // centeredSlides: true,
   breakpoints: {
      0: {
         slidesPerView: 1,
      },
      580: {
         slidesPerView: 2,
      },
      868: {
         slidesPerView: 3,
      },
      1100: {
         slidesPerView: 4,
      },
   },
   
   
   // Navigation arrows
   navigation: {
      nextEl: '.slider__arrow-right-4',
      prevEl: '.slider__arrow-left-4',
   },
});