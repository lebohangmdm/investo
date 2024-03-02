"use strict";

const navBtn = document.querySelector(".mobile-nav-toggle");
const header = document.querySelector(".header");

navBtn.addEventListener("click", function () {
  header.classList.toggle("nav-open");
  console.log(header.classList);
});
