// Calcul du nombre de HamSandwiches
let hamSandwiches = Math.min(Math.floor(breadCount / 2), hamCount);
breadCount -= hamSandwiches * 2;
hamCount -= hamSandwiches;

// Affichage du nombre de HamSandwiches
displayThisText("Ham sandwiches: " + hamSandwiches);

// Calcul du nombre de TunaSandwiches
let tunaSandwiches = Math.min(Math.floor(breadCount / 2), tunaCount, Math.floor(saladCount / 2));
breadCount -= tunaSandwiches * 2;
tunaCount -= tunaSandwiches;
saladCount -= tunaSandwiches * 2;

// Affichage du nombre de TunaSandwiches
displayThisText("Tuna sandwiches: " + tunaSandwiches);

// Calcul du nombre de VegetarianSandwiches
let vegetarianSandwiches = Math.min(Math.floor(breadCount / 2), Math.floor(saladCount / 1), Math.floor(tomatoCount / 2));
breadCount -= vegetarianSandwiches * 2;
saladCount -= vegetarianSandwiches;
tomatoCount -= vegetarianSandwiches * 2;

// Affichage du nombre de VegetarianSandwiches
displayThisText("Vegetarian sandwiches: " + vegetarianSandwiches);

// Affichage restes
displayIngredients();
