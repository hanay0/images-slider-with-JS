// getting slider elements[images] and make an array containing them
const sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

// get the length of that array which refers to the number of images
const sliderImagesCount = sliderImages.length;

// setting current slide to start form it
const currentSlide = 2;

// number of the current slide element 
const slideNumber = document.getElementById('slide-number');

// getting previous and next buttons
const prev = document.getElementById('prev'),
      next = document.getElementById('next');  



// create hte main ul element which contains the numbers of slides [paginations]
let paginationElement = document.createElement('ul');

// give an id to pagination element
paginationElement.setAttribute('id', 'pagination-ul')

// creating list items based on array length [how many slides or images exists]
for(let i = 1; i <= sliderImagesCount; i++){
    // create li inside the previous ul
    let paginationsItems = document.createElement('li');
 
    // set custom attribute 
    paginationsItems.setAttribute('data-index', i);

    // set item content
    paginationsItems.appendChild(document.createTextNode(i));

    // append items to the main ul list
    paginationElement.appendChild(paginationsItems)

}
 
 // adding created ul element to the main page

document.getElementById("indicators").appendChild(paginationElement);

// handle the events of previous and next buttons
prev.addEventListener('click', previousSlide);
next.addEventListener('click', nextSlide);

// get the new created ul
let paginationCreatedUl = document.getElementById('pagination-ul');

// trigger the checker function
theChecker();
// previous function
function previousSlide() {
    console.log('Previous');
}

// next function
function nextSlide() {
    console.log('Next');
}


// create checker function 
function theChecker(){

    // set the slide number
    slideNumber.textContent = `slide # ${currentSlide} of ${sliderImagesCount}`;

    // set active class on the current element
    sliderImages[currentSlide - 1].classList.add('active');

    // set active pagination
    paginationCreatedUl.children[currentSlide - 1].classList.add('active');

}