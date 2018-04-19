import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router'
import store from './store'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import './style/transparent.css'
import './style/iconfont.css'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(MuseUI)

new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
