<template>
    <form @submit.prevent="submitData">
        <div>
            <label>Name</label>
            <input type="text" v-model="enteredName"/>
        </div>

        <div>
            <label>Phone</label>
            <input type="tel" v-model="enteredPhone" />
        </div>

        <div>
            <label>E-Mail</label>
            <input type="email" v-model="enteredEmail" />
        </div>
        <div>
            <button>Add Contact</button>
        </div>
   </form>
</template>

<script>
// мы должны создавать новых друзей.
// вверху шаблон
// а это сценарий
export default {
    emits: ['add-contact'],
    data() {            // это данные относящиеся к данному компоненту
        return {
            enteredName: '',        // теперь связываю их с моделью input type="text", type="tel" />, type="email" />
            enteredPhone: '',
            enteredEmail: '',
        };
    },
    methods: {
        submitData() {      // метод отправки данных, который будет срабатывать при отправке форм
            this.$emit('add-contact',
            this.enteredName,
            this.enteredPhone,
            this.enteredEmail
            );
        }
    }
};
</script>
