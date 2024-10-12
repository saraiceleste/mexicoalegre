
let currentSlide = 0;
const slides = document.querySelectorAll('.slides img');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

showSlide(currentSlide);

document.getElementById(`contact-form`).addEventListener(`submit`, function(event) {
    event.preventDefault();
    const name = document.getElementById(`name`).value;
    const email = document.getElementById(`email`).value;
    const phone = document.getElementById(`phone`).value;
    const message = document.getElementById(`message`).value;

    document.getElementById(`form-result`).textContent = `Gracias, ${name}. Hemos recibido tu mensaje y te contactaremos pronto.`;
    

});
