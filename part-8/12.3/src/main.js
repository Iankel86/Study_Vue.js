import { createApp } from 'vue';

import ActiveUser from './components/ActiveUser.vue';   // 6
import UserData from './components/UserData.vue';       // 7
import App from './App.vue';  // 8

const app = createApp(App);     // 9 

app.component('active-user', ActiveUser);    // 10
app.component('user-data', UserData);        // 11

app.mount('#app');          // 12

// Задача 1:
// Add two components to the app: 
// Добавьте два компонента в приложение:

// An ActiveUser component and an UserData component
// // Активный пользовательский компонент (ActiveUser) и компонент пользовательских данных (UserData)

// ActiveUser should output a username (h2) and age (h3)
// // Активный пользователь должен ввести имя пользователя (h2) и возраст (h3)

// UserData should output two input fields => for name and age
// // Данные пользователя должны выводиться в двух полях ввода => для имени и возраста

// Optional: Add styling of your choice
// Необязательно: добавьте стиль по вашему выбору

// Task 2: Output both components side-by-side in your main App template
// Задача 2: Выведите оба компонента бок о бок в вашем основном шаблоне приложения

// Task 3: Add user data and ensure it contains a name and age
// Задача 3: Добавьте данные пользователя и убедитесь, что они содержат имя и возраст

// User data should be output in ActiveUser
// // Пользовательские данные должны выводиться неактивным пользователем

// It should be updated via the UserData component
// // Он должен быть обновлен с помощью компонента пользовательских данных
