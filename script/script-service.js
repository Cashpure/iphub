let swiperSlide4 = document.querySelectorAll('.swiper-slide-4')

Array.from(swiperSlide4).forEach(el => {
   el.onclick = () => {
      window.open('/service.html', '_self')
   }
})