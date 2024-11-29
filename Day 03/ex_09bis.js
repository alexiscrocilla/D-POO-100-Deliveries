function splitOperation(operation) {

    const parts = operation.match(/(\d+)\s*([\+\-\*\/])\s*(\d+)/);
  
    if (parts) {
      return [parseInt(parts[1]), parts[2], parseInt(parts[3])];
    }
  
    return null;
  }
  
  function doOperation(operation) {
    const parts = splitOperation(operation);
  
    if (parts) {
      const [firstNumber, operator, secondNumber] = parts;
  
      switch (operator) {
        case "+":
          return firstNumber + secondNumber;
        case "-":
          return firstNumber - secondNumber;
        case "*":
          return firstNumber * secondNumber;
        case "/":
          if (secondNumber === 0) {
            return "Error: Division by zero";
          }
          return firstNumber / secondNumber;
        default:
          return "Error: Invalid operator";
      }
    }
  
    return "Error: Invalid operation format";
  }