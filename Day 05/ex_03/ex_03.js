// Attendre que le DOM soit complètement chargé
document.addEventListener("DOMContentLoaded", () => {
    // Sélectionner l'élément où ajouter le nouveau texte (par exemple, le dernier paragraphe)
    const paragraphs = document.querySelectorAll("p");

    // Créer un nouvel élément <p> pour le texte à ajouter
    const newParagraph = document.createElement("p");
    newParagraph.textContent = "Now featuring a headphone jack!";

    // Ajouter le nouveau paragraphe après le dernier paragraphe existant
    if (paragraphs.length > 0) {
        const lastParagraph = paragraphs[paragraphs.length - 1];
        lastParagraph.parentNode.appendChild(newParagraph);
    }
});

