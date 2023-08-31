const slider = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slider-container article');
const interval = 3000;

let curr = 0;
let prev = 0;

function showSlide() {
  if (curr == 0 || curr == slides.length) {
    curr = 0;
    prev = slides.length-1;
  } else {
    prev = curr-1;
  }

  slides[prev].classList.remove('active'); // Előző kép inaktív
  slides[curr].classList.add('active'); // Új kép aktív

  curr++;

}

showSlide();
setInterval(showSlide, interval);
