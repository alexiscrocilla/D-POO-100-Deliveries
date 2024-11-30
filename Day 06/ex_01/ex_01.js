function displayAgentInfo(obj) {
    const agentInfo = `My name is ${obj.lastName.toLowerCase()}, ${obj.firstName} ${obj.lastName.toLowerCase()}! I'm the agent ${obj.code} and I'm ${obj.age} years old.`;

    // Sélectionner le paragraphe existant dans la page
    const paragraph = document.querySelector("#container p");
    if (paragraph) {
        paragraph.textContent = agentInfo;
    } else {
        console.error("Impossible de trouver l'élément <p> pour afficher les informations.");
    }
}

// Ajouter un gestionnaire d'événement pour exécuter la fonction après le chargement de la page
window.addEventListener("DOMContentLoaded", () => {
    // Exemple d'objet agent
    const agent = {
        age: 57,
        code: "007",
        firstName: "James",
        lastName: "Bond"
    };

    // Appeler la fonction displayAgentInfo avec l'objet agent
    displayAgentInfo(agent);
});
