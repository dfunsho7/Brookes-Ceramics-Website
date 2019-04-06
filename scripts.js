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

function open_menu() {
    var nav_items = document.getElementsByTagName("nav")[0].getElementsByTagName("li");
    for(var i=1; i<nav_items.length; i++){
        if (nav_items[i].style.display === "block") {
            nav_items[i].style.display = "none";
        }
        else{
            nav_items[i].style.display = "block";
        }
    }
}