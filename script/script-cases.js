let casesItem = document.querySelectorAll('.header-cases__grid-item')

Array.from(casesItem).forEach(element => {
   element.onclick = () => {
      window.open('../case.html', '_self')
   } 
})