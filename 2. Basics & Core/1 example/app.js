const app = Vue.createApp({
    data() {        // сами данные были функцией методов 
        return {
            courseGoalA: 'Закончить курс',
            courseGoalB: 'Мастерский выучить Vue',
            // courseGoalB: '<h2>Мастерский выучить Vue</h2>', - это по примеру к v-html
            vueLink: 'https://vuejs.org/'
        };
    },
    // опция методов - позволяют определять функции, которые должны выполняться, когда что то происходит, например нажатие кнопки
    methods: {
        outputGoal() {
            const randomNumber = Math.random();     // Math.random - математическая случайность
            if (randomNumber < 0.5) {
                return this.courseGoalA;
                // return 'Все верно!';
            }   else {
                return this.courseGoalB;
                // return 'Ошибка!';
            }
        }
    }
});

app.mount('#user-goal');    // метод монтирования этого приложения, при помощи #user-goa подключаем  