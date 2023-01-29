import { createApp } from 'vue';
// 2. делаем здесь объект конфигурации из файлы Vue с данными о друзьях

import App from './App.vue';
import FriendContact from './components/FriendContact.vue';

const app = createApp(App);

app.component('friend-contact', FriendContact);

app.mount('#app');