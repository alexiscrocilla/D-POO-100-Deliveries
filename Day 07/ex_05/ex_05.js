function findClosestResult(functionsObj, inputNumber, outputNumber) {
    // Initialiser les variables pour suivre la clé la plus proche et la distance minimale
    let closestKey = null;
    let minDistance = Infinity;

    // Parcourir les clés de l'objet functionsObj
    for (const key in functionsObj) {
        if (functionsObj.hasOwnProperty(key)) {
            const func = functionsObj[key]; // Récupérer la fonction
            const result = func(inputNumber); // Appliquer la fonction
            const distance = Math.abs(result - outputNumber); // Calculer la distance absolue

            // Mettre à jour si une distance plus petite est trouvée
            if (distance < minDistance) {
                closestKey = key;
                minDistance = distance;
            }
        }
    }

    // Retourner la clé de la fonction la plus proche
    return closestKey;
}

// Exemple d'utilisation pour tester (facultatif dans le fichier final)
const fObj = {
    multipleByEight: (x) => x * 8,
    square: (x) => x * x,
    addSixty: (x) => x + 60
};

console.log(findClosestResult(fObj, 5, 26)); // Résultat attendu : 'square'
console.log(findClosestResult(fObj, 10, 5)); // Résultat attendu : 'addSixty'
console.log(findClosestResult(fObj, 5, 45)); // Résultat attendu : 'multipleByEight'
