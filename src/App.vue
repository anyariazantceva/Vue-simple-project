<template>
  <div id="app">
    <!-- здесь будут отображаться наши компоненты -->
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/contacts">Contacts</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
  import axios from 'axios'
  let rand = Math.floor(Math.random() * (3000-500)) + 500;
  export default {
    name: 'app',
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
<!-- стили компонента -->
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>