console.log("Js loaded..")

//we need to dynamically update the DOM
//to get our slideshow to work
//every 5 seconds, chane the picture to the next
//if we get the last image, go back to the first one

// DOM elements
const slideshowImg = document.getElementById("slideshowImg")

let imgUrls = [
    "https://c02.purpledshub.com/uploads/sites/62/2023/01/Giant-panda-c2c51b8.jpg?w=1029&webp=1",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Grosser_Panda.JPG/1200px-Grosser_Panda.JPG",
    "./images/panda.jpg"
];

// will keep track to show in out slideshow
let currentImageIndex = 0;


//keep track of what current image is
// move to the nect image
// update the slideshow img with the next image url
function updateSlideshow(){
    currentImageIndex++;

    // if our index goes outside the bounds of our array
    //start back at 0?
    if(currentImageIndex >= imgUrls.length){
        currentImageIndex = 0;
}
    let nextImageUrl = imgUrls[currentImageIndex];
    slideshowImg.src = nextImageUrl;
}

setInterval(updateSlideshow, 2000);

/*let count = 0;

function countUpAndPrint(){
    count++;
    console.log(count);
}

//setinterval calls a function every time
setInterval(countUpAndPrint, 3000);
*/


