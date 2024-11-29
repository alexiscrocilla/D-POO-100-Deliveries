function getFruitNameFromIndex(index) {
  
    if (index === -1 || index === "last") {
      return fruits[fruits.length - 1];
    }
  
    if (index >= 0 && index < fruits.length) {
      return fruits[index];
    }
  
    return null;
  }