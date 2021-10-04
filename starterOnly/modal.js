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

let fnameId = document.getElementById("first");
let lnameId = document.getElementById("last");
let emailId = document.getElementById("email");
let birthId = document.getElementById("birthdate");
let quantityId = document.getElementById("quantity");
let radioBlockId = document.getElementById("localisation");
let radioId = document.getElementsByName("location");

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
    "<span id='" + name + "-error' class='error-text'><span>"
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

let formBoolean = false; // Variable booléenne permettant de valider le formulaire

async function verifyForm() {
  // Validation Email par expression régulière
  function emailRegexValidation(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function nameRegexValidation(name) {
    const re = [a - zA - Z];
    return re.test(String(name));
  }

  function validateFname() {
    if (fnameId.value.length < 2) {
      first_errMessage.textContent =
        "Please enter 2+ characters for name field";
      first_errMessage.style.display = "block";
      return false;
    } else {
      first_errMessage.style.display = "none";
      return true;
    }
  }

  function validateLname() {
    if (formLast.value.length < 2) {
      last_errMessage.textContent = "Please enter 2+ characters for name field";
      last_errMessage.style.display = "block";
      return false;
    } else {
      last_errMessage.style.display = "none";
      return true;
    }
  }

  function validateEmail() {
    if (!confirmEmail(formEmail.value)) {
      email_errMessage.textContent = "You must enter a valid email";
      email_errMessage.style.display = "block";
      return false;
    } else {
      email_errMessage.style.display = "none";
      return true;
    }
  }

  function validateBirthdate() {
    if (!formBirthdate.value) {
      birthdate_errMessage.textContent = "You must enter your date of birth";
      birthdate_errMessage.style.display = "block";
      return false;
    } else {
      birthdate_errMessage.style.display = "none";
      return true;
    }
  }

  function validateQuantity() {
    if (formQuantity.value < 0 || formQuantity.value === "") {
      quantity_errMessage.textContent = "You must enter a valide value";
      quantity_errMessage.style.display = "block";
      return false;
    } else {
      quantity_errMessage.style.display = "none";
      return true;
    }
  }

  function validateLocation() {
    let oneIsChecked = false;
    for (let i = 0; i < formLocation.length; i++) {
      if (formLocation[i].checked) {
        oneIsChecked = true;
        break;
      }
    }

    if (!oneIsChecked) {
      location_errMessage.textContent = "You must choose one option";
      location_errMessage.style.display = "block";
      return false;
    } else {
      location_errMessage.style.display = "none";
      return true;
    }
  }

  function validateCheckbox1() {
    if (!formCheckbox1.checked) {
      checkbox1_errMessage.textContent =
        "You must check to agree to terms and conditions";
      checkbox1_errMessage.style.display = "block";
      return false;
    } else {
      checkbox1_errMessage.style.display = "none";
      return true;
    }
  }
}
