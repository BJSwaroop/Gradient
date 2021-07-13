AOS.init({
  offset: 400,
  duration: 1000
});

function openNav() {
  document.getElementById("mobile__menu").style.width = "100%";
}

function closeNav() {
  document.getElementById("mobile__menu").style.width = "0";
}

// For corousel of the testimonials

var slideIndex = 1;
showSlides(slideIndex);
//function for Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// function for Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("tcard");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "flex";
}

// for the tabs in the protfolio section by calling on click
function active(n) {
  const protfolio = document.getElementsByClassName("tbtn");
  for (i = 0; i < protfolio.length; i++) {
    protfolio[i].classList.remove('active')
  }
  protfolio[n - 1].classList.add('active')
}

// To highlight the elements in navbar of each section respectively
const sections = document.querySelectorAll(".section");
const navLi = document.querySelectorAll("nav ul li");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 1.5) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains("li" + current)) {
      li.classList.add("active");
    }
  });
});
