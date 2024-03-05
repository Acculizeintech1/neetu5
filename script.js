var currentSlideIndex = 0;
var slides = document.querySelectorAll('.card');
var interval = 3000; // Change slide every 3 seconds

function nextSlide() {
    currentSlideIndex++;
    updateSlider();
}

function updateSlider() {
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    }
    var slideWidth = slides[0].clientWidth;
    var offset = -slideWidth * currentSlideIndex;
    document.querySelector('.slider').style.transform = 'translateX(' + offset + 'px)';
}

function startSlider() {
    setInterval(function () {
        nextSlide();
    }, interval);
}

startSlider();