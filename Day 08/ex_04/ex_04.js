$(document).ready(function () {
    // Fonction houdini : Fait disparaître tous les paragraphes
    function houdini() {
        $("p").fadeOut(); // Utilise fadeOut pour une disparition progressive
    }

    // Attacher la fonction houdini au bouton
    $("#hide-paragraphs").on("click", function () {
        houdini();
    });
});
