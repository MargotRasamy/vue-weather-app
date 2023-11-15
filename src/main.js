import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import store from './store/index.js'
import i18n from './i18n'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  i18n,
  store
}).$mount('#app')
