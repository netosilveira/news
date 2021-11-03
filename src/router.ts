import Vue from 'vue';
import Router from 'vue-router';
import { components } from '@zeedhi/vuetify';

const { ZdFramePage } = components;

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue'),
    },
    {
      path: '/zeedhi',
      name: 'zeedhi',
      component: ZdFramePage,
      props: () => ({
        path: 'zeedhi',
        local: true,
      }),
    },
    {
      path: '/login',
      name: 'login',
      component: ZdFramePage,
      props: () => ({
        path: 'login',
        local: true,
      }),
    },
    {
      path: '*',
      component: ZdFramePage,
      props: {
        path: 'notfound',
        local: true,
      },
    },
  ],
});

export default router;
