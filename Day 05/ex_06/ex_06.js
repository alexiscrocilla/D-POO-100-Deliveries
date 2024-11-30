// Attendre que le DOM soit complètement chargé
document.addEventListener("DOMContentLoaded", () => {
    // 1. Afficher une alerte lorsque la fenêtre est redimensionnée
    window.addEventListener("resize", () => {
        alert("Size matters");
    });

    // 2. Afficher une alerte lorsque l'image est survolée
    const phoneImage = document.querySelector("img"); // Sélection de l'image
    if (phoneImage) {
        phoneImage.addEventListener("mouseover", () => {
            alert("Pretty, isn't it?");
        });
    }
});
