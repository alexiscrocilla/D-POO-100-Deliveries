document.addEventListener("DOMContentLoaded", () => {
    new Splide('#carousel', {
        type: 'loop',               // Carousel en boucle
        perPage: 3,                 // 3 images visibles
        autoplay: true,             // Démarrer automatiquement
        interval: 5000,             // Temps entre chaque changement (5 secondes)
        focus: 'center',            // Centrer l'image sélectionnée
        gap: '20px',                // Espacement entre les images
        pagination: true,           // Afficher les points de pagination
        arrows: true,               // Ajouter des flèches pour naviguer
    }).mount();
});
