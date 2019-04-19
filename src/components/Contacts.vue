<template>
    <div id="contacts">
        <h1>There are some contacts</h1>
        <p v-for="user in users">Email: {{ user.email }}, phone: {{ user.phone }}</p>
    </div>
</template>

<script>
    import axios from 'axios'
    let rand = Math.floor(Math.random() * (3000-500)) + 500;
    export default {
        name: 'contacts',
        data() {
            return {
                users: null,
                endpoint: 'https://jsonplaceholder.typicode.com/users',
            }
        },

        created() {
            setTimeout(this.getAllUsers, rand);
        },

        methods: {
            getAllUsers() {
                axios.get(this.endpoint)
                    .then(response => {
                        this.users = response.data;
                    })
                    .catch(error => {
                        console.log('Error!Cannot get data...');
                        console.log(error);
                    })
            },

        }
    }
</script>

<style scoped>

</style>