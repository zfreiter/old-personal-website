const bars = document.querySelector("#bars-open");
const x = document.querySelector("#x-close");
const navItems = document.querySelectorAll(".nav-item");

bars.onclick = function () {
  bars.className += "fa-solid fa-bars fa-2x hide";
  x.className += "fa-solid fa-xmark fa-2x show";
  navItems.forEach((item) => {
    item.className += " show";
  });
};

x.onclick = function () {
  bars.className = "fa-solid fa-bars fa-2x";
  x.className = "fa-solid fa-xmark fa-2x";
  const addClass = ["one", "two", "three"];

  for (let i = 0; i < 3; i++) {
    navItems[i].className = "nav-item " + addClass[i];
  }
};
