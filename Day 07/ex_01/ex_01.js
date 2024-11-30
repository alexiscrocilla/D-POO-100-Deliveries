function reduceOpacity() {
    // Réduire l'opacité du carré
    const square = document.querySelector("#square");
    if (square) {
        square.style.opacity = parseFloat(square.style.opacity || 1) * 0.5;
    }
}

function resetOpacity() {
    // Réinitialiser l'opacité du carré à 1
    const square = document.querySelector("#square");
    if (square) {
        square.style.opacity = 1;
    }
}

// Ajouter les gestionnaires d'événements
document.addEventListener("DOMContentLoaded", () => {
    const square = document.querySelector("#square");

    if (square) {
        // Réduire l'opacité au survol
        square.addEventListener("mouseover", reduceOpacity);

        // Réinitialiser l'opacité à la sortie du curseur
        square.addEventListener("mouseout", resetOpacity);
    } else {
        console.error("Impossible de trouver l'élément #square.");
    }
});
