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

let formBoolean = false; // Variable booléenne permettant de valider le formulaire

async function verifyForm() {
  // Variables
  let fnameId = document.getElementById("first");
  let lnameId = document.getElementById("last");
  let emailId = document.getElementById("email");
  let birthdateId = document.getElementById("birthdate");
  let goNumberId = document.getElementById("number");

  // Vérification des caractères via des regex
  let verifyLetters = /[A-Za-z]/; // Vérification des lettres uniquement
  let verifyNumbers = /[0-9]/; // Vérification des chiffres uniquement
  let verifyEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // Vérification de l'email
  let verifyCharacters = /[*?":{}|<>]/; // Vérification des caractères spéciaux

  // Création de variables pour l'affichage des erreurs
  let formErrorHTML = "<div id='form-alert'><div class='alert-danger'><strong>";
  let badValue = "Format incorrect:";
  let badValueLetter = " - Lettres interdites";
  let badValueFigure = " - Chiffres interdits";
  let badValueChar = " - Caractères spéciaux interdits";
  let badValueEmail = " Format d'email non autorisé:";

  // Récupération des inputs
  let fname = fnameId.value;
  let lname = lnameId.value;
  let email = emailId.value;
  let goNumber = goNumberId.value;

  // Vérification de la validité des différents inputs
  // Nom de famille
  let lnameCheck = checkFormInput(
    verifyNumbers.test(lname) | verifyCharacters.test(lname),
    true,
    lname,
    lnameId,
    formErrorHTML + badValue + badValueFigure + badValueChar
  );

  // Prénom
  let fnameCheck = checkFormInput(
    verifyNumbers.test(fname) | verifyCharacters.test(fname),
    true,
    fname,
    fnameId,
    formErrorHTML + badValue + badValueFigure + badValueChar
  );

  // Email
  let emailCheck = checkFormInput(
    verifyEmail.test(email),
    false,
    email,
    emailId,
    formErrorHTML + badValueEmail + badValueChar
  );

  // Adresse
  let addressCheck = checkFormInput(
    verifyCharacters.test(address),
    true,
    address,
    addressId,
    formErrorHTML + badValue + badValueChar
  );

  // Complément d'adresse
  let address2Check = checkFormInput(
    verifyCharacters.test(address),
    true,
    address2,
    address2Id,
    formErrorHTML + badValue + badValueChar
  );

  // Ville
  let cityCheck = checkFormInput(
    verifyNumbers.test(city) | verifyCharacters.test(city),
    true,
    city,
    cityId,
    formErrorHTML + badValue + badValueFigure + badValueChar
  );

  // Code postal
  let zipcodeCheck = checkFormInput(
    verifyCharacters.test(zipcode) | verifyLetters.test(zipcode),
    true,
    zipcode,
    zipcodeId,
    formErrorHTML + badValue + badValueLetter + badValueChar
  );

  // Variable comptant le nombre d'erreurs
  let errorCount =
    lnameCheck +
    fnameCheck +
    emailCheck +
    addressCheck +
    address2Check +
    cityCheck +
    zipcodeCheck;

  if (errorCount != 0) {
    shoppingForm.insertAdjacentHTML(
      "afterend",
      formErrorHTML +
        "Erreur: Des erreurs sont présentes dans le formulaire, veuillez les corriger" +
        "<br>" +
        "</strong></div></div>"
    );
    formBoolean = false; // Si des erreurs sont retournées alors on définit la variable comme fausse pour que le formulaire ne puisse pas être envoyé
  } else {
    // Construction de l'objet contenant les infos du client
    user = {
      firstName: fname,
      lastName: lname,
      email: email,
      goNumber: goNumber,
    };
    console.log("formulaire validé");
    formBoolean = true; // Si aucune erreur n'est retournée alors on définit la variable comme vraie pour que le formulaire ne puisse pas être envoyé
  }
}

// Bouton d'achat
let formSubmit = document.getElementById("btn-signup-submit");

// Fonciton éxecutée lorsque le bouton acheté est cliqué
formSubmit.addEventListener("submit", (event) => {
  event.preventDefault();
  verifyForm(user); // Vérification du formulaire avant l'envoi
  console.log(user);
  if (formBoolean == true) {
    // Vérification de la variable booléenne définie précédemment
    shoppingForm.insertAdjacentHTML(
      "afterend",
      "<div id='form-alert'><div class='alert alert-primary'><strong>" +
        "Formulaire valide" +
        "</strong></div></div>"
    ); // Si vrai, alors on affiche un message de confirmation pour la validation du formulaire
  }
  console.log(formBoolean);
});
