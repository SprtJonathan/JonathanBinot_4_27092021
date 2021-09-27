function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground"); // Div d'arrière plan du formulaire
const modalBtn = document.querySelectorAll(".modal-btn"); // Bouton "Je m'inscris"
const formData = document.querySelectorAll(".formData"); // Formulaire
const closeBtn = document.getElementById("close-button"); // Close modal button

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal event
closeBtn.addEventListener("click", closeModal);

// Close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// Vérification des champs
// Variables
let fname = document.getElementById("first");
let lname = document.getElementById("last");
let email = document.getElementById("email");
let birthdate = document.getElementById("birthdate");
let goNumber = document.getElementById("number");

let nameRegex = /^[a-zA-Z ]{2,30}$/;
