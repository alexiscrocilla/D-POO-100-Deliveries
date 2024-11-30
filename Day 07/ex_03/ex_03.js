function map(elements, modifier) {
    // Vérification que le premier paramètre est un tableau
    if (!Array.isArray(elements)) {
        throw new Error("The first argument must be an array.");
    }

    // Vérification que le second paramètre est une fonction
    if (typeof modifier !== "function") {
        throw new Error("The second argument must be a function.");
    }

    // Initialiser un tableau pour les résultats
    const result = [];

    // Parcourir le tableau et appliquer le callback à chaque élément
    for (let i = 0; i < elements.length; i++) {
        result.push(modifier(elements[i]));
    }

    // Retourner le tableau des résultats
    return result;
}

// Exemple d'utilisation
function isEven(number) {
    return number % 2 === 0;
}

console.log(map([5, 8, 10], isEven)); // Output: [false, true, true]
