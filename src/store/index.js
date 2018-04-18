import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import settings from './settings'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    user,
    settings
  },
  strict: debug
})
