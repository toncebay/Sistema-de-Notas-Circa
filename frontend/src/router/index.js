import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Director from '@/components/Director/Director'
import Login from '@/components/Login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/director',
      name: 'Director',
      component: Director
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
