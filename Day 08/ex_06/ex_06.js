new Vue({
    el: '#app',
    data: {
        petName: 'Buddy', // BLANK1
        number1: 10,
        number2: 5,
        sentence1: 'hello world', // BLANK5
        sentence2: 'vue is great', // BLANK6
        sentence3: 'practice makes perfect'
    },
    methods: {
        // Méthode pour calculer la moitié de number1
        halfNumber1() {
            return this.number1 / 2;
        },
        // Méthode pour élever number2 à la puissance 3
        pow3(number) {
            return Math.pow(number, 3);
        }
    },
    filters: {
        // Filtre pour capitaliser une phrase
        capitalize(value) {
            if (!value) return '';
            return value.charAt(0).toUpperCase() + value.slice(1);
        },
        // Filtre pour inverser une phrase
        reverse(value) {
            if (!value) return '';
            return value.split('').reverse().join('');
        }
    }
});
