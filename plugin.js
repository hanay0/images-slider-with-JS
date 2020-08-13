// getting slider elements[images] and make an array containing them
const sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

// get the length of that array which refers to the number of images
const sliderImagesCount = sliderImages.length;

// setting current slide to start form it
const currentSlide = 1;

// number of the current slide element 
const slideNumber = document.getElementById('slide-number');

// getting previous and next buttons
const prev = document.getElementById('prev'),
      next = document.getElementById('next');  






      // next slide function
let previousSlide = () => {
    console.log('previous in log');
}

// previous slide function
let nextSlide = () => {
    console.log('next in log');
}

// handling click events of previous and next buttons
prev.addEventListener('click', previousSlide);
next.addEventListener('click', nextSlide);










