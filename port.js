var path = window.location.pathname;
var page = path.split("/").pop();

if (page == "portfolio.html"){
  var hello = document.getElementsByClassName(".font");
  var big = document.querySelector("*");

  document.querySelector(".font").addEventListener("click", function() {
    big.classList.add("larger");

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
    var dots = document.getElementsByClassName("dot");
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
  }
}


else {
  var hello = document.getElementsByClassName(".font");
  var big = document.querySelector("*");

  document.querySelector(".font").addEventListener("click", function() {
    big.classList.add("larger");

  });
}