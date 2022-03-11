import '@babel/polyfill'
import 'mutationobserver-shim'
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App'
import router from './router'
// import Vuex from 'vuex'
// var Vuex = require('vuex')
// import 'es6-promise/auto'
// Vue.use(Vuex)
//
// const store = new Vuex.Store({
//   state: {
//     count: 0
//   }
// })

import store from './store/store'




Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },

  render: h => h(App)
}).$mount('#app');

//
// new Vue({
//   store
//
