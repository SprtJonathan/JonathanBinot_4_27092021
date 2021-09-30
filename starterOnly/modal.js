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
  let goNumberId = document.querySelector('input[name="quantity"]');
  let locationRadioId = document.querySelector(
    'input[name="location"]:checked'
  );
  goNumberId.attributes["required"] = "";

  // Vérification des caractères via des regex
  let verifyLetters = /[A-Za-z]/; // Vérification des lettres uniquement
  let verifyNumbers = /[0-9]/; // Vérification des chiffres uniquement
  let verifyEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // Vérification de l'email
  let verifyCharacters = /[*?":{}|<>]/; // Vérification des caractères spéciaux

  // Création de variables pour l'affichage des erreurs
  let formErrorHTML =
    "<div id='form-alert'class='alert-block'><div class='alert-danger'><strong class='alert-text'>";
  let badValue = "Format incorrect:";
  let badValueLetter = " - Lettres interdites";
  let badValueFigure = " - Chiffres interdits";
  let badValueChar = " - Caractères spéciaux interdits";
  let badValueEmail = " Format d'email incorrect:";

  // Récupération des inputs
  let fname = fnameId.value;
  let lname = lnameId.value;
  let email = emailId.value;
  let goNumber = goNumberId.value;
  let locationRadio = null;

  // Si le nombre de game on est > 0 alors on rend le choix de ville obligatoire
  if (goNumber > 0) {
    if (locationRadioId != null) {
      locationRadio = locationRadioId.value;
      console.log(locationRadio);
    } else {
      console.log("localisation vide");
      document
        .getElementById("localisation")
        .insertAdjacentHTML(
          "afterend",
          formErrorHTML +
            "Erreur: Merci de sélectionner une localisation" +
            "<br>" +
            "</strong></div></div>"
        );
    }
  }

  // Vérification de la validité des différents inputs
  // Prénom
  let fnameCheck = checkIfEmpty(
    fname,
    fnameId,
    verifyNumbers.test(fname) | verifyCharacters.test(fname),
    badValue + badValueFigure + badValueChar
  );

  console.log(fnameCheck + "fnamecheck");

  /*if (verifyEmpty.test(fname) == false) {
    fnameCheck = checkFormInput(
      verifyNumbers.test(fname) | verifyCharacters.test(fname),
      true,
      fname,
      fnameId,
      formErrorHTML + badValue + badValueFigure + badValueChar
    );
  } else {
    fnameCheck = emptyFormInput(fnameId)
  }*/

  // Nom de famille
  let lnameCheck = checkIfEmpty(
    lname,
    lnameId,
    verifyNumbers.test(lname) | verifyCharacters.test(lname),
    badValue + badValueFigure + badValueChar
  );

  /*let lnameCheck = checkFormInput(
    verifyNumbers.test(lname) |
      verifyCharacters.test(lname) |
      verifyEmpty.test(lname),
    true,
    lname,
    lnameId,
    formErrorHTML + badValue + badValueFigure + badValueChar
  );*/

  // Email
  let emailCheck = checkEmailFormat(
    email,
    emailId,
    verifyEmail.test(email),
    badValueEmail
  );

  console.log("retour du check email : " + emailCheck);

  /*let emailCheck = checkFormInput(
    verifyEmail.test(email),
    false,
    email,
    emailId,
    formErrorHTML + badValueEmail + badValueChar
  );*/

  // Nombre de tournois Game ON
  let goNumberCheck = checkIfEmpty(
    goNumber,
    goNumberId,
    verifyNumbers.test(goNumber) | verifyCharacters.test(goNumber),
    badValueLetter
  );
  /*let goNumberCheck = checkFormInput(
    verifyLetters.test(goNumber),
    true,
    goNumber,
    goNumberId,
    formErrorHTML + badValue + badValueLetter
  );*/

  console.log(goNumberCheck);

  // Variable comptant le nombre d'erreurs
  let errorCount = lnameCheck + fnameCheck + emailCheck + goNumberCheck;

  // Si la valeur de goNumber est supérieure à 0 mais qu'aucune localisation n'est choisie, alors on renvoie une erreur
  if (goNumber > 0 && locationRadio == null) {
    errorCount += 1;
  }

  console.log("valeur de ErrorCount = " + errorCount);

  if (errorCount != 0) {
    document
      .getElementById("signup-form")
      .insertAdjacentHTML(
        "afterend",
        formErrorHTML +
          "Erreur: Des erreurs sont présentes dans le formulaire, veuillez les corriger" +
          "<br>" +
          "</strong></div></div>"
      );
    formBoolean = false; // Si des erreurs sont retournées alors on définit la variable comme fausse pour que le formulaire ne puisse pas être envoyé
  } else {
    // Construction de l'objet contenant les infos du client
    if (goNumber > 0) {
      user = {
        firstName: fname,
        lastName: lname,
        email: email,
        goNumber: goNumber,
        locationRadio: locationRadio,
      };
    } else {
      user = {
        firstName: fname,
        lastName: lname,
        email: email,
        goNumber: goNumber,
      };
    }
    console.log("formulaire validé");
    formBoolean = true; // Si aucune erreur n'est retournée alors on définit la variable comme vraie pour que le formulaire ne puisse pas être envoyé
  }
}

// Bouton d'achat
let formSubmit = document.getElementById("btn-signup-submit");

let user;

// Fonciton éxecutée lorsque le bouton acheté est cliqué
formSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  verifyForm(user); // Vérification du formulaire avant l'envoi
  console.log(user);
  if (formBoolean == true) {
    // Vérification de la variable booléenne définie précédemment
    modalBtn.insertAdjacentHTML(
      "afterend",
      "<div id='form-alert'><div class='alert alert-primary'><strong>" +
        "Formulaire valide" +
        "</strong></div></div>"
    ); // Si vrai, alors on affiche un message de confirmation pour la validation du formulaire
  }
  console.log(formBoolean);
});
