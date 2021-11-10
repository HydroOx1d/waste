const form_show = document.querySelector(".content__show")
const content_show = document.querySelector('.content__show')
const content_form = document.querySelector('.content__form')
const content_show_img = document.querySelector('.content__show img')

form_show.addEventListener("click", showForm)

function showForm() {
  content_form.classList.toggle('show-from')
  if(content_form.classList.contains('show-from')){
    content_show_img.src = './img/close.png'
  } else {
    content_show_img.src = './img/menu.png'
  }
}


