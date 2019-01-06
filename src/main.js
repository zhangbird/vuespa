import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store/index.js'

Vue.config.productionTip = false

// console.log(process.env)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

