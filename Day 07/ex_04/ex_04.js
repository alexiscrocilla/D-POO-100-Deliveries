document.addEventListener("DOMContentLoaded", () => {
    // Gérer les boutons "+" et "-"
    const plusButtons = document.querySelectorAll(".plus-btn");
    const minusButtons = document.querySelectorAll(".minus-btn");

    plusButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const quantityInput = button.nextElementSibling;
            let currentValue = parseInt(quantityInput.value, 10);
            if (!isNaN(currentValue)) {
                quantityInput.value = currentValue + 1;
            }
        });
    });

    minusButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const quantityInput = button.previousElementSibling;
            let currentValue = parseInt(quantityInput.value, 10);
            if (!isNaN(currentValue) && currentValue > 1) {
                quantityInput.value = currentValue - 1;
            }
        });
    });

    // Gérer le bouton "Delete"
    const deleteButtons = document.querySelectorAll(".delete-btn");
    deleteButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const item = button.closest(".item");
            if (item) {
                item.remove();
            }
        });
    });

    // Gérer le bouton "Heart"
    const likeButtons = document.querySelectorAll(".like-btn");
    likeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            button.classList.toggle("is-active");
        });
    });
});
