const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;    // 2 связываю html с js при помощи $refs.userText.value
      //console.log(this.$refs.userText);
    },
  },
});

app.mount('#app');
