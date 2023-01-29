<template>                  <!-- шаблон -->
    <div>
        <active-user 
        :username="user.name"
        :userage="user.age"
        ></active-user>
        <user-data @set-data="setUserData"></user-data>
    </div>
</template>

<script>
export default {        // 13 а это сценарий   
    data() {
        return {
            user: {
                name: 'Ivan Grozniy',
                age: 31,
            },
        };
    },
    methods: {
        setUserData(name, age) {
            this.user = {
                name: name,
                age: +age 
            };
        }
    }
};    

</script>

<style> 
html {
    font-family: sans-serif;
}

section {       /* 3. добавляем стили под все разделы*/
    margin: 2rem auto;  /*  */
    max-width: 40rem;   /* максимальная ширина 40 */
    border-radius: 12px; /* радиус границы 12  */
    border: 1px solid #CCC;  /* бордюр 1 рх и серого цвета */
    padding: 1rem;
}       
</style>