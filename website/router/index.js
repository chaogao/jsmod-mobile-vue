import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages'
import Dialog from '../pages/dialog'
import Alert from '../pages/dialog/alert'
import Confirm from '../pages/dialog/confirm'
import Toast from '../pages/dialog/toast'
import Button from '../pages/button'
import config from '../../config'

Vue.use(Router);

let router = new Router({
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
      path: '/confirm',
      name: 'confirm',
      component: Confirm
    },
    {
      path: '/toast',
      name: 'toast',
      component: Toast
    },
    {
      path: '/button',
      name: 'button',
      component: Button
    }
  ]
});


export default router;
