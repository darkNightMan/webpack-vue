import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import './registerServiceWorker'
export default new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
