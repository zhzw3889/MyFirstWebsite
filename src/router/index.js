import Vue from 'vue';
import VueRouter from 'vue-router';
/* import App from '../App.vue'; */
import login from '../components/login/login.vue';
/* import mask from '../components/mask/mask.vue'; */
/* mask遮罩层设置 */

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
});
