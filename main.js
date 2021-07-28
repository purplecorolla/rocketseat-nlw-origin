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
