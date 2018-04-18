import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuesax from 'vuesax'
import axios from 'axios'
import './style/main.styl'

Vue.config.productionTip = false
Vue.config.performance = true
Vue.prototype.$http = axios

Vue.use(Vuesax)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
