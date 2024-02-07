import imageList from './imageList.js';

let currentIndex = 0;
const slideshowElement = document.getElementById('slideshow');

function updateSlideshow() {
    const image = imageList[currentIndex];
    slideshowElement.innerHTML = `<img src="${image}" alt="Slideshow Image">`; // Dynamically create an img element

    currentIndex = (currentIndex + 1) % imageList.length; // Loop back to the first image after the last
}

// Initial call to display the first image and set up the slideshow
updateSlideshow();

// Change image every 3 seconds
setInterval(updateSlideshow, 3000);
