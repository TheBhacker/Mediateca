// Variables del carrusel
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

// Botones de control
const prevButton = document.querySelector('.carousel-control.prev');
const nextButton = document.querySelector('.carousel-control.next');

// Cambiar de diapositiva
function changeSlide(direction) {
    // Ocultar diapositiva actual
    slides[currentSlide].classList.remove('active');

    // Calcular nueva diapositiva
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    // Mostrar nueva diapositiva
    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Eventos para los botones
prevButton.addEventListener('click', () => changeSlide(-1));
nextButton.addEventListener('click', () => changeSlide(1));
