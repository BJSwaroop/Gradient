AOS.init({
  offset: 100,
  duration: 1000
});


// Scrolling effects

// for hamburger icon
function openNav() {
  document.getElementById("mobile__menu").style.width = "100%";
}

function closeNav() {
  document.getElementById("mobile__menu").style.width = "0";
}
// For team cards
const teamSlide = document.querySelectorAll(".team-card");
const teamSlides = teamSlide.length;
var currentTeamSlide = 0;
var teamSlider;
var teamRepeater = () =>{
   teamSlider = setInterval(function(){
     currentTeamSlide++;
     if(currentTeamSlide>teamSlides-3){
         currentTeamSlide = 0;
     }
     teamSlide.forEach((tslide) => {
       tslide.classList.remove("active");
     });
     teamSlide[currentTeamSlide].classList.add("active");
     teamSlide[currentTeamSlide+1].classList.add("active");
     teamSlide[currentTeamSlide+2].classList.add("active");
   },3000);
}
teamRepeater();
// For corousel of the testimonials
const slides = document.querySelectorAll(".tcard");
const dots = document.querySelectorAll(".dot");
const numberofSlides = slides.length;
const nextSlide = document.querySelector(".next");
const prevSlide = document.querySelector(".prev");
var slideNumber = 0;
function currentSlide(cur){
   slideNumber = cur-1;
   slides.forEach((slide) => {
     slide.classList.remove("active");
   });
   dots.forEach((dot) => {
     dot.classList.remove("dotactive");
   });
   slides[slideNumber].classList.add("active");
   dots[slideNumber].classList.add("dotactive");
}
// for next slides
nextSlide.addEventListener('click',() =>{
  slideNumber++;
  if(slideNumber>numberofSlides-1){
      slideNumber = 0;
  }
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  dots.forEach((dot) => {
    dot.classList.remove("dotactive");
  });
  slides[slideNumber].classList.add("active");
  dots[slideNumber].classList.add("dotactive");
})
// for previous slides
prevSlide.addEventListener("click",()=>{
  slideNumber--;
  if(slideNumber<0){
    slideNumber = numberofSlides-1;
  }
  slides.forEach(slide => {

    slide.classList.remove("active");
  })
  dots.forEach(dot => {

    dot.classList.remove("dotactive");
  })
  slides[slideNumber].classList.add("active");
  dots[slideNumber].classList.add("dotactive");
})
// to make it infinite
var playSlider;
var repeater = () =>{
   playSlider = setInterval(function(){
     slideNumber++;
     if(slideNumber>numberofSlides-1){
         slideNumber = 0;
     }
     slides.forEach((slide) => {
       slide.classList.remove("active");
     });
     dots.forEach((dot) => {
       dot.classList.remove("dotactive");
     });
     slides[slideNumber].classList.add("active");
     dots[slideNumber].classList.add("dotactive");
   },3000);
}
repeater();
const slider = document.querySelector(".testimonials-corousel");
    //stop the image slider autoplay on mouseover
    slider.addEventListener("mouseover", () => {
      clearInterval(playSlider);
    });

    //start the image slider autoplay again on mouseout
    slider.addEventListener("mouseout", () => {
      repeater();
    });
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
    if (pageYOffset >= sectionTop - sectionHeight /1.5) {
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
