// Afficher la valeur de la variable
displayThisText("The variable value is '" + input_var + "'.");

// Détermination et affichage du type de variable
if (typeof input_var === "string") {
    displayThisText("Its type is 'String'.");
} else if (typeof input_var === "boolean") {
    displayThisText("Its type is 'Boolean'.");
} else if (typeof input_var === "number") {
    // Vérification Integer ou Float
    if (Number.isInteger(input_var)) {
        displayThisText("Its type is 'Integer'.");
    } else {
        displayThisText("Its type is 'Float'.");
    }
}

// Vérification de nerd
if (input_var == 42) {
    displayThisText("It is the meaning of life.");
}
