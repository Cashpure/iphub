



$(function () {
   $('.burger').on('click', function () {
      $(this).toggleClass('burger--active')
      $('.header__top-nav').toggleClass('header__top-nav--opened')
   })

   $('.swiper-slide').hover(function () {
      $(this).children('.slide__arrow').toggleClass('slide__arrow--active')
      $(this).children('.slide__inner').toggleClass('slide__inner--active')
      $(this).children('.slide__inner').children('.slide__title').toggleClass('slide__title--active')
      // $(this).children('.slide__inner').children('.slide__text').slideToggle('fast')
      $(this).children('.slide__inner').children('.slide__text').toggleClass('slide__text--active')
   })
   $('.header-services__grid-item').hover(function () {
      $(this).children('.grid-item__arrow').toggleClass('grid-item__arrow--active')
      $(this).children('.grid-item__inner').toggleClass('grid-item__inner--active')
      $(this).children('.grid-item__inner').children('.grid-item__title').toggleClass('grid-item__title--active')
      // $(this).children('.slide__inner').children('.slide__text').slideToggle('fast')
      $(this).children('.grid-item__inner').children('.grid-item__text').toggleClass('grid-item__text--active')
   })

   $('.faq__main-answer').on('click', function () {
      $('.faq__main-answer').removeClass('faq__main-answer--active')
      $(this).toggleClass('faq__main-answer--active')
   })

   $('#next').on('click', function (e) {
      e.preventDefault()
   })

   $('#prev').on('click', function (e) {
      e.preventDefault()
   })

   $('.forum__button-prev').on('click', function () {
      $(this).addClass('forum__button--active')
      $('.forum__button-next').removeClass('forum__button--active')
   })
   $('.forum__button-next').on('click', function () {
      $(this).addClass('forum__button--active')
      $('.forum__button-prev').removeClass('forum__button--active')
   })

   $(window).on('resize', function () {
      if ($(window).width() >= 985) {
         $('.slider__arrow-right').addClass('slider__arrow-right--hover')
         $('.slider__arrow-left').addClass('slider__arrow-left--hover')
         $('.button').addClass('button__hover')
      } else {
         $('.slider__arrow-right').removeClass('slider__arrow-right--hover')
         $('.slider__arrow-left').removeClass('slider__arrow-left--hover')
         $('.button').removeClass('button__hover')
      }
   })

   $(".footer__main-link--nav").on("click", function (e) {
      var anchor = $(this);
      $('html, body').stop().animate({
         scrollTop: $(anchor.attr('href')).offset().top
      }, 777);
      e.preventDefault();
      return false;
   });
   $(".header__nav-link--nav").on("click", function (e) {
      var anchor = $(this);
      $('html, body').stop().animate({
         scrollTop: $(anchor.attr('href')).offset().top
      }, 777);
      e.preventDefault();
      return false;
   });

   $('.faq-complex__acc-item').on('click', function () {
      $(this).toggleClass('faq-complex__acc-item--active')
      $(this).children('.acc-text').slideToggle()
   })

   $('.header-faq__grid-item').on("click", function () {
      $(this).toggleClass('header-faq__grid-item--active')
      $(this).children('.header-faq__grid-description').slideToggle()
   })
})

let burger = document.getElementsByClassName('burger')
burger[0].onclick = () => {
   if (burger[0].classList.contains('burger--active')) {
      document.body.style.overflow = 'initial'
   } else {
      document.body.style.overflow = 'hidden'
   }
}





let button = document.getElementsByClassName('button')
let sliderArrowRight = document.querySelectorAll('.slider__arrow-right')
let sliderArrowleft = document.getElementsByClassName('slider__arrow-left')

console.log(sliderArrowleft)
console.log(sliderArrowRight)

if (window.innerWidth >= 1000) {
   Array.from(sliderArrowleft).forEach(element => {
      element.classList.add('slider__arrow-left--hover')
   });
   Array.from(sliderArrowRight).forEach(element => {
      element.classList.add('slider__arrow-right--hover')
   });
   Array.from(button).forEach(element => {
      element.classList.add('button__hover')
   });
}











