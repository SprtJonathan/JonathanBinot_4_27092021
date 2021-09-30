let formErrorHTML =
  "<div id='form-alert'class='alert-block'><div class='alert-danger'><strong class='alert-text'>";

// Fonction permettant de vérifier la validité des différents inputs du formulaire d'inscription
function checkFormInput(
  checkedRegex,
  expextedValue,
  inputName,
  inputId,
  errorType
) {
  // Base du message d'erreur
  formErrorHTML =
    "<div id='form-alert" + " alert-id-" +
    inputId.getAttribute("id") +
    "' class='alert-block'><div class='alert-danger'><strong class='alert-text'>";

  // Variable comptant le nombre d'erreurs
  let errorCount = 0;
  console.log("CheckedRegex = " + checkedRegex);
  if (checkedRegex == expextedValue) {
    inputId.insertAdjacentHTML(
      "afterend",
      formErrorHTML + errorType + "</strong></div></div>"
    );
    console.log("Erreur: " + inputName);
    errorCount = 1;
    console.log(errorCount);
  } else {
    console.log("Champ " + inputId.id + " validé: " + inputName);
  }
  console.log(errorCount);
  return errorCount;
}

// Fonction permettant de retourner une erreur de champ vide
function emptyFormInput(inputId) {
  // Variable comptant le nombre d'erreurs
  let errorCount = 1;

  inputId.insertAdjacentHTML(
    "afterend",
    formErrorHTML +
      "Champ vide ou trop peu de lettres (Min. 2)" +
      "</strong></div></div>"
  );
  console.log("Champ " + inputId + " vide");
  errorCount = 1;
  console.log(errorCount);
  return errorCount;
}

let verifyEmpty = /^.{0}$/; // Regex permettant de vérifier si un input est vide ou non

// Fonction vérifiant si un input est vide ou non. Si oui alors on renvoie une erreur, sinon on vérifie s'il y a une erreur
function checkIfEmpty(inputName, inputId, checkedRegex, errorType) {
  let errorCount;
  if (verifyEmpty.test(inputName) == true || inputName.length <= 1) {
    errorCount = emptyFormInput(inputId);
  } else {
    errorCount = checkFormInput(
      checkedRegex,
      true,
      inputName,
      inputId,
      errorType
    );
  }
  return errorCount;
}

// Fonction vérifiant le format de l'email
function checkEmailFormat(inputName, inputId, checkedRegex, errorType) {
  let errorCount;
  if (verifyEmpty.test(inputName) == true) {
    errorCount = 1;
    inputId.insertAdjacentHTML(
      "afterend",
      formErrorHTML +
        errorType +
        " Champ vide, merci d'indiquer une adresse email" +
        "</strong></div></div>"
    );
  } else {
    if (checkedRegex == false) {
      console.log("Retour du check regex email : " + checkedRegex);
      inputId.insertAdjacentHTML(
        "afterend",
        formErrorHTML +
          errorType +
          " Merci d'entrer une adresse mail valide" +
          "</strong></div></div>"
      );
    }
    errorCount = 0;
  }
  return errorCount;
}
