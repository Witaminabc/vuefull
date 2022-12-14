import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Chat from '@/components/Chat'

import Carusel from '@/components/Carusel'
import Menu from '@/components/Menu'
import Buyitem from '@/components/cart/Buyitem'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    // {
    //   path: '/carusel',
    //   name: 'Carusel',
    //   component: Carusel
    // },
    // {
    //   path: '/menu',
    //   name: 'Menu',
    //   component: Menu
    // },
    // {
    //   path: '/buyitem',
    //   name: 'Buyitem',
    //   component: Buyitem
    // },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat
    }
  ]
})
