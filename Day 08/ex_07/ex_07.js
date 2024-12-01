new Vue({
    el: '#app',
    data: {
        positionX: window.innerWidth / 2 - 75, // Centrer l'image horizontalement
        positionY: window.innerHeight / 2 - 75 // Centrer l'image verticalement
    },
    methods: {
        teleportImage() {
            // Déplacer l'image aléatoirement sur la page
            this.positionX = Math.random() * (window.innerWidth - 150); // 150 = largeur de l'image
            this.positionY = Math.random() * (window.innerHeight - 150); // 150 = hauteur de l'image
        },
        moveImage(event) {
            const mouseX = event.clientX;
            const mouseY = event.clientY;

            // Vérifiez si le curseur est trop proche de l'image
            const distanceX = Math.abs(mouseX - this.positionX - 75); // 75 = moitié de la largeur de l'image
            const distanceY = Math.abs(mouseY - this.positionY - 75); // 75 = moitié de la hauteur de l'image

            if (distanceX < 100 && distanceY < 100) {
                this.teleportImage();
            }
        }
    }
});
