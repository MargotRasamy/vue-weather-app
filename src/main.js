import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

Vue.use(Vuex);
Vue.use(VueRouter);
import Dashboard from './views/Dashboard.vue'


const router = new VueRouter({
  mode: 'history',
  routes: [{
    path : '/',
    component: Dashboard
  }]
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
