document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector("h1");
    const words = title.textContent.split(" ");
    let shuffleInterval;
    let isPaused = false;

    // Fonction pour mélanger aléatoirement les mots
    function shuffleWords() {
        const shuffled = words
            .map((word) => ({ word, random: Math.random() }))
            .sort((a, b) => a.random - b.random)
            .map(({ word }) => word);
        title.textContent = shuffled.join(" ");
    }

    // Fonction pour démarrer l'intervalle
    function startShuffle() {
        shuffleInterval = setInterval(() => {
            if (!isPaused) {
                shuffleWords();
            }
        }, 2000);
    }

    // Fonction pour arrêter l'intervalle
    function stopShuffle() {
        clearInterval(shuffleInterval);
    }

    // Gérer le survol pour suspendre les changements
    title.addEventListener("mouseover", () => {
        isPaused = true;
    });

    title.addEventListener("mouseout", () => {
        isPaused = false;
    });

    // Copier le texte au clic sur le titre
    title.addEventListener("click", () => {
        stopShuffle();
        navigator.clipboard.writeText(title.textContent).then(() => {
            console.log("Text copied to clipboard!");
        });
    });

    // Reprendre les changements au clic en dehors du titre
    document.addEventListener("click", (event) => {
        if (!title.contains(event.target)) {
            startShuffle();
        }
    });

    // Gérer l'appui sur la touche "!"
    document.addEventListener("keydown", (event) => {
        if (event.key === "!") {
            setTimeout(() => {
                alert("42!");
            }, 42000);
        }
    });

    // Initialiser le mélange
    startShuffle();
});
