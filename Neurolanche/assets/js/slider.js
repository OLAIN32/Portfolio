const slides = document.querySelector('.slides');
const slideWidth = slides.querySelector('.slide').clientWidth;
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 1;

function goToSlide(index) {
    if (index < 0) {
        index = 2;
    } else if (index > 2) {
        index = 0;
    }

    slides.style.transform = `translateX(-${index * slideWidth}px)`;
    currentIndex = index;

    // Удаляем класс active со всех слайдов и добавляем его к активному слайду
    document.querySelectorAll('.slide').forEach(slide => {
        slide.classList.remove('active');
    });
    document.querySelectorAll('.slide')[currentIndex].classList.add('active');

    // Вычисляем смещение для центрирования активного слайда
    const containerWidth = slides.clientWidth;
    const activeSlideOffset = -(index * slideWidth) + (containerWidth / 2) - (slideWidth / 2);
    slides.style.transform = `translateX(${activeSlideOffset}px)`;
}

prevBtn.addEventListener('click', () => {
    goToSlide(currentIndex - 1);
});

nextBtn.addEventListener('click', () => {
    goToSlide(currentIndex + 1);
});

let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;

slides.addEventListener('mousedown', e => {
    isDragging = true;
    startPos = e.clientX;
    prevTranslate = currentTranslate;
});

slides.addEventListener('mousemove', e => {
    if (isDragging) {
        const currentPosition = e.clientX;
        currentTranslate = prevTranslate + currentPosition - startPos;
        slides.style.transform = `translateX(${currentTranslate}px)`;
    }
});

slides.addEventListener('mouseup', () => {
    isDragging = false;
    const movedBy = currentTranslate - prevTranslate;
    if (movedBy < -100) {
        goToSlide(currentIndex + 1);
    } else if (movedBy > 100) {
        goToSlide(currentIndex - 1);
    } else {
        goToSlide(currentIndex);
    }
});

slides.addEventListener('mouseleave', () => {
    isDragging = false;
    goToSlide(currentIndex);
});

// Инициализация активного слайда при загрузке страницы
goToSlide(currentIndex);