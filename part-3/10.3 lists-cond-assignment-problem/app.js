const app = Vue.createApp({
    data() {
        return {
            enteredValue: '',   // 1. введенное значение - как пуская строка
            tasks: [],  // 2. задачи приедсталяющие массив
            taskListIsVisible: true          // 11. решаем 3) задачу:  -->
        };
    },
    computed: {     //  17. вычисляемое св-во добавили (computed) 
        buttonCaption() {            //  18. подпись кнопки и вернуть обратно
            return this.taskListIsVisible ? 'Hide List' : 'Show List';  //  19. 
        }
    },
    methods: {      // 5. создаем методы
        addTask () { // 6. добавляем задачу
            this.tasks.push(this.enteredValue)  // 7. обращаемся к массиву задач и спомощью push переводим введенное значение в этот массив задач enteredValue
        },
        toggleTaskList() {  // 12. метод переключения задач
            this.taskListIsVisible = !this.taskListIsVisible;   // 13. если был список задач true станет fols и наоборот
        },
    }
});
app.mount('#assignment')