// Attendre que le DOM soit complètement chargé
document.addEventListener("DOMContentLoaded", () => {
    // Sélectionner tous les éléments <p>
    const paragraphs = document.querySelectorAll("p");

    // Parcourir chaque paragraphe et remplacer son texte par un nombre croissant
    paragraphs.forEach((paragraph, index) => {
        paragraph.textContent = (index).toString();
    });
});
