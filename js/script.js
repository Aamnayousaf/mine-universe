
var coverflowswiper = new Swiper("#coverflow-section", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
    
  },
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },

// loop:true,
});


var swiper = new Swiper("#card", {
  effect: "cards",
  grabCursor: true,
  centeredSlides: true,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  
});

// ####### latest button    ########

function leftclick(){
  // btn.style.left='0'
  var div = document.getElementById('myDiv');
  var images = div.getElementsByTagName('img');
  // var Headings = div.getElementsByTagName('h6');

  // Change the image source and alt text
  images[0].src = 'img/Ellipse 4 (8).png';
  images[1].src = 'img/Ellipse 4 (5).png';
  images[2].src = 'img/Ellipse 4 (1).png';
  images[3].src = 'img/Ellipse 4 (2).png';
  images[0].alt = 'Image 2'; 
  // Change the paragraph text
  // Headings[0].innerHTML = 'downloads | 2033749455   jan/05/2023';
  btn.style.left='0'
  var div = document.getElementById('mydiv1');
  var images = div.getElementsByTagName('img');
  var Headings = div.getElementsByTagName('h6');

  // Change the image source and alt text
  images[0].src = 'img/Ellipse 4 (5).png';
  images[1].src = 'img/Ellipse 4 (4).png';
  images[2].src = 'img/Ellipse 4 (3).png';
  images[3].src = 'img/Ellipse 4 (2).png';
  images[0].alt = 'Image 2'; 
  // Change the paragraph text
  // Headings[0].innerHTML = 'this ia heading 2';
  


}
// #####     popular button   #####3

function mediumclick(){
  // var btn = document.getElementById("btn")
  // btn.style.left='80px'
  var div = document.getElementById('myDiv');
  var images = div.getElementsByTagName('img');
  var Headings = div.getElementsByTagName('h6');

  // Change the image source and alt text
  images[0].src = 'img/Ellipse 4 (2).png';
  images[1].src = 'img/Ellipse 4 (3).png';
  images[2].src = 'img/Ellipse 4 (4).png';
  images[3].src = 'img/Ellipse 4 (8).png';
  images[0].alt = 'Image 2'; 
  // Change the paragraph text
  // Headings[0].innerHTML = 'this ia heading 2';
  btn.style.left='0'
  var div = document.getElementById('mydiv1');
  var images = div.getElementsByTagName('img');
  var Headings = div.getElementsByTagName('h6');

  // Change the image source and alt text
  images[0].src = 'img/Ellipse 4 (4).png';
  images[1].src = 'img/Ellipse 4 (2).png';
  images[2].src = 'img/Ellipse 4 (1).png';
  images[3].src = 'img/Ellipse 4 (3).png';
  images[0].alt = 'Image 2'; 
  // Change the paragraph text
  // Headings[0].innerHTML = 'this ia heading 2';
}

 // Headings[0].innerHTML = 'this ia heading 2';
// ##### premium button ########
function rightclick(){
 


  var div = document.getElementById('myDiv');
  var images = div.getElementsByTagName('img');
  var Headings = div.getElementsByTagName('h6');

  // Change the image source and alt text
  images[0].src = 'img/Ellipse 4 (3).png';
  images[1].src = 'img/Ellipse 4 (1).png';
  images[2].src = 'img/Ellipse 4 (4).png';
  images[3].src = 'img/Ellipse 4 (2).png';
  images[0].alt = 'Image 2'; 
  // Change the paragraph text
 
  btn.style.left='0'
  var div = document.getElementById('mydiv1');
  var images = div.getElementsByTagName('img');
  // var Headings = div.getElementsByTagName('h6');

  // Change the image source and alt text
  images[0].src = 'img/Ellipse 4 (5).png';
  images[1].src = 'img/Ellipse 4 (4).png';
  images[2].src = 'img/Ellipse 4 (3).png';
  images[3].src = 'img/Ellipse 4 (2).png';
  images[0].alt = 'Image 2'; 
  // Change the paragraph text
  // Headings[0].innerHTML = 'this ia heading 2';

}
// ###### change background image ########

document.getElementById("btn").addEventListener("click", function() {
  var imageContainer = document.getElementById("myDiv");
  imageContainer.style.backgroundImage = ""; 
  imageContainer.classList.toggle("new-images");
  var imageContainer = document.getElementById("mydiv1");
  imageContainer.style.backgroundImage = ""; 
  imageContainer.classList.toggle("new-images");
});
document.getElementById("btn1").addEventListener("click", function() {
  var imageContainer = document.getElementById("myDiv");
  imageContainer.style.backgroundImage = ""; 
  imageContainer.classList.toggle("new-images");
  var imageContainer = document.getElementById("mydiv1");
  imageContainer.style.backgroundImage = ""; 
  imageContainer.classList.toggle("new-images");
});
document.getElementById("btn2").addEventListener("click", function() {
  var imageContainer = document.getElementById("myDiv");
  imageContainer.style.backgroundImage = ""; 
  imageContainer.classList.toggle("new-images");
  var imageContainer = document.getElementById("mydiv1");
  imageContainer.style.backgroundImage = ""; 
  imageContainer.classList.toggle("new-images");
});

