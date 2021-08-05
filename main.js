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
function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // scroll maior que a altura d header
    header.classList.add('scroll')
  } else {
    //menor q a altura do header
    header.classList.remove('scroll')
  }
}

// testimonials slider swiper
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1, //depoimento por pagina (mobile)
  pagination: {
    el: '.swiper-pagination' //criando obj de paginacao
  },
  mousewheel: true, //roda do mouse agora funciona e as setas do teclado tbm
  keyboard: true,
  breakpoints: {
    //ajusta para o tamanho do dispositivo a caixa de depoimentos
    767: {
      //* 767: breakpoint a partir do tamanho do tablet */
      slidesPerView: 2, //dividiu os slides de depoimentos em 2
      setWrapperSize: true
    }
  }
})

// scroll revieal - mostrar elementos quando utilizar o scroll
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text, #about .image, #about .text, #services header, #services .card, #testimonials header, #testimonials .testimonials, #contact .text, #contact .links footer .brand, footer .social`,
  { interval: 100 }
)

/* back-to-top - arrow-up */
const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* menu ativo com as seçoes na pagina */

const sections = document.querySelectorAll('main section[id]')

function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*= ' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*= ' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/* When Scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})
