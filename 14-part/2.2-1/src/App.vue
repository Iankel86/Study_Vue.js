<template>
  <div class="container">
    <users-list></users-list>
  </div>
  <div class="container">
    <div class="block" :class="{animate: animatedBlock}"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">
    <transition
      :css="false"   
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @enter-cancelled="enterCancelled"   
      @leave-cancelled="leaveCancelled"
    >
    <!-- :css="false" - не дает анимацию css и вместо этого весь переход будет управляться js, за счет этого повышается производительность, т.к. он не ищет css-->
    <!--@enter-cancelled="enterCancelled" событие отмены входа -->
    <!--@leave-cancelled="leaveCancelled" событие отмены выхода  -->


      <p v-if="paraIsVisible">This is only sometimes visible...</p>
    </transition>
    <button @click="toggleParagraph">Toggle Paragraph</button>
  </div>
  <div class="container">
    <transition name="fade-button" mode="out-in">   <!--mode="out-in"- режим перехода (или in-out -но видно будет кнопку) -->
      <button @click="showUsers" v-if="!usersAreVisible">Show Users</button>
      <button @click="hideUsers" v-else>Hide Users</button>   <!--активна только 1 из этих 2 кнопок -->
    </transition>
  </div>
  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>  

<script>
import UsersList from './components/UsersList.vue';

export default {
  components: {
    UsersList,
  },
  data() {
    return {
      animatedBlock: false,
      dialogIsVisible: false,
      paraIsVisible: false,
      usersAreVisible: false,
      enterInterval: null,        /* интервал входа */
      leaveInterval: null,        /* интервал выхода */
    };
  },
  methods: {
    enterCancelled(el) {                    /*  */
      console.log(el);
      clearInterval(this.enterInterval);    /* очистить интервал */
    },
    leaveCancelled(el) {
      console.log(el);
      clearInterval(this.leaveInterval);     /* очистить интервал */
    },
    beforeEnter(el) {
      console.log('beforeEnter');
      console.log(el);
      el.style.opacity = 0;
    },
    enter(el, done) {               /* done показывает, когда мы закончили */
      console.log('enter');
      console.log(el);
      let round = 1;
      this.enterInterval = setInterval(() => {
        el.style.opacity = round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.enterInterval);
          done();
        }
      }, 20);
    },
    afterEnter(el) {
      console.log('afterEnter');
      console.log(el);
    },
    beforeLeave(el) {
      console.log('beforeLeave');
      console.log(el);
      el.style.opacity = 1;       /* начальное состояние для анимации */
    },
    leave(el, done) {       /* done показывает, когда мы закончили */
      console.log('leave');
      console.log(el);
      let round = 1;
      this.leaveInterval = setInterval(() => {
        el.style.opacity = 1 - round * 0.01;    /* здесь код по плавному появлению текста */
        round++;
        if (round > 100) {
          clearInterval(this.leaveInterval);
          done();       /* done()показывает, когда мы закончили */
        }
      }, 20);
    },
    afterLeave(el) {
      console.log('afterLeave');
      console.log(el);
    },
    showUsers() {
      this.usersAreVisible = true;
    },
    hideUsers() {
      this.usersAreVisible = false;
    },
    animateBlock() {
      this.animatedBlock = true;
    },
    toggleParagraph() {
      this.paraIsVisible = !this.paraIsVisible;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 0.3s ease-out; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
.animate {                   /* плавная анимация */
  /* transform: translateX(-150px); */
  animation: slide-fade 0.3s ease-out forwards; /*slide-fade  - это св-ва анимации, которые прописаны ниже плавная анимация в 0,3 сек*, ease-out - функция ускорения и вконце замедления движения, а forwards - сохраняет конечное место! */
}

.fade-button-enter-from,         /* начальное положение анимации */
.fade-button-leave-to {
  opacity: 0;             /* прозрачность 0 */
}

.fade-button-enter-active {      /* что элемент должен сделать во время анимации - передвижение и т.д. анимации */
  transition: opacity 0.3s ease-out;
}

.fade-button-leave-active {      /* что элемент должен сделать во время анимации - передвижение и т.д. анимации */
  transition: opacity 0.3s ease-in;
}

.fade-button-enter-to,           /* конечное положение анимации */
.fade-button-leave-from {
  opacity: 1;              /* прозрачность 1 (не прозрачно) */
}

@keyframes slide-scale {     /* а здесь, как будет вести себя анимация */
  0% {
    transform: translateX(0) scale(1);
  }

  70% {
    transform: translateX(-120px) scale(1.1);
  }

  100% {
    transform: translateX(-150px) scale(1);
  }
}
</style>