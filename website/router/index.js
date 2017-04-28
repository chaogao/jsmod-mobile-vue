import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages'
import Dialog from '../pages/dialog'
import Alert from '../pages/dialog/alert'
import Button from '../pages/button'

Vue.use(Router);

let router = new Router({
  mode: 'history',

  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },

  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/dialog',
      name: 'dialog',
      component: Dialog
    },
    {
      path: '/alert',
      name: 'alert',
      component: Alert
    },
    {
      path: '/button',
      name: 'button',
      component: Button
    }
  ]
});


export default router;
