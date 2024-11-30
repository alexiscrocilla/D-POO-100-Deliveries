document.addEventListener("DOMContentLoaded", () => {
    const cartItems = {};
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotalDisplay = document.getElementById("cart-total");

    // Ajouter un produit au panier
    function addToCart(productId, productName, productPrice) {
        if (!cartItems[productId]) {
            cartItems[productId] = { name: productName, price: productPrice, quantity: 1 };
        } else {
            cartItems[productId].quantity++;
        }
        updateCart();
    }

    // Supprimer un produit du panier
    function removeFromCart(productId) {
        delete cartItems[productId];
        updateCart();
    }

    // Mettre à jour le panier
    function updateCart() {
        cartItemsContainer.innerHTML = "";
        let total = 0;

        Object.keys(cartItems).forEach((productId) => {
            const item = cartItems[productId];
            total += item.price * item.quantity;

            const cartItem = document.createElement("div");
            cartItem.className = "cart-item";
            cartItem.innerHTML = `
                <span>${item.name} (x${item.quantity})</span>
                <span>$${item.price * item.quantity}</span>
                <button class="remove-item" data-id="${productId}">Remove</button>
            `;
            cartItemsContainer.appendChild(cartItem);
        });

        cartTotalDisplay.textContent = total.toFixed(2);

        // Gestion des clics pour supprimer
        const removeButtons = document.querySelectorAll(".remove-item");
        removeButtons.forEach((button) => {
            button.addEventListener("click", (event) => {
                const productId = event.target.dataset.id;
                removeFromCart(productId);
            });
        });
    }

    // Gestion des clics sur "Add to Cart"
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const product = button.closest(".product");
            const productId = product.dataset.id;
            const productName = product.querySelector("h3").textContent;
            const productPrice = parseFloat(product.dataset.price);
            addToCart(productId, productName, productPrice);
        });
    });
});
