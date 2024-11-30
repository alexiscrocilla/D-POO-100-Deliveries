function addHousing(housingList, newHouse, quantity) {
    if (housingList.has(newHouse)) {
      housingList.set(newHouse, housingList.get(newHouse) + quantity);
    } else {
      housingList.set(newHouse, quantity);
    }
  }