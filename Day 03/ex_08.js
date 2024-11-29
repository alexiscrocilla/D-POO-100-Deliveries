function getFruit(parameter) {

    if (typeof parameter === "string") {
      const index = fruits.indexOf(parameter);
      return index !== -1 ? parameter : null; 
    }
  
    if (typeof parameter === "number") {
      if (parameter === -1) {
        return fruits[fruits.length - 1];
      }
      if (parameter >= 0 && parameter < fruits.length) {
        return parameter;
      }
    }
  
    return null;
  }