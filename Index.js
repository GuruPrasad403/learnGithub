'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const header = document.querySelector("[data-header]"); // assuming you have a header element
const goTopBtn = document.querySelector("[data-go-top-btn]"); // assuming you have a go-top button

let navbarActive = false;

const navToggleEvent = function (elem) {
  navbarActive = !navbarActive;
  navbarActive ? navbar.classList.add("active") : navbar.classList.remove("active");
  overlay.classList.toggle("active");
  navOpenBtn.classList.toggle("active");
  navCloseBtn.classList.toggle("active");
};

navOpenBtn.addEventListener("click", navToggleEvent);
navCloseBtn.addEventListener("click", navToggleEvent);

// assuming you want to close the navbar when a nav link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", navToggleEvent);
});