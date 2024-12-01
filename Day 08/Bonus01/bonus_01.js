document.addEventListener("DOMContentLoaded", () => {
    // Récupérer tous les éléments interactifs
    const elements = document.querySelectorAll('.interactive-element');
    const tooltips = [];

    // Initialisation des tooltips avec des animations différentes
    elements.forEach((element, index) => {
        tooltips.push(
            tippy(element, {
                trigger: 'manual', // Affiche manuellement les tooltips
                animation: ['scale', 'shift-away', 'shift-toward', 'fade', 'perspective'][index % 5], // Animation unique par élément
                theme: ['light', 'dark', 'translucent', 'material', 'border'][index % 5], // Thèmes différents
                interactive: true,
                hideOnClick: false, // Ne se cache pas automatiquement
                duration: [300, 200],
            })
        );
    });

    // Afficher le premier tooltip au chargement de la page
    let currentIndex = 0;
    tooltips[currentIndex].show();

    // Fonction pour afficher le tooltip suivant
    const showNextTooltip = () => {
        tooltips[currentIndex].hide(); // Cacher le tooltip actuel
        currentIndex = (currentIndex + 1) % tooltips.length; // Passer au suivant (boucle circulaire)
        tooltips[currentIndex].show(); // Afficher le suivant
    };

    // Attacher un événement clic à chaque tooltip pour afficher le suivant
    tooltips.forEach((tooltip, index) => {
        tooltip.setProps({
            onClickOutside: null, // Empêche de cacher au clic extérieur
            onTrigger(instance, event) {
                if (currentIndex === index) {
                    showNextTooltip(); // Passer au tooltip suivant si clic
                }
            },
        });
    });
});
