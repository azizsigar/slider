const slides = document.querySelector('.slides');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let currentIndex = 0;
const totalSlides = slides.children.length;
let intervalId;

const showSlide = index => slides.style.transform = `translateX(-${index * 100}%)`;
const nextSlide = () => showSlide(currentIndex = currentIndex === totalSlides - 1 ? 0 : currentIndex + 1);
const startSlider = () => intervalId = setInterval(nextSlide, 2000);
const stopSlider = () => clearInterval(intervalId);

const changeSlide = (newIndex) => {
    stopSlider();
    showSlide(currentIndex = newIndex);
    startSlider();
};

prevBtn.addEventListener('click', () => changeSlide(currentIndex === 0 ? totalSlides - 1 : currentIndex - 1));
nextBtn.addEventListener('click', () => changeSlide(currentIndex === totalSlides - 1 ? 0 : currentIndex + 1));
slides.addEventListener('mouseenter', stopSlider);
slides.addEventListener('mouseleave', startSlider);

startSlider();
