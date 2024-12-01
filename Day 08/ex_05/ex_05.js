const app = Vue.createApp({
    data() {
        return {
            message: `The current time is ${new Date().getHours()}:${String(new Date().getMinutes()).padStart(2, '0')}.`
        };
    }
});

app.mount('#app');
