<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? '(Favorite)' : '' }}</h2>     <!-- 2. прописываем просто имя-->
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNamber }}  <!-- 3. прописываем телефон-->
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAdress }}  <!-- 4. прописываем адрес-->
      </li>
    </ul>
    <button @click="$emit('delete', id)">Delete</button> <!--(удал.1) Создаем кнопку УДАЛИТЬ, по клику (и не надо было в методе создавать)-->
  </li>
</template>

<script>
export default {
  // props: [    // 1. Реквизиты - чтобы в данных были разные контакты
  //   'name',
  //   'phoneNamber',
  //   'emailAdress'
  // ],
    props: {    // 6. Реквизиты - можно заменить объектом
      id: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },        
      phoneNamber: String,  // 7. как строка 
      emailAdress: {
        type: String,
        required: true,
      }, 
      isFavorite: {
        type: Boolean,
        required: false,
        default: false,
      }
    },
    emits: ['toggle-favorite', 'delete'],       // (удал.2) прописываю здесь по кнопке (далее в App.vue)
    // emits: {
    //   'toggle-favorite': function(id) {
    //     if (id) {
    //       return true;
    //     } else {
    //       console.warn('Ошибка');
    //       return false;
    //     }
    //   },
    // },
    data() {
      return {
        detailsAreVisible: false,
        // friend: {
        //   id: "manuel",
        //   name: "Manuel Lorenz",
        //   phone: "0123 45678 90",
        //   email: "manuel@localhost.com",
        // },
        // friendIsFavorite: this.isFavorite,
      };
    },
    methods: {
      toggleDetails() {                     // здесь тоже можно было как с кнопкой удаления сделать
        this.detailsAreVisible = !this.detailsAreVisible;
      },
      toggleFavorite() {                    // здесь тоже можно было как с кнопкой удаления сделать
        this.$emit('toggle-favorite', this.id);   
      },
      // deletFriend() {       // (удал.2) теперь в методе.  Создаем кнопку УДАЛИТЬ,
      //   this.$emit('delet');       // ИЛИ можно было срузу сделать в ШАБЛОНЕ
      // }         
    },
};
</script>