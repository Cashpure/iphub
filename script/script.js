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
})

let button = document.getElementsByClassName('button')
let sliderArrowRight = document.querySelectorAll('.slider__arrow-right')
let sliderArrowleft = document.getElementsByClassName('slider__arrow-left')

console.log(sliderArrowleft)

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

let prev = document.getElementById('prev')
let next = document.getElementById('next')
let counter = document.getElementById('qustion__counter')
let question = document.getElementById('question')
let answer1 = document.querySelector('.answer-1')
let answer2 = document.querySelector('.answer-2')
let answer3 = document.querySelector('.answer-3')
let answer4 = document.querySelector('.answer-4')
let answer5 = document.querySelector('.answer-5')
let answer6 = document.querySelector('.answer-6')
let n = 1

const pages = [
   {
      questionText: "С какой целью вы обращаетесь?",
      "answers": ["Регистрацию полезной модели", "Регистрацию прав на использование полезной модели, промобразца, изобретенния", "Регистрацию изобретения", "Регистрацию промышленного образца", "Подготовка заявки на выдачу патента", "Подготовка заявки на передачу прав патента"]
   },
   {
      questionText: "2-й вопрос",
      "answers": ["Регистрацию полезной модели", "Регистрацию прав на использование полезной модели, промобразца, изобретенния", "Регистрацию изобретения", "Регистрацию промышленного образца", "Подготовка заявки на выдачу патента", "Подготовка заявки на передачу прав патента"]
   },
   {
      questionText: "3-й вопрос",
      "answers": ["Регистрацию полезной модели", "Регистрацию прав на использование полезной модели, промобразца, изобретенния", "Регистрацию изобретения", "Регистрацию промышленного образца", "Подготовка заявки на выдачу патента", "Подготовка заявки на передачу прав патента"]
   },
   {
      questionText: "4-й вопрос",
      "answers": ["Регистрацию полезной модели", "Регистрацию прав на использование полезной модели, промобразца, изобретенния", "Регистрацию изобретения", "Регистрацию промышленного образца", "Подготовка заявки на выдачу патента", "Подготовка заявки на передачу прав патента"]
   },
   {
      questionText: "5-й вопрос",
      "answers": ["Регистрацию полезной модели", "Регистрацию прав на использование полезной модели, промобразца, изобретенния", "Регистрацию изобретения", "Регистрацию промышленного образца", "Подготовка заявки на выдачу патента", "Подготовка заявки на передачу прав патента"]
   },
   {
      questionText: "6-й вопрос",
      "answers": ["Регистрацию полезной модели", "Регистрацию прав на использование полезной модели, промобразца, изобретенния", "Регистрацию изобретения", "Регистрацию промышленного образца", "Подготовка заявки на выдачу патента", "Подготовка заявки на передачу прав патента"]
   },
   {
      questionText: "7-й вопрос",
      "answers": ["Регистрацию полезной модели", "Регистрацию прав на использование полезной модели, промобразца, изобретенния", "Регистрацию изобретения", "Регистрацию промышленного образца", "Подготовка заявки на выдачу патента", "Подготовка заявки на передачу прав патента"]
   },
   {
      questionText: "8-й вопрос",
      "answers": ["Регистрацию полезной модели", "Регистрацию прав на использование полезной модели, промобразца, изобретенния", "Регистрацию изобретения", "Регистрацию промышленного образца", "Подготовка заявки на выдачу патента", "Подготовка заявки на передачу прав патента"]
   },
]



const swiper = new Swiper('.swiper-1', {
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
      nextEl: '.slider__arrow-right',
      prevEl: '.slider__arrow-left',
   },
});

const swiper2 = new Swiper('.swiper-2', {
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
      
      1100: {
         slidesPerView: 2,
      },
   },
   
   
   // Navigation arrows
   navigation: {
      nextEl: '.slider__arrow-right-2',
      prevEl: '.slider__arrow-left-2',
   },
});

