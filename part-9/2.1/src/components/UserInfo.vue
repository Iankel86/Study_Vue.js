<template>
  <section>
    <base-card>   <!--2/3 "Это универсальный кусок оформления - подключенный" -->
      <div>
        <h3>{{ fullName }}</h3>
        <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
      </div>
      <p>{{ infoText }}</p>
    </base-card>  <!--2/3 "Это универсальный кусок оформления - подключенный" -->
  </section>
</template>

<script>
export default {
  props: ['fullName', 'infoText', 'role'],
};
</script>

<style scoped>    /* при помощи scoped , этот стиль будет работать только здесь */
section {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}

section div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>