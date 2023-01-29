<template>
    <li>
        <h2>{{ friend.name}}</h2>
        <button @click="toggleDetails">Show Details</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
        </ul>
    </li>
</template>

<script>
    export default {
        date() {
            return {
                detailsAreVisible: false,
                friends: {
                        id: 'bill',
                        name: 'Bill Clinton',
                        phone: '8 994 125 13 46',
                        email: 'qqqqq@ooooo.com',
                },
            };
        },
        methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
            }
  }
    };
</script>