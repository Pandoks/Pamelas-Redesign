/*****************************************

JS File corresponding to interaction 
elements on the website.

*****************************************/


/*****************************************/
/* Slide Shows */
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  slides[slideIndex-1].style.display = "block";  

}

/*****************************************/


/*****************************************/
/* Accordion Menu */
function showPanel() {
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
}
/*****************************************/


/*****************************************/
/* Validating Form */
function validate() {
  var zip = $("#zip").val();
  if(zip.length != 5 && zip.length != 0) {
    alert("Zip code is in incorrect format.");
    return false;
  }
}
/*****************************************/