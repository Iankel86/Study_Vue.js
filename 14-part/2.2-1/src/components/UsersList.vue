<template>
  <transition-group tag="ul" name="user-list">  <!-- переход для групп, дает анимировать группы -->
    <li v-for="user in users" :key="user" @click="removeUser(user)">{{ user }}</li>
  </transition-group>   <!-- переход для групп, дает анимировать группы -->
  <div>
    <input type="text" ref="userNameInput" />
    <button @click="addUser">Add User</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: ['Max', 'Manu', 'Julie', 'Angela', 'Michael'],
    };
  },
  methods: {
    addUser() {
      const enteredUserName = this.$refs.userNameInput.value;
      this.users.unshift(enteredUserName);
    },
    removeUser(user) {
      this.users = this.users.filter((usr) => usr !== user);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 1rem 0;
  padding: 0;
}
li {
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
}

.user-list-enter-from {             /* Исходная позиция */
  opacity: 0;
  transform: translateX(-30px);
}

.user-list-enter-active {           /* плавное появление */
  transition: all 1s ease-out;
}

.user-list-enter-to,
.user-list-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.user-list-leave-active {
  transition: all 1s ease-in;
  position: absolute;           /* плавное сдвижение элементов взамен удаленных */
}

.user-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.user-list-move {              /* специальный класс для плавного появления новых объектов, другие элементы плавно переезжают вниз */
  transition: transform 0.8s ease;
}
</style>