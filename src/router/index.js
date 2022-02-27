import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Carusel from '@/components/Carusel'
import Menu from '@/components/Menu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/carusel',
      name: 'Carusel',
      component: Carusel
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    }
  ]
})
