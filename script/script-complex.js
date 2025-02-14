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