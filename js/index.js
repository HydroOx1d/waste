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

// BTN_UP
let button = $('.btn-up')
$(window).on('scroll', () =>
{
  if($(this).scrollTop() >= 50)
  {
    button.fadeIn()
  }
  else
  {
    button.fadeOut()
  }
})
button.on('click', (e) =>
{
  e.preventDefault()
  $('html').animate({scrollTop: 0}, 10)
})