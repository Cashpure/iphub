let swiperSlide1 = document.querySelectorAll('.swiper-slide-1')

Array.from(swiperSlide1).forEach(element => {
   element.onclick = () => {
      window.open('../case.html', '_self')
   }
})

let swiperSlide2 = document.querySelectorAll('.cases__slide-2')

Array.from(swiperSlide2).forEach(element => {
   element.onclick = () => {
      window.open('../cases.html', '_self')
   }
})



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