import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/Homeview/homeview.vue';
import Register from '../views/Register/register.vue';
import Login from '../views/Login/login.vue';

const routes = [
  {
    path: '/', redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/register',
    name: 'signup',
    component: Register,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  base: process.env.BASE_URL,
  routes,
});

export default router;
