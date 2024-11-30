function updateLicensePlates(agent, plates) {
    // Vérifier que l'agent est un objet valide
    if (typeof agent !== "object" || agent === null) {
        console.error("L'argument agent doit être un objet valide.");
        return null;
    }

    // Vérifier que les plaques sont un tableau
    if (!Array.isArray(plates)) {
        console.error("Les plaques doivent être un tableau.");
        return null;
    }

    // Ajouter les plaques à l'agent
    agent.licensePlates = plates;

    // Retourner l'objet agent mis à jour
    return agent;
}

function showLicensePlates(agent) {
    // Vérifier que l'agent a une propriété licensePlates
    if (!agent.licensePlates || !Array.isArray(agent.licensePlates)) {
        console.error("L'objet agent ne contient pas de plaques valides.");
        return;
    }

    // Sélectionner le conteneur UL
    const platesContainer = document.querySelector(".plates-container");
    if (!platesContainer) {
        console.error("Impossible de trouver le conteneur des plaques.");
        return;
    }

    // Vider le conteneur avant de générer les plaques
    platesContainer.innerHTML = "";

    // Ajouter chaque plaque en tant que <li>
    agent.licensePlates.forEach((plate) => {
        const li = document.createElement("li");
        li.textContent = plate;
        platesContainer.appendChild(li);
    });
}

// Exemple d'utilisation
const agent = {
    age: 57,
    code: "007",
    firstName: "James",
    lastName: "Bond"
};

const licensePlates = ["LU 6789", "4711-EA-62", "BMT 216A"];

// Mettre à jour l'agent avec les plaques
updateLicensePlates(agent, licensePlates);

// Afficher les plaques dans l'interface
showLicensePlates(agent);
