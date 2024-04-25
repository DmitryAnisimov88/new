function toggleSlideActive(slide, isActive) {
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
            textSlide.style.zIndex = '-99';
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
            textSlide.style.zIndex = 'auto'; // Или установите конкретное значение
            h1.style.opacity = '0';
            h1.style.zIndex = '0';
            h2.style.opacity = '0';
            h2.style.zIndex = '-99';
            h3.style.opacity = '0';
            h3.style.zIndex = '-99';
            slideImg.style.opacity = '0';
            slideImg.style.zIndex = '-99';
            button.style.opacity = '0';
            button.style.zIndex = '-99';
        }
    }
}

// Пример использования функции toggleSlideActive
const slides = document.querySelectorAll('.slide');
slides.forEach(slide => {
    slide.addEventListener('click', () => {
        // Деактивируем все слайды, кроме текущего
        slides.forEach(s => {
            if (s !== slide) {
                toggleSlideActive(s, false);
            }
        });
        // Активируем текущий слайд
        toggleSlideActive(slide, true);
    });
});