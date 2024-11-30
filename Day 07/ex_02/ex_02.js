document.addEventListener("DOMContentLoaded", () => {
    const circle = document.querySelector("#circle");
    let currentRotation = 0; // Stocker la rotation actuelle du cercle

    // Fonction pour faire pivoter le cercle
    function rotateCircle(step) {
        if (step === 0) {
            currentRotation = 0; // Réinitialiser la rotation
        } else {
            currentRotation -= step; // Inverser la direction par rapport à l'ancien code
        }

        // Appliquer la rotation au cercle
        if (circle) {
            circle.style.transform = `rotate(${currentRotation}deg)`;
        }
    }

    // Ajouter les gestionnaires d'événements aux boutons
    const buttons = document.querySelectorAll(".rotate-button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const step = parseInt(button.value, 10); // Extraire la valeur du bouton
            if (!isNaN(step)) {
                rotateCircle(step); // Appeler la fonction avec le pas
            }
        });
    });
});
