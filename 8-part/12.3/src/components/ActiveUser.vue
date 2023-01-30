<template>                  <!-- шаблон -->
    <section>
        <h2>{{ username }}</h2>     <!-- 1. Прописываем ФИ -->
        <h3>{{ userage }} Years</h3>           <!-- 2. Прописываем возраст -->
    </section>
</template>


<script>
    export default {        // а это сценарий
        props: {
            username: {
                type: String,
                reguired: true
            },            
            userage: {
                type: Number,
                reguired: true
            },
                
        },
    }; 
</script>

