document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Köszönjük, hogy kapcsolatba lépett velünk!');
    this.reset();
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

const services = document.querySelectorAll('.service');
services.forEach(service => {
    service.addEventListener('mouseenter', () => {
        service.style.backgroundColor = '#f0f0f0';
    });
    service.addEventListener('mouseleave', () => {
        service.style.backgroundColor = '#fff';
    });
});

function openLightbox() {
    document.getElementById('lightbox').style.display = "block";
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = "none";
}

let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("lightbox-slide");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}