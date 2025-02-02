const swiper8 = new Swiper('.swiper-8', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,
   spaceBetween: 20,
   allowTouchMove: true,
   slidesPerView: '2',
   breakpoints: {
      0: {
         slidesPerView: 1,
      },
      480: {
         slidesPerView: 2,
      },
   },
   
   
   // Navigation arrows
   navigation: {
      nextEl: '.slider__arrow-right-8',
      prevEl: '.slider__arrow-left-8',
   },
});
const swiper9 = new Swiper('.swiper-9', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,
   spaceBetween: 20,
   allowTouchMove: true,
   slidesPerView: '2',
   breakpoints: {
      0: {
         slidesPerView: 1,
      },
      480: {
         slidesPerView: 2,
      },
   },
   
   
   // Navigation arrows
   navigation: {
      nextEl: '.slider__arrow-right-9',
      prevEl: '.slider__arrow-left-9',
   },
});
const swiper10 = new Swiper('.swiper-10', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,
   spaceBetween: 20,
   allowTouchMove: true,
   slidesPerView: '2',
   breakpoints: {
      0: {
         slidesPerView: 1,
      },
      1000: {
         slidesPerView: 2,
      },
   },
   
   
   // Navigation arrows
   navigation: {
      nextEl: '.slider__arrow-right-10',
      prevEl: '.slider__arrow-left-10',
   },
});

let caseItem = document.querySelectorAll('.header-cases__grid-item')

Array.from(caseItem).forEach(element => {
   element.onclick = () => {
      window.open('../case.html', '_self')
   }
})