function addCar(agentString, car) {
    // Convertir la chaîne JSON en objet JavaScript
    let agent;
    try {
        agent = JSON.parse(agentString); // Parse le JSON
    } catch (error) {
        console.error("Le format JSON est invalide :", error);
        return null;
    }

    // Vérifier que l'argument car est une chaîne non vide
    if (typeof car !== "string" || car.trim() === "") {
        console.error("La marque de la voiture doit être une chaîne non vide.");
        return null;
    }

    // Ajouter la clé "car" avec la marque de voiture
    agent.car = car;

    // Retourner l'objet modifié
    return agent;
}

// Exemple d'utilisation
const agentJSON = JSON.stringify({
    age: 57,
    code: "007",
    firstName: "James",
    lastName: "Bond"
});

const updatedAgent = addCar(agentJSON, "Aston Martin");
