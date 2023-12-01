const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function hideSlider() {
  slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
  slider[currentSlide].classList.add('on')
}

function nextSlider() {
  hideSlider()
  if(currentSlide === slider.length -1) {
    currentSlide = 0
  } else {
    currentSlide++
  }
  showSlider()
}

function prevSlider() {
  hideSlider()
  if(currentSlide === 0) {
    currentSlide = slider.length -1
  } else {
    currentSlide--
  }
  showSlider()
}

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)

const slider2 = document.querySelectorAll('.slider2');
const btnPrev2 = document.getElementById('prev-button2');
const btnNext2 = document.getElementById('next-button2');

let currentSlide2 = 0;

function hideSlider2() {
  slider2.forEach(item => item.classList.remove('on2'))
}

function showSlider2() {
  slider2[currentSlide2].classList.add('on2')
}

function nextSlider2() {
  hideSlider2()
  if(currentSlide2 === slider2.length -1) {
    currentSlide2 = 0
  } else {
    currentSlide2++
  }
  showSlider2()
}

function prevSlider2() {
  hideSlider2()
  if(currentSlide2 === 0) {
    currentSlide2 = slider2.length -1
  } else {
    currentSlide2--
  }
  showSlider2()
}

btnNext2.addEventListener('click', nextSlider2)
btnPrev2.addEventListener('click', prevSlider2)


const slider3 = document.querySelectorAll('.slider3');
const btnPrev3 = document.getElementById('prev-button3');
const btnNext3 = document.getElementById('next-button3');

let currentSlide3 = 0;

function hideSlider3() {
  slider3.forEach(item => item.classList.remove('on3'))
}

function showSlider3() {
  slider3[currentSlide3].classList.add('on3')
}

function nextSlider3() {
  hideSlider3()
  if(currentSlide3 === slider3.length -1) {
    currentSlide3 = 0
  } else {
    currentSlide3++
  }
  showSlider3()
}

function prevSlider3() {
  hideSlider3()
  if(currentSlide3 === 0) {
    currentSlide3 = slider3.length -1
  } else {
    currentSlide3--
  }
  showSlider3()
}

btnNext3.addEventListener('click', nextSlider3)
btnPrev3.addEventListener('click', prevSlider3)

const slider4 = document.querySelectorAll('.slider4');
const btnPrev4 = document.getElementById('prev-button4');
const btnNext4 = document.getElementById('next-button4');

let currentSlide4 = 0;

function hideSlider4() {
  slider4.forEach(item => item.classList.remove('on4'))
}

function showSlider4() {
  slider4[currentSlide4].classList.add('on4')
}

function nextSlider4() {
  hideSlider4()
  if(currentSlide4 === slider4.length -1) {
    currentSlide4 = 0
  } else {
    currentSlide4++
  }
  showSlider4()
}

function prevSlider4() {
  hideSlider4()
  if(currentSlide4 === 0) {
    currentSlide4 = slider4.length -1
  } else {
    currentSlide4--
  }
  showSlider4()
}

btnNext4.addEventListener('click', nextSlider4)
btnPrev4.addEventListener('click', prevSlider4)



function Mudarestado(el) {
  var display = document.getElementById(el).style.display;
  document.getElementById(el).style.display = display === 'none' ? 'block' : 'none';
}