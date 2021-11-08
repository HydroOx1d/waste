const form_show = document.querySelector(".content__show")
const content_show = document.querySelector('.content__show')
const content_form = document.querySelector('.content__form')
//IMG
const form_show_img = document.createElement('img')
form_show_img.src = './img/close.png'

form_show.addEventListener("click", showForm)

function showForm() {
  content_form.classList.toggle('show-from')
  if(content_form.classList.contains('show-from')){
    content_show.appendChild(form_show_img)
  } else {
    content_show.removeChild(form_show_img)
  }
}


