// DOM
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
for (const element of toggle) {
  // abre e fecha o menu
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}
/* esconder menu quando escolhe uma opção de dentro do menu */
const links = document.querySelectorAll('nav ul li a')
for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* mudar o header da pagina quando der scroll*/
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    // scroll maior que a altura d header
    header.classList.add('scroll')
  } else {
    //menor q a altura do header
    header.classList.remove('scroll')
  }
})

// testimonials slider swiper
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1, //depoimento por pagina (mobile)
  pagination: {
    el: '.swiper-pagination' //criando obj de paginacao
  },
  mousewheel: true, //roda do mouse agora funciona e as setas do teclado tbm
  keyboard: true
})

// scroll revieal - mostrar elementos quando utilizar o scroll
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text, #about .image, #about .text, #services header, #services .card, #testimonials header, #testimonials .testimonials, #contact .text, #contact .links`,
  { interval: 100 }
)
