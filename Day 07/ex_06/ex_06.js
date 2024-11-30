document.addEventListener("DOMContentLoaded", () => {
    const robot = document.getElementById("robot");
    const speechBubble = document.getElementById("speech-bubble");
    const screenText = document.getElementById("screen-text");
    const inputField = document.getElementById("robot-input");
    const leftEye = document.querySelector(".eye-left-iris");
    const rightEye = document.querySelector(".eye-right-iris");
    let clickCount = 0; // Total des clics sur les deux yeux

    // Fonction pour afficher un message temporaire
    function showTemporaryMessage(element, message, duration) {
        const originalText = element.textContent;
        element.textContent = message;
        setTimeout(() => {
            element.textContent = originalText;
        }, duration);
    }

    // Gestion du clic sur le robot
    robot.addEventListener("click", () => {
        showTemporaryMessage(speechBubble, "Ouch, that hurts!", 2000);
    });

    // Gestion du survol du robot pour afficher les coordonnées
    robot.addEventListener("mousemove", (event) => {
        const rect = robot.getBoundingClientRect();
        const x = Math.floor(event.clientX - rect.left);
        const y = Math.floor(event.clientY - rect.top);
        screenText.textContent = `X: ${x}, Y: ${y}`;
    });

    // Gestion de la saisie dans le champ d'entrée
    inputField.addEventListener("input", () => {
        showTemporaryMessage(screenText, "Don't worry, I’ll take care of it!", 2000);
    });

    // Fonction pour changer aléatoirement la couleur des iris
    function changeIrisColor(eye) {
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        eye.style.fill = randomColor;
    }

    // Gestion des clics sur les yeux
    function handleEyeClick() {
        clickCount++;
        if (clickCount >= 10) {
            changeIrisColor(leftEye);
            changeIrisColor(rightEye);
            clickCount = 0; // Réinitialiser le compteur après le changement
        }
    }

    // Ajouter un gestionnaire de clics sur les deux yeux
    leftEye.addEventListener("click", handleEyeClick);
    rightEye.addEventListener("click", handleEyeClick);
});
