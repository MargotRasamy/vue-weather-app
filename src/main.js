import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from './router/router.js'

Vue.use(Vuex);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
