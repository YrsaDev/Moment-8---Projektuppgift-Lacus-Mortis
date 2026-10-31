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
const visitForm = document.querySelector("#visitform");  // js hittar forumlär via ID
if (visitForm) {
  visitForm.addEventListener("submit", function (event) {  // reaktion på skicka, "listener"lyssnar efter händelse, "submit" är händelsen vid skick, "function" är funktionen när så sker
    event.preventDefault();  // förhindrar att sidan laddas om vid skick
    const name = document.querySelector("#name").value;  //"query-del" hittar Namn-fält i HTML, ".value" hämtar värde skrivet, "const name" sparar värdet i en variabel
    const email = document.querySelector("#email").value;
    const visitType = document.querySelector("#visittype").value;
    const message = document.querySelector("#message").value;
    // Validering namn
    if (name.trim() === "") {    //kontroll om namnet är tomt eller bara innehåller mellanslag
      document.querySelector("#formmessage").classList.add("error");  //ändrar format på felmeddelande
      document.querySelector("#formmessage").textContent = "Du måste fylla i ditt namn.";  //varningsmeddelande 
      return;  //avbryter funktionen om namn saknas, körs bara om villkoret i if är true
    }
    // Validering email
    if (email.trim() === "") {
      document.querySelector("#formmessage").classList.add("error");
      document.querySelector("#formmessage").textContent = "Du måste fylla i din e-postadress.";
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {   //kontroll att epost innehåller @ och text före och efter och ! betyder inte, if körs om @ saknas
      document.querySelector("#formmessage").classList.add("error");
      document.querySelector("#formmessage").textContent = "Ange en giltig e-postadress.";
      return; //avbryter funktionen
    }

    // Validering besökstyp
    if (visitType === "") {
      document.querySelector("#formmessage").classList.add("error");
      document.querySelector("#formmessage").textContent = "Du måste välja en besökstyp.";
      return;
    }

    // Validering meddelande
    if (message.trim() === "") {
      document.querySelector("#formmessage").classList.add("error");
      document.querySelector("#formmessage").textContent = "Du måste skriva ett meddelande.";
      return;
    }

    document.querySelector("#formmessage").classList.remove("error");
    document.querySelector("#formmessage").textContent = "Alla fält är korrekt ifyllda!";



  });

  visitForm.addEventListener("input", function () {  //input reagerar på  när något skrivs eller ändras i formuläret
    document.querySelector("#formmessage").textContent = "";  //textContent tömmer bekräftelsemeddelandet
  });

  visitForm.addEventListener("reset", function () {
    document.querySelector("#formmessage").textContent = "";
    document.querySelector("#formmessage").classList.remove("error");
  });
}

// Restricted area
const btn = document.getElementById("verifyBtn");   // js hittar forumlär via ID
const input = document.getElementById("securitycode");  // hämtar lösenordsfältet med ID securitycode från HTML och sparar det i variabeln input
const msg = document.getElementById("securitymessage");   // hämtar elementet från HTML och sparar det i msg så vi kan skriva ut ett svar
const clearBtn = document.getElementById("clearSecurity");
if (btn) {
  btn.addEventListener("click", () => {
    if (input.value.trim() === "") {  // tar bort eventuellt mellanslag i början/slutet för kontrollen
      msg.textContent = "ANGE SÄKERHETSKOD";
      document.body.classList.remove("granted", "denied");
    } else if (input.value === "1111") {
      document.body.classList.remove("denied");
      document.body.classList.add("granted");
      msg.textContent = "ACCESS GRANTED";
    } else {
      document.body.classList.remove("granted");
      document.body.classList.add("denied");
      msg.textContent = "ACCESS DENIED";
    }
  });
}
if (clearBtn) {
  clearBtn.addEventListener("click", function () {
    input.value = "";    // tömmer säkerhetskoden
    msg.textContent = "";    // tar bort access granted/denied

    document.body.classList.remove("granted", "denied");   // återställer den neutrala färgen på bakgrunden
  });
}
if (input) {
  input.addEventListener("input", function () {   // reaktion när något ändras i säkerhetsfältet
    msg.textContent = "";    // tar bort det tidigare åtkomstmeddelandet

    document.body.classList.remove("granted", "denied");  // återställer den neutrala färgen på bakgrunden
  });
}
// Känner av tangetbordstryckning Enter
if (input) {
    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            btn.click();
        }
    });
}
