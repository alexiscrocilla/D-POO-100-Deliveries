$(document).ready(function () {
    // Fonction houdini : Fait disparaître tous les paragraphes ou des éléments spécifiques
    function houdini(name = null) {
        if (name) {
            // Si un nom est fourni, cibler l'ID ou la classe correspondante
            $(`#${name}, .${name}`).fadeOut();
        } else {
            // Sinon, faire disparaître tous les paragraphes
            $("p").fadeOut();
        }
    }

    // Attacher houdini au bouton pour cacher tous les paragraphes
    $("#hide-all").on("click", function () {
        houdini();
    });

    // Attacher houdini au bouton pour cacher les éléments spécifiques
    $("#hide-specific").on("click", function () {
        houdini("target"); // Exemple avec "target"
    });
});
