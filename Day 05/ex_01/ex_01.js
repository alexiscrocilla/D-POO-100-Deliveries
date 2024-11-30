// Attendre que le DOM soit complètement chargé
document.addEventListener("DOMContentLoaded", () => {
    // Sélectionner l'élément avec l'id correspondant au prix
    const priceElement = document.getElementById("price");

    // Vérifier que l'élément existe avant de le modifier
    if (priceElement) {
        priceElement.textContent = "0 €";
    }
});
