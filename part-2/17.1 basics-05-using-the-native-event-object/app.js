const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      // fullname: '',
    };
  },
  methods: {
    // outputFullname() {
    //   console.log('Возврат...');         //Это не очень хорошй метод, т.к. перезагружается все методы, есть более правильный, через computed:
    //   if (this.name === '') {
    //     return '';
    //   }
    //   return this.name + ' ' + 'Шадрин';
    // },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    }
  },
  computed: {
    fullname() {
      console.log('Возврат...');
      if (this.name === '' || this.lastName === '') {
        return '';
      }
      return this.name + ' ' + this.lastName;
    }
  },
  watch: {      // Наблюдатель - это более длинный код получается, чем в computed:, но если ты хочешь проверить кол-во по счетчику, то здесь наблюдатель более удобен., или таймеры, или http запросы
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    }
    // name(value) {
    //   if (value === '') {
    //     this.fullname = '';
    //   } else {
    //     this.fullname = value + ' ' + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if (value === '') {
    //     this.fullname = '';
    //   } else {
    //     this.fullname = this.name + ' ' + value;
    //   }
    // }
  }
});

app.mount('#events');
