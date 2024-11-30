document.addEventListener("DOMContentLoaded", () => {
    // Supprimer l'élément "EXCLUSIVE"
    const exclusiveTag = document.getElementById("tag");
    if (exclusiveTag) {
        exclusiveTag.remove();
    }

    // Mettre à jour le titre du produit
    const productName = document.getElementById("productName");
    if (productName) {
        productName.textContent = "Samsung 22";
    }

    // Mettre à jour la description avec le contenu de Samsung.txt
    const description = document.getElementById("description");
    if (description) {
        description.innerHTML = `
            <p>Never miss that perfect shot again.</p>
            <p>Designed to revolutionise video and photography, with beyond cinematic 16K resolution.</p>
            <p>Get yours now!</p>
        `;
    }

    // Remplacer l'image par Samsung22.png
    const productImage = document.querySelector("img");
    if (productImage) {
        productImage.src = "./Samsung22.png"; // Assure-toi que Samsung22.png est dans le même dossier
        productImage.alt = "Samsung 22";
    }

    // Mettre à jour le prix
    const price = document.getElementById("price");
    if (price) {
        price.textContent = "890 €";
    }

    // Ajouter le texte "In cart: 0" sous le bouton "ADD TO CART"
    const addToCartDiv = document.getElementById("addToCart");
    if (addToCartDiv) {
        const inCartLabel = document.createElement("h3");
        inCartLabel.id = "inCart";
        inCartLabel.textContent = "In cart: 0";
        addToCartDiv.appendChild(inCartLabel);
    }

    // Ajouter un gestionnaire d'événement au bouton "ADD TO CART"
    const cartButton = document.querySelector(".cart-btn");
    let cartCount = 0;
    if (cartButton) {
        cartButton.addEventListener("click", () => {
            // Incrémenter le compteur
            cartCount++;
            const inCart = document.getElementById("inCart");
            if (inCart) {
                inCart.textContent = `In cart: ${cartCount}`;
            }
        });
    }
});
