"use strict";
/*
 * Laboration 6 - Projektuppgift
 * Namn: Jeanette Räisänen
 */

const menuBtn = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
  if (menu.classList.contains("open")) {
    menu.classList.remove("open");
  } else {
    menu.classList.add("open");
  }
});