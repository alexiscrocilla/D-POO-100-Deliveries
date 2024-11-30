// Objet voiture avec une méthode logInfo()
const car = {
    brand: "Aston Martin",
    model: "DB5",
    color: "Silver",
    logInfo() {
        console.log(`Car information: ${this.color}, ${this.model}, ${this.brand}`);
    }
};

// Objet agent avec une méthode logInfo()
const agent = {
    firstName: "James",
    lastName: "Bond",
    age: 57,
    code: "007",
    car: car, // Associer l'objet voiture à l'agent
    logInfo() {
        console.log(`Agent information: ${this.firstName} ${this.lastName}, ${this.code}, ${this.age}`);
        if (this.car) {
            console.log(`${this.firstName} ${this.lastName}'s Car information:`);
            this.car.logInfo(); // Appeler logInfo() de l'objet voiture
        } else {
            console.log(`${this.firstName} ${this.lastName} doesn't have a car.`);
        }
    }
};
