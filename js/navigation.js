const navHamburger = document.querySelector(".main-nav-hamburger");
const pageHeader = document.querySelector("header");
const mainNav = document.querySelector(".main-nav");
const navItems = document.querySelectorAll(".main-nav");

navHamburger.addEventListener("click", toggleMenu);

function toggleMenu() {
  pageHeader.classList.toggle("open");
  navHamburger.classList.toggle("open");
  mainNav.classList.toggle("open");
  slideInItems();
}

function slideInItems() {
  for (let i = 0; i < navItems[0].children.length; i++) {
    setTimeout(() => {
      navItems[0].children[i].classList.toggle("show");
    }, i * 275);
  }
}
