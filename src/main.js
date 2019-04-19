import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import About from './components/About'
import Home from './components/Home'
import Contacts from './components/Contacts'

Vue.use(VueRouter);
//Пути

const routes = [
  { path: '/', component: Home},
  { path: '/about', component: About},
  { path: '/contacts', component: Contacts}
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
// Определяем селектор для корневого компонента
  el: '#app',
  // передаем шаблон корневому компаненту
  template: '<App/>',
  // Объявляем компоненты, к которым может обращаться корневой компонент;
  components: { App },
  // Передаем в роутер экземпляр Vue
  router
}).$mount('#app');
