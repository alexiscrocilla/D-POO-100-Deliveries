// Attendre que le DOM soit complètement chargé
document.addEventListener("DOMContentLoaded", () => {
    // Sélectionner l'élément avec l'id "tag" et la classe "bg"
    const exclusiveLabel = document.querySelector("#tag.bg");

    // Vérifier que l'élément existe avant de le supprimer
    if (exclusiveLabel) {
        exclusiveLabel.remove(); // Supprime l'élément du DOM
    }
});
