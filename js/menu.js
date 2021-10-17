const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

const welcome = document.getElementById("hiddenWelcome");
const museum = document.getElementById("hiddenMuseum");
const btn = document.getElementById("hiddenButton");
  
let array =[welcome, museum, btn];

hamburger.addEventListener("click", smallscreenMenu);

function smallscreenMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    welcome.classList.toggle("active");
    museum.classList.toggle("active");
    btn.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    welcome.classList.remove("active");
    museum.classList.remove("active");
    btn.classList.remove("active");
}