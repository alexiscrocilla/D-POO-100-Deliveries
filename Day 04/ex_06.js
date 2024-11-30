function findAddresses(toFind) {

    addresses.forEach(function(address) {
      
      if (address[0].toLowerCase().includes(toFind.toLowerCase()) || address[1].toLowerCase().includes(toFind.toLowerCase())) {
        console.log(address[0] + ", " + address[1]);
      }
    });
  }