
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.control-button.prev');
const nextButton = document.querySelector('.control-button.next');

let currentSlideIndex = 0;

function goToSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
  currentSlideIndex = index;
  updateSliderPosition();
}

function updateSliderPosition() {
  const offset = -(currentSlideIndex * (slides[0].offsetWidth + 16) - (slider.offsetWidth - slides[0].offsetWidth) / 2);
  slider.style.transform = `translateX(${offset}px)`;
}

function prevSlide() {
  const nextIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  goToSlide(nextIndex);
}

function nextSlide() {
  const nextIndex = (currentSlideIndex + 1) % slides.length;
  goToSlide(nextIndex);
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// Init
goToSlide(currentSlideIndex);