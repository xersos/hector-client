import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/views/Dashboard'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      props: { page: 1 },
      alias: '/'
    },
    {
      path: '*',
      props: { page: 5 },
      redirect: '/404'
    }
  ]
});
