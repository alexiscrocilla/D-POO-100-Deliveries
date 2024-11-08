// Initialisation des variables
var firstname = "John";
var lastname = "Doe";
var cardCode = "1111 2222 3333 4444";
var expiryDateMonth = 21;
var expiryDateYear = 2042;

// Création de la variable computedBankInfo
var computedBankInfo = firstname + "," + lastname + "," + cardCode + "," + expiryDateMonth + "/" + expiryDateYear;

// Affichage du résultat
displayInCard(computedBankInfo);
