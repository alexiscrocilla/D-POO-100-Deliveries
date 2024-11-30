document.addEventListener("DOMContentLoaded", () => {
    // Sélectionner le carré jaune
    const yellowSquare = document.querySelector(".ex_09 div:last-child");
    const weightDisplay = document.querySelector(".ex_09 div:nth-child(2)");

    // Poids initial et densité de l'eau
    let weight = 1; // Poids initial en kg
    const waterDensity = 1; // Densité de l'eau (kg/L)
    const squareVolume = 10; // Volume immergé du carré en L
    const initialTop = 360; // Position initiale du carré en pixels

    // Facteur de descente (ajustement en pixels par kg supplémentaire)
    const sinkingFactor = 5;

    // Événement au clic sur le carré jaune
    yellowSquare.addEventListener("click", () => {
        // Augmenter le poids
        weight++;

        // Mettre à jour l'affichage du poids
        if (weightDisplay) {
            weightDisplay.textContent = `${weight} kg`;
        }

        // Calculer la nouvelle position du carré (simule le principe d'Archimède)
        const buoyancyForce = squareVolume * waterDensity; // Poussée d'Archimède
        let newTop;

        // Toujours descendre dès le premier clic
        if (weight > buoyancyForce) {
            // Si le poids dépasse la poussée, descendre en fonction du surplus
            newTop = initialTop + (weight - buoyancyForce) * sinkingFactor;
        } else {
            // Descente minimale dès le premier clic pour que le carré ne reste pas fixe
            newTop = initialTop + (weight * sinkingFactor) / 2;
        }

        // Limiter la position du carré à la hauteur maximale de 800px
        yellowSquare.style.top = `${Math.min(newTop, 800)}px`;
    });
});
