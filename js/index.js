
//SCROLL TO TOP
const to_top = document.querySelector('.btn-up')

window.addEventListener("scroll", () => {
  if(window.pageYOffset > 100) {
    to_top.classList.add('active--btn')
  } else {
    to_top.classList.remove('active--btn')
  }
})



