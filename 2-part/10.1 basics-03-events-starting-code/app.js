// document.querySelector('button').addEventListener() // так было бы сделано в ванильном JS, н опришлось бы указывать шаг за шагом все.

const app = Vue.createApp({
  data() {    // метод передачи данных
    return {
      counter: 20,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm () {
      alert('Sabmitted!');
    },
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    addcounter(num) {
      this.counter = this.counter + num;
    },
    addreduce(num) {
      this.counter = this.counter - num;
    }
  }
});

app.mount('#events');   // монтируем приложение по ip
