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
const formBody = document.getElementById("signup-form");

let formSubmitButton = document.getElementById("button-signup-submit");
let fnameId = document.getElementById("first");
let lnameId = document.getElementById("last");
let emailId = document.getElementById("email");
let birthId = document.getElementById("birthdate");
let quantityId = document.getElementById("quantity");
let radioBlockId = document.getElementById("localisation");
let radioId = document.getElementsByName("location");
let checkbox1Id = document.getElementById("checkbox1");
let checkbox2Id = document.getElementById("checkbox2");

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

  // Suppression des messages d'erreur
  hideError(
    (fnameError,
    lnameError,
    emailError,
    birthdateError,
    quantityError,
    radioError)
  );
}

// Vérification des champs

// Création d'éléments du DOM pour les messages d'erreur

// Fonction créant des messages d'erreur
function createErrorMessage(elementErrorId, name) {
  elementErrorId.insertAdjacentHTML(
    "afterend",
    "<span id='" + name + "-error' class='error-text'></span>"
  );
}

// Fonction permettant de cacher les messages d'erreurs des champs
function hideError(errorName) {
  errorName.style.display = "none";
}

// Erreur du champ Prénom
createErrorMessage(fnameId, "fname");

let fnameError = document.getElementById("fname-error");
hideError(fnameError);

// Message d'erreur du champ nom de famille
createErrorMessage(lnameId, "lname");

let lnameError = document.getElementById("lname-error");
hideError(lnameError);

// Message d'erreur du champ email
createErrorMessage(emailId, "email");

let emailError = document.getElementById("email-error");
hideError(emailError);

// Message d'erreur du champ date de naissance
createErrorMessage(birthId, "birthdate");

let birthdateError = document.getElementById("birthdate-error");
hideError(birthdateError);

// Message d'erreur du champ nombre de Gameon
createErrorMessage(quantityId, "quantity");

let quantityError = document.getElementById("quantity-error");
hideError(quantityError);

// Message d'erreur des radio de localisation
createErrorMessage(radioBlockId, "radio");

let radioError = document.getElementById("radio-error");
hideError(radioError);

// Message d'erreur pour les conditions d'utilisation
let checkbox1Error = document.getElementById("checkbox1-error");
hideError(checkbox1Error);

// Validation Email par expression régulière
function emailRegexValidation(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Validation des noms par expression régulière
function nameRegexValidation(name) {
  const re = /[a-zA-Z]/;
  return re.test(String(name));
}

// Fonction permettant de valider le prénom
function fnameValidation() {
  // Si la valeur du champ est moins longue que deux caractères, on renvoie une erreur
  if (fnameId.value.length < 2) {
    fnameError.textContent = "Merci d'entrer au minimum deux caractères"; // Message d'erreur affiché
    fnameError.style.display = "block"; // On affiche le bloc d'erreur
    return false;
  } else {
    // Sinon, si la valeur du champ contient des chiffres ou caractères spéciaux, on renvoie une erreur
    if (nameRegexValidation(fnameId.value) == false) {
      fnameError.textContent = "Pas de chiffres ou de caractères spéciaux"; // Message d'erreur affiché
      fnameError.style.display = "block"; // On affiche le bloc d'erreur
      return false;
      // Sinon on valide le champ et on renvoie "true"
    } else {
      fnameError.style.display = "none"; // On cache le bloc d'erreur s'il n'y en a pas
      return true;
    }
  }
}

// Fonction permettant de valider le nom de famille : Même fonctionnement que la précédente
function lnameValidation() {
  if (lnameId.value.length < 2) {
    lnameError.textContent = "Merci d'entrer au minimum deux caractères";
    lnameError.style.display = "block";
    return false;
  } else {
    if (nameRegexValidation(lnameId.value) == false) {
      lnameError.textContent = "Pas de chiffres ou de caractères spéciaux";
      lnameError.style.display = "block";
      return false;
    } else {
      lnameError.style.display = "none";
      return true;
    }
  }
}

// Fonction permettant de valider l'email. On utilise l'expression régulière pour vérifier les caractères
function emailValidation() {
  if (emailRegexValidation(emailId.value) == false) {
    emailError.textContent = "Merci de saisir une adresse email valide";
    emailError.style.display = "block";
    return false;
  } else {
    emailError.style.display = "none";
    return true;
  }
}

// Fonction permettant de valider la date de naissance
function birthdateValidation() {
  // Si aucune valeur n'est entrée, alors on renvoie une erreur
  if (!birthId.value) {
    birthdateError.textContent = "Merci d'indiquer votre date de naissance";
    birthdateError.style.display = "block";
    return false;
  } else {
    // Sinon vrai
    birthdateError.style.display = "none";
    return true;
  }
}

// Fonction pour vérifier le nombre de participations passées
function quantityValidation() {
  if (!quantityId.value) {
    // Si aucune valeur n'est entrée, alors on demande de le faire
    quantityError.textContent = "Veuillez entrer une valeur numérique valide";
    quantityError.style.display = "block";
    return false;
  } else {
    // Si la valeur est correcte, on valide
    quantityError.style.display = "none";
    return true;
  }
}

// Fonction permettant de valider la localisation d'une précédente participation
function locationValidation() {
  let isLocationChecked = false; // Variable permettant de savoir si une localisation est déjà sélectionnée
  if (quantityId.value > 0) {
    // Si le nombre de participations passées est supérieur à 0, alors on demande dans quelle ville elle a eu lieu
    for (let i = 0; i < radioId.length; i++) {
      // On parcourt tous les choix de ville disponibles
      if (radioId[i].checked) {
        // Si un choix est sélectionné, alors on renvoie vrai
        isLocationChecked = true;
      }
    }

    if (isLocationChecked == false) {
      // Si aucun choix n'est sélectionné, on affiche un message d'erreur
      radioError.textContent =
        "Merci d'indiquer dans quelle ville vous avez participé";
      radioError.style.display = "block";
      return false;
    } else {
      // Et sinon on cache le message d'erreur
      radioError.style.display = "none";
      return true;
    }
  } else {
    // Si le nombre de participations est égal à 0 alors on ne demande pas de préciser la localisation
    return true;
  }
}

// Vérification de la validation des termes d'utilisation
function checkboxValidation() {
  // Si la boite n'est pas cochée, alors on envoie une erreur
  if (!checkbox1Id.checked) {
    checkbox1Error.textContent =
      "Merci d'accepter les conditions d'utilisation";
    checkbox1Error.style.display = "block";
    return false; // Et on renvoie False
  } else {
    // Sinon on cache le message d'erreur
    checkbox1Error.style.display = "none";
    return true;
  }
}

// Création d'un bloc pour le message de succès
formBody.insertAdjacentHTML(
  "afterend",
  "<span id='success' class='success-text'>Formulaire validé !</span>"
);
let successMessage = document.getElementById("success");
successMessage.style.display = "none"; // On le cache par défaut

// Lorsque l'on clique sur le bouton de validation
formSubmitButton.addEventListener("click", ($event) => {
  $event.preventDefault(); // On empêche le comportement par défaut
  // On vérifie que tous les champs soient validés
  if (
    fnameValidation() &&
    lnameValidation() &&
    emailValidation() &&
    birthdateValidation() &&
    quantityValidation() &&
    locationValidation() &&
    checkboxValidation()
  ) {
    // Si oui on affiche le message de succès
    successMessage.style.display = "block";
    // Et on attend 2 secondes avant de fermer la modale
    setTimeout(closeModal, 2000);
  }
});
