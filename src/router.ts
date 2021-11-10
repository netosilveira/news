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
      path: '/all',
      name: 'all',
      component: ZdFramePage,
      props: () => ({
        path: 'all',
        local: true,
      }),
    },
    {
      path: '/date',
      name: 'date',
      component: ZdFramePage,
      props: () => ({
        path: 'date',
        local: true,
      }),
    },
    {
      path: '/category',
      name: 'category',
      component: ZdFramePage,
      props: () => ({
        path: 'category',
        local: true,
      }),
    },
    {
      path: '/country',
      name: 'country',
      component: ZdFramePage,
      props: () => ({
        path: 'country',
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
