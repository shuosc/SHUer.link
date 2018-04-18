import Vue from 'vue'
import Vuex from 'vuex'
import user from './module/user'
import navbar from './module/navbar'


Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    user,
    navbar
  },
  strict: debug
})
