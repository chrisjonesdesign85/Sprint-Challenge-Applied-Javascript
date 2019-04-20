class Carousel {
    // constructor(element) {
    //     this.element = element;
}


let carousel = document.querySelectorAll('.carousel .left-button .right-button');
let imgs = this.carousel.getElementById(img)

var currentSlide = 0
var slideInterval = setInterval(nextSlide, 2000)

function nextSlide() {
    slides[currentSlide].className = 'slide'
    currentSlide = (currentSlide + 1) % slides.length
    slides[currentSlide].className = 'slide showing'
}



/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/