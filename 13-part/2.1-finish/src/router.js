import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UsersFooter from './pages/UsersFooter.vue';

const router = createRouter({
  history: createWebHistory(), // это для того, что браузер знал откуда пришел пользователь и мог обратно его перекинуть 
  routes: [
    { path: '/', redirect: '/teams' }, // redirect:  это путь на который я хочу перенаправить
    {
      name: 'teams',
      path: '/teams',
      meta: { needsAuth: true },        // 
      components: { default: TeamsList, footer: TeamsFooter },
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true
        } // /teams/t1
      ]
    }, // our-domain.com/teams => TeamsList
    {
      path: '/users',
      components: {
        default: UsersList,
        footer: UsersFooter
      },
      beforeEnter(to, from, next) {           // Защита навигации
        console.log('users beforeEnter'); 
        console.log(to, from);
        next();
      }
    },                                        // '/:notFound(.*)' он выдает сообщение что адрес не верный и предлагает перейти на гравную
    { path: '/:notFound(.*)', component: NotFound }   // этот код должен быть вконце, т.к. будет перекрывать все маршруты!!! 
  ],
  linkActiveClass: 'active',
  scrollBehavior(_, _2, savedPosition) {      // при помощи этого кода осуществляется плавный переход наверх, если нажать на кнопку внизу
    // console.log(to, from, savedPosition);  // Плавный переход
    if (savedPosition) {                      // Плавный переход
      return savedPosition;                   // Плавный переход
    }                                         // Плавный переход
    return { left: 0, top: 0 };               // Плавный переход
  }                                           // Плавный переход
});

router.beforeEach(function(to, from, next) {    // Защита навигации
  console.log('Global beforeEach');
  console.log(to, from);
  if (to.meta.needsAuth) {
    console.log('Needs auth!');
    next();
  } else {
    next();
  }
  // if (to.name === 'team-members') {
  //   next();
  // } else {
  //   next({ name: 'team-members', params: { teamId: 't2' } });
  // }
  // next();
});

router.afterEach(function(to, from) {     // 
  // sending analytics data
  console.log('Global afterEach');
  console.log(to, from);
});

export default router;