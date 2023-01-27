const app = Vue.createApp({
  data() {
    return { 
      // хочу прописать все, что пользователь ввел в этом ввод:
      enteredGoalValue: '',   // назвать можно было как захочешь
      // теперь избавляемся от жестко закодированной цели:
      goals: []
    };
  },
  // Добавляем методы
  methods: {
    // теперь в методе добавлений могу обратиться к целе
    addGoal() {
      this.goals.push(this.enteredGoalValue);
    },
    removeGoal(idx) {    // если хотим что то удалить
      this.goals.splice(idx, 1);      // splice найдет по индексу и удалит
    }
 
  }
});

app.mount('#user-goals');
