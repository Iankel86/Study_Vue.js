<template>
  <div>
    <!-- <the-header></the-header> -->
    <TheHeader />        <!-- 4. и здеь можно было прописать как самозакрывающийся элемент, как Паскаль кейс  -->
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';     // 1. перенесли из main/js сделав не глобально, а ЛОКАЛНО, т.к используется только здесь
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';

export default {
  components: {       // 2. при помощи его может из глобального хранения перенести в ЛОКАЛЬНЫЙ 
    //'the-header': TheHeader   // 3. перенесли локально
    // TheHeader: TheHeader     // 3.  А можно было сделать так и тоже локально работает
    TheHeader,                   // 3.  Или вообще так и тоже локально работает
    BadgeList,        //  по аналогии с 3
    UserInfo          //  по аналогии с 3
  },
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
};
</script>

<style >
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>