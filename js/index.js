//SHOW SEARCH FORM
const form_show = document.querySelector(".content__show")
const content_search = document.querySelector('.content__search')
const content_show_img = document.querySelector('.content__show img')

form_show.addEventListener("click", showForm)

function showForm() {
  content_search.classList.toggle('show-from')
  if(content_search.classList.contains('show-from')){
    content_show_img.src = './img/close.png'
  } else {
    content_show_img.src = './img/menu.png'
  }
}

//SCROLL TO TOP
const to_top = document.querySelector('.btn-up')

window.addEventListener("scroll", () => {
  if(window.pageYOffset > 100) {
    to_top.classList.add('active')
  } else {
    to_top.classList.remove('active')
  }
})

// tooltip
const tooltip_show = document.querySelector('.tooltip__show')
const tooltip_desc = document.querySelector('.tooltip__desc')

tooltip_show.addEventListener('mouseenter', () => {
  tooltip_desc.classList.add('active--desc')
})
tooltip_show.addEventListener('mouseleave', () => {
  tooltip_desc.classList.remove('active--desc')
})