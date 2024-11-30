function addCarToAgent(agent, brand, model, color, power) {
    // Vérification que l'agent est un objet valide
    if (typeof agent !== "object" || agent === null) {
        console.error("L'argument agent doit être un objet valide.");
        return null;
    }

    // Vérifier les champs de la voiture
    if (
        typeof brand !== "string" || brand.trim() === "" ||
        typeof model !== "string" || model.trim() === "" ||
        typeof color !== "string" || color.trim() === "" ||
        typeof power !== "string" || power.trim() === ""
    ) {
        console.error("Tous les champs de la voiture doivent être des chaînes non vides.");
        return null;
    }

    // Ajouter les informations de la voiture à l'agent
    agent.car = {
        brand: brand,
        model: model,
        color: color,
        power: power
    };

    // Retourner l'agent mis à jour
    return agent;
}

// Exemple d'objet agent
const agent = {
    age: 57,
    code: "007",
    firstName: "James",
    lastName: "Bond"
};

// Ajouter une voiture à l'agent
const updatedAgent = addCarToAgent(agent, "Aston Martin", "DB5", "Silver", "420hp");

// Partager les informations sur l'interface
if (updatedAgent) {
    shareThatBeauty(updatedAgent);
}
