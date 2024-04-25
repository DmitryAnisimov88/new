let touchStartY = 0;
let touchEndY = 0;

function toggleSlideElementsVisibility(slide, isActive) {
    const textSlide = slide.querySelector('.textSlide');
    const h1 = slide.querySelector('h1');
    const h2 = slide.querySelector('h2');
    const h3 = slide.querySelector('h3');
    const slideImg = slide.querySelector('.slideImg');
    const button = slide.querySelector('button');

    if (textSlide && h1 && h2 && h3 && slideImg && button) {
        if (isActive) {
            // При активации слайда
            textSlide.style.opacity = '0';
            textSlide.style.zIndex = '0';
            h1.style.opacity = '1';
            h1.style.zIndex = '99';
            h2.style.opacity = '1';
            h2.style.zIndex = '99';
            h3.style.opacity = '1';
            h3.style.zIndex = '99';
            slideImg.style.opacity = '1';
            slideImg.style.zIndex = '2';
            button.style.opacity = '1';
            button.style.zIndex = '3';
        } else {
            // При деактивации слайда
            textSlide.style.opacity = '1';
            textSlide.style.zIndex = '99';
            h1.style.opacity = '0';
            h1.style.zIndex = '0';
            h2.style.opacity = '0';
            h2.style.zIndex = '0';
            h3.style.opacity = '0';
            h3.style.zIndex = '0';
            slideImg.style.opacity = '0';
            slideImg.style.zIndex = '0';
            button.style.opacity = '0';
            button.style.zIndex = '0';
        }
    }
}

function slidesPlugin(activeSlideIndex) {
    const slides = document.querySelectorAll(".slide");

    // Удаляем класс active с< всех слайдов
    slides.forEach((slide) => {
        slide.classList.remove("active");
        toggleSlideElementsVisibility(slide, false); // Деактивируем элементы внутри слайда
    });

    // Добавляем класс active к выбранному слайду
    if (activeSlideIndex >= 0 && activeSlideIndex < slides.length) {
        const activeSlide = slides[activeSlideIndex];
        activeSlide.classList.add("active");
        toggleSlideElementsVisibility(activeSlide, true); // Активируем элементы внутри активного слайда
    }
}

function handleTouchStart(e) {
    touchStartY = e.touches[0].clientY;
}

function handleTouchMove(e) {
    touchEndY = e.touches[0].clientY;
}

function handleTouchEnd() {
    const slides = document.querySelectorAll(".slide");
    const activeSlideIndex = Array.from(slides).findIndex(slide => slide.classList.contains("active"));
    const slideCount = slides.length;

    if (touchEndY < touchStartY) {
        // Свайп вверх
        const nextSlideIndex = (activeSlideIndex + 1) % slideCount;
        slidesPlugin(nextSlideIndex);
    } else if (touchEndY > touchStartY) {
        // Свайп вниз
        const prevSlideIndex = (activeSlideIndex - 1 + slideCount) % slideCount;
        slidesPlugin(prevSlideIndex);
    }
}

// Инициализируем плагин слайдов с активным слайдом по умолчанию
slidesPlugin(0); // Замените 0 на индекс активного слайда по умолчанию

// Добавляем обработчик события click на каждый слайд
const slides = document.querySelectorAll(".slide");
slides.forEach((slide, index) => {
    slide.addEventListener('click', () => {
        // Вызываем функцию для изменения активного слайда
        slidesPlugin(index);
    });
});