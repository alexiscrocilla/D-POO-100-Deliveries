// Attendre que le DOM soit complètement chargé
document.addEventListener("DOMContentLoaded", () => {
    // Sélectionner le bouton "ADD TO CART"
    const cartButton = document.querySelector(".cart-btn");

    // Vérifier que le bouton existe
    if (cartButton) {
        // Changer le texte du bouton en "CHANGE COLOR"
        cartButton.textContent = "CHANGE COLOR";

        // Ajouter un gestionnaire d'événement "click"
        cartButton.addEventListener("click", () => {
            // Générer une couleur aléatoire
            const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

            // Changer la couleur d'arrière-plan de la page
            document.body.style.backgroundColor = randomColor;
        });
    }
});
