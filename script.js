function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "img/close_white_36dp.svg";
    }
}

let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    if (index >= totalSlides) currentSlide = 0;
    if (index < 0) currentSlide = totalSlides - 1;

    const offset = -currentSlide * 100;
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
}

showSlide(currentSlide);


function enviarFormulario() {
    let nombre = document.getElementById('nombres').value;
    let apellido = document.getElementById('apellidos').value;
    let mensaje = document.getElementById('mensaje').value;
    let numero = 5579999325198;
    var win = window.open(`https://wa.me/${numero}?text=Olá,%20meu%20nome%20é%20${nombre}
%20${apellido}, ${mensaje}`, '_blank');
}


