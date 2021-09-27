// Fonction permettant de vérifier la validité des différents inputs du formulaire d'inscription
function checkFormInput(checkedRegex, expextedValue, inputName, inputId, errorType) {
    // Variable comptant le nombre d'erreurs
    let errorCount = 0;
    if (checkedRegex == expextedValue) {
        inputId.insertAdjacentHTML(
            "afterend",
            errorType +
            "</strong></div></div>"
        );
        console.log("Erreur: " + inputName);
        errorCount = 1;
        console.log(errorCount)
    } else {
        console.log("Champ " + inputId.id + " validé: " + inputName);
    }
    console.log(errorCount)
    return errorCount;
}