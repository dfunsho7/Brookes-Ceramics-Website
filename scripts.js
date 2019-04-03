var slideCounter = 0;

function initSlides() {
    var slides = document.getElementsByClassName("slide");
    slideCounter++;
    slides[slideCounter - 1].style.display = "block";
    setTimeout(displaySlides, 2000);
}

function displaySlides() {
    var slides = document.getElementsByClassName("slide");
    slides[slideCounter - 1].style.display = "none";
    slideCounter++;
    if (slideCounter > slides.length) {
        slideCounter = 1;
    }
    slides[slideCounter - 1].style.display = "block";
    setTimeout(displaySlides, 2000);
}