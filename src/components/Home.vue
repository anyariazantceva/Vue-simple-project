<template>
    <div class="posts">
        <h1>Our Posts</h1>
        <div class="user" v-for="user in users">
            {{ user.name }}
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    let rand = Math.floor(Math.random() * (3000-500)) + 500;
    export default {
        name: 'home',
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