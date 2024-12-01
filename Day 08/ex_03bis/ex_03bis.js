document.addEventListener("DOMContentLoaded", () => {
    // Initialisation des tooltips
    const tooltips = tippy('.interactive-element', {
        trigger: 'click', // Affiche le tooltip au clic
        interactive: true, // Permet d'interagir avec le tooltip
        animation: 'scale', // Animation "scale"
        duration: [300, 200], // Durées d'ouverture et de fermeture
    });

    // Afficher le premier tooltip au chargement
    setTimeout(() => {
        const firstTooltip = tooltips[0]; // Récupérer le premier tooltip
        if (firstTooltip) {
            firstTooltip.show(); // Afficher le tooltip
        }
    }, 500); // Délai pour un effet visuel

    // Fermer les tooltips si on clique ailleurs
    document.addEventListener("click", (event) => {
        if (!event.target.closest('.interactive-element')) {
            tippy.hideAll(); // Cache tous les tooltips
        }
    });
});
