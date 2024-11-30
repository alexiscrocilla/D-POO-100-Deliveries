function houseEnergyScore(housingList) {
    housingList.forEach(house => {
     
      if (house[1] >= 450) {
        house.push("G");
      } else if (house[1] >= 330) {
        house.push("F");
      } else if (house[1] >= 230) {
        house.push("E");
      } else if (house[1] >= 150) {
        house.push("D");
      } else if (house[1] >= 90) {
        house.push("C");
      } else if (house[1] >= 51) {
        house.push("B");
      } else {
        house.push("A");
      }
    });

    return housingList.sort((a, b) => a[1] - b[1]);
  }