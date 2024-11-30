function fillBus(peopleAtBusStops, busSeats) {
    if (!Array.isArray(peopleAtBusStops) || typeof busSeats !== 'number' || busSeats <= 0) {
      return -1;
    }
  
    let totalPeople = 0;
  
    for (let i = 0; i < peopleAtBusStops.length; i++) {
      totalPeople += peopleAtBusStops[i];
      if (totalPeople >= busSeats) {
        return i + 1;
      }
    }
  
    return "There is still room on the bus";
  }