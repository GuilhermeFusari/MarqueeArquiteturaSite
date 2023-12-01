const slider5 = document.querySelectorAll('.slider5');
const btnPrev5 = document.getElementById('prev-button5');
const btnNext5 = document.getElementById('next-button5');

let currentSlide5 = 0;

function hideSlider5() {
  slider5.forEach(item => item.classList.remove('on5'))
}

function showSlider5() {
  slider5[currentSlide5].classList.add('on5')
}

function nextSlider5() {
  hideSlider5()
  if(currentSlide5 === slider5.length -1) {
    currentSlide5 = 0
  } else {
    currentSlide5++
  }
  showSlider5()
}

function prevSlider5() {
  hideSlider5()
  if(currentSlide5 === 0) {
    currentSlide5 = slider5.length -1
  } else {
    currentSlide5--
  }
  showSlider5()
}

btnNext5.addEventListener('click', nextSlider5)
btnPrev5.addEventListener('click', prevSlider5)