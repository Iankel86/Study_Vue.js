const app = Vue.createApp({
    data() {        // сами данные были функцией методов 
        return {
            name: 'Ian',
            age: 36,
            // age_5: 36+5,
            // courseGoalB: '<h2>Мастерский выучить Vue</h2>', - это по примеру к v-html
            imgUrl: 'https://upload.wikimedia.org/wikipedia/ru/7/7f/Stitch.gif',
        };
    },
    // опция методов - позволяют определять функции, которые должны выполняться, когда что то происходит, например нажатие кнопки
    methods: {
        calculateAge() {
            return this.age + 5;
        },
        outputRandom() {
            return Math.random();     // Math.random - математическая случайность
        }
    }
});

app.mount('#assignment');    // метод монтирования этого приложения, при помощи #user-goa подключаем  