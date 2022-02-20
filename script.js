function getRelativeCoordinates(mouse, element){
  let rect = element.getBoundingClientRect();
  return {
    x: mouse.clientX - rect.left,
    y: mouse.clientY - rect.top
  };
}

var intervalHandle = setInterval(function(){

  var newDiv = document.getElementById("kitty");
  newDiv.style.position = "absolute";
  newDiv.style.width = "100px";
  newDiv.style.height = "100px";
  // newDiv.style.backgroundColor = 'rgb('+ 255 * Math.random() +', '+ 255 * Math.random() +', '+ 255 *  Math.random() +')';
  newDiv.style.top = window.innerHeight * Math.random() + "px";
  newDiv.style.left = window.innerWidth * Math.random() + "px";

  newDiv.addEventListener('click', function(){
    newDiv.remove();
  });

  document.body.appendChild(newDiv);

}, 5000);

var sections= document.getElementsByClassName('section');

'use strict'
const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
});


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
