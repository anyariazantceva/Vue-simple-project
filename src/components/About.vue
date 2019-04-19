<template>
    <div id="about">
        <h1>About Us</h1>
        <p v-for="user in users">{{user.company.name}} {{user.company.catchPhrase}}</p>
    </div>
</template>

<script>
    import axios from 'axios'
    let rand = Math.floor(Math.random() * (3000-500)) + 500;
    export default {
        name: 'about',
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
    #about {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>