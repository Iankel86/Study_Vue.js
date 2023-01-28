// приложение просмотра, где передаем объект конфигурации
const app = Vue.createApp ({
    // добавим опцию данных сюда
    data() {
        return {    // и там сохраним вводимые пользователем данные
            inputClass: '',          //название могу писать какое хочу
            paragraphIsVisible: true,  // это новое св-во данных для кнопки Toggle Paragraph
            inputBackgroundColor: ''
        };    
    },
    computed: {     // делаем в html вместо  <p :class="{user1: inputClass === 'user1', user2: inputClass === 'user2'}" вычисляемое св-во
        paraClasses() {
            return {
                user1: this.inputClass === 'user1',
                user2: this.inputClass === 'user2',
                visible: this.paragraphIsVisible,    // а теперь добавим виsдимый класс проверкой
                hidden: !this.paragraphIsVisible,
            };
        }
    },
    methods: { // теперь для кнопки сделаем метод
        toggleParagraph() {
            this.paragraphIsVisible = !this.paragraphIsVisible;  // инвертируем значение, если была правда бедет ложь и наоборот

        }
    }


});
app.mount('#assignment');