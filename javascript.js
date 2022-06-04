// elements to add function to navbar
const bars = document.querySelector("#bars-open");
const x = document.querySelector("#x-close");
const navItems = document.querySelectorAll(".nav-item");

// element to clear the submit button
const form = document.getElementById("contact-form");

// element to change pictures
const picture = document.querySelector(".first-picture");
const secondPicture = document.querySelector(".second-picture");

// Opens the navbar
bars.onclick = function () {
  bars.className += "fa-solid fa-bars fa-2x hide";
  x.className += "fa-solid fa-xmark fa-2x show";
  navItems.forEach((item) => {
    item.className += " show";
  });
};

// Closes the navbar
x.onclick = function () {
  bars.className = "fa-solid fa-bars fa-2x";
  x.className = "fa-solid fa-xmark fa-2x";
  const addClass = ["one", "two", "three", "four"];

  for (let i = 0; i < 4; i++) {
    navItems[i].className = "nav-item " + addClass[i];
  }
};

// Functions to change the about me section pictures.
picture.addEventListener("mouseover", function () {
  picture.style.display = "none";
  secondPicture.style.display = "block";
});

secondPicture.addEventListener("mouseout", function () {
  picture.style.display = "block";
  secondPicture.style.display = "none";
});

// Resets the form
form.addEventListener("submit", function (event) {
  event.preventDefault();

  form.reset();
});

// Slideshow code
let slideIndex = 1;
showSlides(slideIndex);
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const dotOne = document.querySelector(".dot-one");
const dotTwo = document.querySelector(".dot-two");

prev.addEventListener("click", function () {
  plusSlides(-1);
});
next.addEventListener("click", function () {
  plusSlides(1);
});
dotOne.addEventListener("click", function () {
  currentSlide(1);
});
dotTwo.addEventListener("click", function () {
  currentSlide(2);
});

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".projectSlides");
  let dots = document.querySelectorAll(".dots");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
