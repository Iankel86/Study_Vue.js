<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading...</p>  <!-- показывает название загрузки, пока данные подгружаются с сервера -->
      <p v-else-if="!isLoading && error">{{ error }}</p>  <!-- error №3 это покажет ошибку, если она будет -->
      <p
        v-else-if="!isLoading && (!results || results.length === 0)"
      >No stored experiences found. Start adding some survey results first.</p>
<!-- !isLoading - так что если мы не загружаемся, !results - но у нас нет результата, || results.length === 0 - или длинна наших резкльтатов =0, т оя хочу показать - Сохранненных текст не найден!  -->
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false,   // это по загрузке данных с сервера, показывает загрузку
      error: null,    // error №1 первоначальное значение null, т.к. нет ошибки
    };
  },
  methods: {
    loadExperiences() {
      this.isLoading = true;  // это по загрузке данных с сервера, показывает загрузку
      this.error = null;    // error №5  сброс значений при загрузке
      fetch('https://vue-http-demo-655a5-default-rtdb.firebaseio.com/surveys.json')
        .then((response) => { // then - принемает функцию, как только результат будет получен и потом выполнен браузером, за счет него нет пинга на странице, пока информация идет
          if (response.ok) {    // response.ok - все ли нормально с ответом от сервера
            return response.json();
          }
        })
        .then((data) => {     // здесь код по ответу от сервера и вывод у нас на странице
          this.isLoading = false; // это по загрузке данных с сервера, показывает загрузку
          const results = [];    // это первоначальный пустой массив, перед получением данных, данные потом заполняют его
          for (const id in data) {
            results.push({
              id: id,
              name: data[id].name,
              rating: data[id].rating,
            });
          }
          this.results = results;
        })
        .catch((error) => {
          console.log(error);
          this.isLoading = false; // это по загрузке данных с сервера, убирает надпись загрузки, т.к. есть ошибка 
          this.error = 'Failed to fetch data - please try again later.';  // error №2 когда есть ошибка показывет ее пользователю
        });
    },
  },
  mounted() {
    this.loadExperiences();   // метод загрузки впечатлений, чтобы автоматически загружались данные с сервера, если мы перезагружаем страницу!
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>