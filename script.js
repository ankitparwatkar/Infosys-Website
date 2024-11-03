const slides = document.querySelector('.slides');
const radios = document.querySelectorAll('input[name="slides"]');
let currentIndex = 0;

setInterval(() => {
    currentIndex = (currentIndex + 1) % radios.length;
    radios[currentIndex].checked = true;
    updateSlidePosition();
}, 3000);

function updateSlidePosition() {
    const offset = -currentIndex * 100; // Change based on number of slides
    slides.style.transform = `translateX(${offset}%)`;
}

