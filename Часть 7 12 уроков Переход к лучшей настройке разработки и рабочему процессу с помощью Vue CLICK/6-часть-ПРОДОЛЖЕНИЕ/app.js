const app = Vue.createApp({
    data() {
        return {
            // detailsAreVisible: false,               // 5. прописываем, чтобы по кнопке появлялись детали - это свойство изначально скрывает их!
                    // ПЕРЕНЕСЛИ В component !!!, поэтому здесь не надо

            friends: [
                { 
                    id: 'dmitriy', 
                    name: 'Дмитрий Рогов', 
                    phone: ' 8 995 456 45 46', 
                    email: 'ddddd@sss.com',
                },
                { 
                    id: 'eva', 
                    name: 'Ева Рогова', 
                    phone: ' 8 995 456 45 99', 
                    email: 'rrrrr@ooo.com',
                },
            ],
        };
    },

    // methods: {                       // ПЕРЕНЕСЛИ В component !!!, поэтому здесь не надо
    //     toggleDetails() {
    //         this.detailsAreVisible = !this.detailsAreVisible;   // 6. прописываем логику для кнопки (Show Details) показать детали 
    //     }
    // }

});

app.component('friend-contact', {       // 9. Подключаем компонент, это по сути - пользовательский html, 
            //САМОЕ ГЛАВНОЕ, 
            // чтобы в 1 (первом) Теге было ТИРЕ!!!! , чтобы избежать пересечения со встроинными html элементами!!
            // второй аргумент  {}
    template: `
    <li>         
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails()">
            {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
        </button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong>{{ friend.phone }}</li>
            <li><strong>Email:</strong>{{ friend.email }}</li>
        </ul>
    </li>
    `,
    // 12. выше Определяем шаблон                               
    data() {
        return {
            detailsAreVisible: false,      // 11. Перекидываем из Vue.createApp - data
            friend: {
                id: 'dmitriy', 
                name: 'Дмитрий Рогов', 
                phone: ' 8 995 456 45 46', 
                email: 'ddddd@sss.com',
            },
        };
    },
    methods: {                                  // 10. Перекидываем методы из Vue.createApp
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;  
        },
    },
});             


app.mount('#app');