const swiper3 = new Swiper('.swiper-3', {
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
      480: {
         slidesPerView: 2,
      },
      
      1100: {
         slidesPerView: 4,
      },
   },
   
   
   // Navigation arrows
   navigation: {
      nextEl: '.slider__arrow-right-3',
      prevEl: '.slider__arrow-left-3',
   },
});

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
const swiper5 = new Swiper('.swiper-5', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,
   spaceBetween: 20,
   allowTouchMove: true,
   slidesPerView: 'auto',
   // centeredSlides: true,
   // breakpoints: {
   //    0: {
   //       slidesPerView: 1,
   //    },
   //    580: {
   //       slidesPerView: 2,
   //    },
   //    868: {
   //       slidesPerView: 3,
   //    },
   //    1100: {
   //       slidesPerView: 4,
   //    },
   // },
});
const swiper6 = new Swiper('.swiper-6', {
   // Optional parameters
   direction: 'horizontal',
   loop: false,
   spaceBetween: 34,
   allowTouchMove: false,
   slidesPerView: '5',
   // centeredSlides: true,
   breakpoints: {
      0: {
         slidesPerView: 2,
      },
      680: {
         slidesPerView: 3,
      },
      1000: {
         slidesPerView: 4,
      },
      1200: {
         slidesPerView: 5,
      },
   },
   
   
   // Navigation arrows
   navigation: {
      nextEl: '.slider__arrow-right-6',
      prevEl: '.slider__arrow-left-6',
   },
});


let slide6 = document.querySelectorAll('.slide-6')
let arrowRight6 = document.querySelectorAll('.slider__arrow-right-6')
let arrowLeft6 = document.querySelectorAll('.slider__arrow-left-6')


let s = 0
function slider6Right () {
   if (s <= 3) {
      s++
      slide6[s].classList.add('process-slide--active')
   }
   console.log(s)
   console.log(slider6Right)
   console.log(slide6)
}
function slider6Left () {
   if (s >= 1) {
      slide6[s].classList.remove('process-slide--active')
      s--
   }
   console.log(s)
   console.log(slider6Right)
   console.log(slide6)
}



console.log(arrowRight6)
arrowRight6[0].onclick = slider6Right
arrowLeft6[0].onclick = slider6Left
arrowRight6[1].onclick = slider6Right
arrowLeft6[1].onclick = slider6Left



const swiper7 = new Swiper('.swiper-7', {
   // Optional parameters
   direction: 'horizontal',
   loop: false,
   spaceBetween: 340,
   allowTouchMove: false,
   slidesPerView: '1',
   // centeredSlides: true,
   // breakpoints: {
   //    0: {
   //       slidesPerView: 1,
   //    },
   //    580: {
   //       slidesPerView: 2,
   //    },
   //    868: {
   //       slidesPerView: 3,
   //    },
   //    1100: {
   //       slidesPerView: 4,
   //    },
   // },
   
   
   // Navigation arrows
   navigation: {
      nextEl: '.slider__arrow-right-6',
      prevEl: '.slider__arrow-left-6',
   },
});




function update(page) {
   question.innerText = page.questionText
   answer1.innerText = page["answers"][0]
   answer2.innerText = page["answers"][1]
   answer3.innerText = page["answers"][2]
   answer4.innerText = page["answers"][3]
   answer5.innerText = page["answers"][4]
   answer6.innerText = page["answers"][5]
}
function countPlus() {

   if (n <= 7) {
      n++
      update(pages[n - 1])
      counter.innerText = n
      // document.querySelectorAll('.faq__main-answer').classList.remove('faq__main-answer--active')
   }
   console.log(n)

}

function countMinus() {
   if (n >= 2) {
      n--
      update(pages[n - 1])
      counter.innerText = n
      // document.querySelectorAll('.faq__main-answer').classList.remove('faq__main-answer--active')
   }
   console.log(n)
   console.log(document.querySelectorAll('.faq__main-answer'))
}

next.onclick = countPlus
prev.onclick = countMinus

