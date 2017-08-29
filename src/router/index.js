import Vue from 'vue';
import VueRouter from 'vue-router';
/* import App from '../App.vue'; */
import login from '../components/login/login.vue';
import register from '../components/register/register.vue';
import findPassword from '../components/findPassword/findPassword.vue';
/* import mask from '../components/mask/mask.vue'; */
/* mask遮罩层设置 */

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/findPassword',
      name: 'findPassword',
      component: findPassword
    }
  ]
});
