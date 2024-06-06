/*  MENU */

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");
  var burgerMenu = document.querySelector(".burger-menu");
  var dropdownContent = document.querySelector(".dropdown-content");

  console.log(burgerMenu, dropdownContent);

  burgerMenu.addEventListener("click", function () {
    console.log("Burger menu clicked");
    dropdownContent.classList.toggle("show");
  });
});

//* MENU SUT *//

//* FOOTER //*

document.addEventListener("DOMContentLoaded", sidenVises);

function sidenVises() {
  console.log("sidenVises");
  document.querySelector("#footer").classList.add("footer");
}

//* FOOTER SLUT //*
