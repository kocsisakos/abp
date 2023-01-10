function toggleDrop1() {
  var content1 = document.getElementById("dropdown-content1");
  var btn1 = document.getElementById("dropbtnbtn1");
  var content2 = document.getElementById("dropdown-content2");
  var btn2 = document.getElementById("dropbtnbtn2");

  if (content1.className === "hide") {
    content1.className = "show";
  } else {
    content1.className = "hide";
  }
  
  if (btn1.className === "normal") {
    btn1.className = "rotate";
  } else {
    btn1.className = "normal";
  }

  if (content2.className === "show") {
    content2.className = "hide";
  }

  if (btn2.className === "normal") {
    btn2.className = "rotate";
  }
}

function toggleDrop2() {
  var content1 = document.getElementById("dropdown-content1");
  var btn1 = document.getElementById("dropbtnbtn1");
  var content2 = document.getElementById("dropdown-content2");
  var btn2 = document.getElementById("dropbtnbtn2");

  if (content2.className === "hide") {
    content2.className = "show";
  } else {
    content2.className = "hide";
  }
  
  if (btn2.className === "normal") {
    btn2.className = "rotate";
  } else {
    btn2.className = "normal";
  }

  if (content1.className === "show") {
    content1.className = "hide";
  }

  if (btn1.className === "normal") {
    btn1.className = "rotate";
  }
}

let slideIndex = 1;
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
  let i;
  let slides = document.getElementsByClassName("Slides");
  let captionText = document.getElementById("caption");
  let small = document.getElementsByClassName("demo");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {slides[i].style.display = "none";}
  for (i = 0; i < small.length; i++) {small[i].className = small[i].className.replace(" active", "");}
  slides[slideIndex-1].style.display = "block";
  small[slideIndex-1].className += " active";
  captionText.innerHTML = small[slideIndex-1].alt;
} 

while (true) {
  let vid = document.getElementById("autoplayvid");
  if (slideIndex != 1){
   vid.pause()
  } else {
    vid.play()
  }
}

