// elements to add function to navbar
const bars = document.querySelector("#bars-open");
const x = document.querySelector("#x-close");
const navItems = document.querySelectorAll(".nav-item");

// element to clear the submit button
const form = document.getElementById("contact-form");

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

// Resets the form
form.addEventListener("submit", function (event) {
  event.preventDefault();

  form.reset();
});
