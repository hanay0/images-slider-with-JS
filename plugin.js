// getting slider elements[images] and make an array containing them
const sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

// get the length of that array which refers to the number of images
const sliderImagesCount = sliderImages.length;

// setting current slide to start form it
var currentSlide = 2;

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

// get pagination items 
var paginationsBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

// loop through all bullets items
for(var i = 0; i < paginationsBullets.length; i++){
    paginationsBullets[i].addEventListener('click',function(){
        currentSlide = parseInt(this.getAttribute('data-index'));

        theChecker();
    })
}


// trigger the checker function
theChecker();

// previous function
function previousSlide() {
    if(prev.classList.contains('disabled')){
        return false;
    } else {
        currentSlide--;
        theChecker();
    }
}

// next function
function nextSlide() {
    if(next.classList.contains('disabled')){
        // do nothing if this condition applies
        return false;
    } else {

        currentSlide++;
        theChecker();
    }   
}


// create checker function 
function theChecker(){

    // set the slide number
    slideNumber.textContent = `slide # ${currentSlide} of ${sliderImagesCount}`;

    // remove all active classes form images instead of current image or slide
    removeAllActives();
    // set active class on the current element
    sliderImages[currentSlide - 1].classList.add('active');

    // set active pagination
    paginationCreatedUl.children[currentSlide - 1].classList.add('active');

    // checking if current slide is the first one
    if(currentSlide == 1){

        // add disabled class on previous button
        prev.classList.add('disabled');
    } else {

        // remove disabled class from previous button
        prev.classList.remove('disabled');
    }

    // checking if current slide is the last one
    if(currentSlide == sliderImagesCount){

        // add disabled class on next button
        next.classList.add('disabled');
    } else {

        // remove disabled class from next button
        next.classList.remove('disabled');
    }


}

// removing all active classes from images and paginations bullets
function removeAllActives(){

    // loop through images
    sliderImages.forEach(function (img){
        img.classList.remove('active');
    });

    // loop through pagination bullets
paginationsBullets.forEach(function(bullet){

    bullet.classList.remove('active');

    });
}

