function splitOperation(operation) {

    const parts = operation.match(/(\d+)\s*([\+\-\*\/])\s*(\d+)/);
  
    if (parts) {
      return [parseInt(parts[1]), parts[2], parseInt(parts[3])];
    }
  
    return null;
  }