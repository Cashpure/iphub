let servicesItem = document.querySelectorAll('.header-services__grid-item')

Array.from(servicesItem).forEach(el => {
   el.onclick = () => {
      window.open('service.html', '_self')
   }
})