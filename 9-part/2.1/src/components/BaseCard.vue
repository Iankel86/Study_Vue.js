<template>

    <div>
      <slot></slot>   <!--  2/4 slot предназначен для кода html шаблона -->
    </div>

</template>

<script>
export default {
//   props: ['content'],
};
</script>

<style scoped>  /* при помощи scoped , этот стиль будет работать только здесь */
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>