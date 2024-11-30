// Attendre que le DOM soit complètement chargé
document.addEventListener("DOMContentLoaded", () => {
    // Sélectionner le bouton "ADD TO CART"
    const cartButton = document.querySelector(".cart-btn");

    // Vérifier que le bouton existe
    if (cartButton) {
        // Ajouter un gestionnaire d'événement "click"
        cartButton.addEventListener("click", (event) => {
            // Empêcher l'action par défaut du lien
            event.preventDefault();

            // Afficher une pop-up avec le message "Thanks!"
            alert("Thanks!");
        });
    }
});
