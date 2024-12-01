$(document).ready(function () {
    const carpet = $('#carpet');

    // Crée un carré initial de 3x3
    function createInitialCarpet() {
        const container = $('<div class="container"></div>');
        for (let i = 0; i < 9; i++) {
            const square = $('<div class="square"></div>');
            if (i === 4) {
                // Le centre est blanc
                square.addClass('white');
            } else {
                // Les carrés cliquables
                square.on('click', function (e) {
                    e.stopPropagation(); // Empêche le clic de se propager à d'autres carrés
                    transformToCarpet($(this));
                });
            }
            container.append(square);
        }
        carpet.append(container);
    }

    // Transforme un carré bleu en un nouveau 3x3
    function transformToCarpet(square) {
        square.off('click'); // Désactive l'ancien événement clic
        square.empty(); // Supprime tout contenu précédent
        square.addClass('container'); // Transforme le carré en un conteneur
        square.css({ backgroundColor: 'transparent' }); // Supprime la couleur de fond

        // Crée une nouvelle grille 3x3 à l'intérieur
        for (let i = 0; i < 9; i++) {
            const newSquare = $('<div class="square"></div>');
            if (i === 4) {
                newSquare.addClass('white'); // Le centre devient blanc
            } else {
                newSquare.on('click', function (e) {
                    e.stopPropagation(); // Empêche la propagation
                    transformToCarpet($(this)); // Transforme en nouveau 3x3
                });
            }
            square.append(newSquare);
        }
    }

    // Initialisation du tapis
    createInitialCarpet();
});
