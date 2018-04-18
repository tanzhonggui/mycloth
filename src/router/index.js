import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Home from '@/pages/Home'
import ElementUI from 'element-ui'
import Cdetail from '@/pages/Cdetail'
import buyCart from '@/pages/buyCart'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Router)
Vue.use(ElementUI)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Cdetail',
      name: 'Cdetail',
      component: Cdetail
    },
    {
      path: '/buyCart',
      name: 'buyCart',
      component: buyCart
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    }
  ]
})
