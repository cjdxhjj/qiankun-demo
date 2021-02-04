import Vue from 'vue';
import Router from 'vue-router';

/* Router Modules */
import portraitRouter from './modules/portrait';
import taskRouter from './modules/task';

Vue.use(Router);

export const routes = [
  {
    path: '/',
    name: 'home',
    hidden: true,
    component: () => import(/* webpackChunkName: "home" */ '@/views/home'),
  },
  portraitRouter,
  taskRouter
];

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes,
});
