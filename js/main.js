"use strict";
/*
 * Laboration 6 - Projektuppgift
 * Namn: Jeanette Räisänen
 */

// Funktion för att öppna och stänga menyn när hamburgermenyn klickas
const menuBtn = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
  if (menu.classList.contains("open")) {
    menu.classList.remove("open");
  } else {
    menu.classList.add("open");
  }
});