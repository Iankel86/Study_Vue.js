import { createRouter, createWebHistory } from 'vue-router';

import CoachDetail from './pages/coaches/CoachDetail.vue';     // 1)
import CoachesList from './pages/coaches/CoachesList.vue';     // 2)
import CoachRegistation from './pages/coaches/CoachRegistration.vue';   // 3)
import ContactCoach from './pages/requests/ContactCoach.vue';           // 5)
import RequestsReceived from './pages/requests/RequestsReceived.vue';   // 4)
import NotFound from './pages/NotFound.vue';          // 6)

const router = createRouter({
  history: createWebHistory(),    // создение веб истории
  routes: [                       // настройка маршрутов
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },   // 2)
    {
      path: '/coaches/:id',
      component: CoachDetail,                       // 1)
      props: true,
      children: [
        { path: 'contact', component: ContactCoach } // /coaches/c1/contact   // 5)
      ]
    },
    { path: '/register', component: CoachRegistation },      // 3)
    { path: '/requests', component: RequestsReceived },      // 4)
    { path: '/:notFound(.*)', component: NotFound }          // 6)
  ]
});

export default router;
