function findHousing(housingToFind, housingList) {
    var index = 0;
    housingToFind = housingToFind.toLowerCase();
    
    while (index < housingList.length) {
      if (housingList[index].toLowerCase() === housingToFind) {
        return [index, housingList[index]];
      }
      index++;
    }
    
    return null;
  }