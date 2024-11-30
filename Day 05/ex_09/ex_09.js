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

    // Position actuelle du carré (commence à initialTop)
    let currentTop = initialTop;

    // Événement au clic sur le carré jaune
    yellowSquare.addEventListener("click", () => {
        // Augmenter le poids
        weight++;

        // Mettre à jour l'affichage du poids
        if (weightDisplay) {
            weightDisplay.textContent = `${weight} kg`;
        }

        // Calculer la poussée d'Archimède
        const buoyancyForce = squareVolume * waterDensity; // Poussée d'Archimède

        // Calculer la nouvelle position (ajouter uniquement si le poids dépasse la poussée)
        if (weight > buoyancyForce) {
            currentTop += (weight - buoyancyForce) * sinkingFactor;
        }

        // Limiter la descente à une hauteur maximale de 800px
        currentTop = Math.min(currentTop, 800);

        // Appliquer la nouvelle position au carré
        yellowSquare.style.top = `${currentTop}px`;
    });
});
