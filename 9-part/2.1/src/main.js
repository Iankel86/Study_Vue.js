import { createApp } from 'vue';

import App from './App.vue';
// import TheHeader from './components/TheHeader.vue';  перенесли ЛОКАЛЬНО отсюда
import BaseBadge from './components/BaseBadge.vue';
// import BadgeList from './components/BadgeList.vue';
// import UserInfo from './components/UserInfo.vue';

import BaseCard from './components/BaseCard.vue';   // 2/1 создали универсальй кусок оформления

const app = createApp(App);

// app.component('the-header', TheHeader);      перенесли ЛОКАЛЬНО отсюда
app.component('base-badge', BaseBadge);
// app.component('badge-list', BadgeList);      перенесли ЛОКАЛЬНО отсюда
// app.component('user-info', UserInfo);        перенесли ЛОКАЛЬНО отсюда

app.component('base-card', BaseCard);           // 2/2 создали универсальй кусок оформления

app.mount('#app');
