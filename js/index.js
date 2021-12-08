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
// CUSTOM SELECT
const mob_select_header = document.querySelectorAll('.sort__mob--header')
const mob_select_item = document.querySelectorAll('.sort__mob--item')
mob_select_header.forEach(item => {
  item.addEventListener('click', () => {
    item.parentElement.classList.toggle('is-active')
  })
})
mob_select_item.forEach(item => {
  item.addEventListener('click', () => {
    let text = item.innerHTML
    let close_select = item.closest('.sort__block--mob')
    let current_text = item.closest('.sort__block--mob').querySelector('.sort__mob--current')
    current_text.innerHTML = text
    close_select.classList.remove('is-active')
  })
})
