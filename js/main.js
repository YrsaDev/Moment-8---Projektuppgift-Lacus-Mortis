"use strict";
/*
 * Laboration 8 - Projektuppgift
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

// Besöksformulär
const visitForm = document.querySelector("#visitform"); // js hittar forumlär via ID
visitForm.addEventListener("submit", function (event) {  // reaktion på skicka, "listener"lyssnar efter händelse, "submit" är händelsen vid skick, "function" är funktionen när så sker
  event.preventDefault();  // förhindrar att sidan laddas om vid skick
  const name = document.querySelector("#name").value;  //"query-del" hittar Namn-fält i HTML, ".value" hämtar värde skrivet, "const name" sparar värdet i en variabel
  const email = document.querySelector("#email").value;
  const visitType = document.querySelector("#visittype").value;
  const message = document.querySelector("#message").value;

  console.log(message);
}); 